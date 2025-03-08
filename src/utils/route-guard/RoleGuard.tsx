import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// @project
import PageLoader from '../../components/PageLoader';
import { useAuth } from '../../contexts/AuthContext';
import menuItems from '../../menu';

// @types
import { NavItemType } from '../../types/menu';

// Props
interface RoleGuardProps {
  children: ReactNode;
}

/***************************  ROLE GUARD  ***************************/

export default function RoleGuard({ children }: RoleGuardProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const [activeItem, setActiveItem] = useState<NavItemType | undefined>();
  const [isProcessing, setIsProcessing] = useState(true);

  const { userClaims } = useAuth();
  const currentRole = userClaims?.role; // 'super-admin', 'admin' ou 'user'

  useEffect(() => {
    const findMenuItem = async () => {
      const matchedItem = await findMenu();
      setActiveItem(matchedItem);
      setIsProcessing(false);
    };
    findMenuItem();
  }, [pathname]);

  const findMenu = () => {
    return new Promise<NavItemType | undefined>((resolve) => {
      for (const menu of menuItems?.items) {
        if (menu.type === 'group') {
          const matchedParents = findParentElements(menu.children || [], pathname);
          if (matchedParents) {
            resolve(matchedParents[0]); // Get the first matched parent item
            return;
          }
        }
      }
      resolve(undefined);
    });
  };

  const findParentElements = (navItems: NavItemType[], targetUrl: string, parents: NavItemType[] = []): NavItemType[] | null => {
    for (const item of navItems) {
      const newParents = [...parents, item];

      if (item.url === targetUrl) {
        return newParents;
      }

      if (item.children) {
        const result = findParentElements(item.children, targetUrl, newParents);
        if (result) {
          return result;
        }
      }
    }

    return null;
  };

  if (isProcessing) return <PageLoader />;

  if (activeItem?.roles?.length && currentRole && !activeItem.roles.includes(currentRole)) {
    return (
      <Container sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Accès refusé
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Vous n'avez pas les permissions nécessaires pour accéder à cette page.
        </Typography>
      </Container>
    );
  }

  return <>{children}</>;
} 