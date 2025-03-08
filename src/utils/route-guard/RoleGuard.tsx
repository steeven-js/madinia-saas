import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// @project
import { SplashScreen } from '../../components/loading-screen';
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
  const currentRole = userClaims?.role;

  useEffect(() => {
    findMenuItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const findMenuItem = async () => {
    const menuItem = findMenu();
    setActiveItem(menuItem);
    setIsProcessing(false);
  };

  const findMenu = () => {
    for (const menu of menuItems.items) {
      if (menu.type === 'group') {
        const matchedParents = findParentElements(menu.children || [], pathname);
        if (matchedParents) {
          return matchedParents[matchedParents.length - 1];
        }
      }
    }
    return undefined;
  };

  const findParentElements = (navItems: NavItemType[], targetUrl: string, parents: NavItemType[] = []): NavItemType[] | null => {
    for (const navItem of navItems) {
      const newParents = [...parents, navItem];
      
      if (navItem.url === targetUrl) {
        return newParents;
      }
      
      if (navItem.children) {
        const childResult = findParentElements(navItem.children, targetUrl, newParents);
        if (childResult) {
          return childResult;
        }
      }
    }
    return null;
  };

  if (isProcessing) {
    return <SplashScreen />;
  }

  if (!activeItem) {
    return <>{children}</>;
  }

  if (activeItem.roles?.length && currentRole && !activeItem.roles.includes(currentRole)) {
    return (
      <Container>
        <Typography variant="h1" component="h2" gutterBottom>
          Accès refusé
        </Typography>
        <Typography variant="body1">
          Vous n'avez pas les permissions nécessaires pour accéder à cette page.
        </Typography>
      </Container>
    );
  }

  return <>{children}</>;
} 