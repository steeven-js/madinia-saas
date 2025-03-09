import { useEffect, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';

// @project
import { APP_DEFAULT_PATH } from 'src/config';
import menuItems from 'src/menu';
import { generateFocusStyle } from 'src/utils/generateFocusStyle';

// @assets
import { IconChevronRight } from '@tabler/icons-react';

// @types
import { NavItemType } from 'src/types/menu';

// @data
const homeBreadcrumb: NavItemType = { title: 'Home', url: APP_DEFAULT_PATH };

/***************************  BREADCRUMBS  ***************************/

export default function Breadcrumbs({ data }: { data?: NavItemType[] }) {
  const theme = useTheme();
  const location = useLocation();

  const [breadcrumbItems, setBreadcrumbItems] = useState<NavItemType[]>([]);
  const [activeItem, setActiveItem] = useState<NavItemType>();

  useEffect(() => {
    console.log('Current pathname:', location.pathname);
    
    if (data?.length) {
      dataHandler(data);
    } else {
      // Recherche directe de l'élément correspondant à l'URL exacte
      const exactMatch = findExactMatch(location.pathname);
      
      if (exactMatch) {
        console.log('Exact match found:', exactMatch);
        dataHandler(exactMatch);
      } else {
        // Fallback à l'ancienne méthode si aucune correspondance exacte n'est trouvée
        for (const menu of menuItems?.items) {
          if (menu.type && menu.type === 'group') {
            const matchedParents = findParentElements(menu.children || [], location.pathname);
            if (matchedParents) {
              console.log('Matched parents:', matchedParents);
              dataHandler(matchedParents);
              break;
            }
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, location.pathname]);

  // Mettre à jour le titre de la page lorsque l'élément actif change
  useEffect(() => {
    if (activeItem?.title) {
      // Définir le titre de la page avec le format "Titre - Nom de l'application"
      // Vous pouvez ajuster le format selon vos besoins
      document.title = `${activeItem.title} - Madinia`;
      console.log('Setting page title to:', activeItem.title);
    } else {
      // Titre par défaut si aucun élément actif n'est trouvé
      document.title = 'Madinia';
      console.log('No active item found, using default title');
    }
  }, [activeItem]);

  // Fonction pour trouver une correspondance exacte d'URL dans tout le menu
  function findExactMatch(targetUrl: string): NavItemType[] | null {
    function searchItem(items: NavItemType[], parents: NavItemType[] = []): NavItemType[] | null {
      for (const item of items) {
        const currentPath = [...parents, item];
        
        // Vérifier si l'URL correspond exactement
        if (item.url === targetUrl) {
          console.log('Found exact URL match:', item.url, 'for title:', item.title);
          return [...parents, item];
        }
        
        // Rechercher dans les enfants
        if (item.children && item.children.length > 0) {
          const found: NavItemType[] | null = searchItem(item.children, currentPath);
          if (found) return found;
        }
      }
      return null;
    }
    
    // Parcourir tous les groupes de menu
    for (const menu of menuItems.items) {
      if (menu.children) {
        const found: NavItemType[] | null = searchItem(menu.children, [menu]);
        if (found) return found;
      }
    }
    
    return null;
  }

  const dataHandler = (data: NavItemType[]) => {
    console.log('Data handler received:', data);
    const active = data.at(-1);
    const linkItems = data.slice(0, -1);
    if (active && active.url != homeBreadcrumb.url) {
      linkItems.unshift(homeBreadcrumb);
    }
    console.log('Setting active item:', active);
    setActiveItem(active);
    setBreadcrumbItems(linkItems);
  };

  function findParentElements(navItems: NavItemType[], targetUrl: string): NavItemType[] | null {
    // Trouver l'élément avec la correspondance d'URL la plus précise
    let bestMatch: { item: NavItemType | null; parents: NavItemType[]; matchLength: number } = {
      item: null,
      parents: [],
      matchLength: 0
    };

    function findMatch(items: NavItemType[], currentParents: NavItemType[] = []) {
      for (const item of items) {
        const newParents = [...currentParents, item];
        
        // Vérifier si l'URL de l'élément correspond exactement ou est un préfixe de l'URL cible
        if (item.url) {
          console.log('Checking URL:', item.url, 'against target:', targetUrl);
          
          if (item.url === targetUrl) {
            // Correspondance exacte - priorité absolue
            console.log('Exact match found for:', item.title);
            bestMatch = {
              item,
              parents: newParents,
              matchLength: Number.MAX_SAFE_INTEGER // Priorité maximale
            };
            // Pas besoin de continuer la recherche
            return;
          } else if (targetUrl.startsWith(item.url + '/')) {
            // Préfixe avec séparateur - bonne correspondance
            console.log('Prefix match found for:', item.title, 'length:', item.url.length);
            if (item.url.length > bestMatch.matchLength) {
              bestMatch = {
                item,
                parents: newParents,
                matchLength: item.url.length
              };
            }
          }
        }

        // Rechercher récursivement dans les enfants
        if (item.children) {
          findMatch(item.children, newParents);
        }
      }
    }

    findMatch(navItems);

    // Si une correspondance a été trouvée, retourner les parents
    if (bestMatch.item) {
      console.log('Best match found:', bestMatch.item.title);
      return bestMatch.parents;
    }
    return null;
  }

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" separator={<IconChevronRight size={16} />}>
      {breadcrumbItems.length &&
        breadcrumbItems.map((item, index) => (
          <Typography
            {...(item.url && { component: Link, to: item.url })}
            variant="body2"
            sx={{
              p: 0.5,
              color: 'grey.700',
              textDecoration: 'none',
              ...(item.url && { cursor: 'pointer', ':hover': { color: 'primary.main' } }),
              ':focus-visible': { outline: 'none', borderRadius: 0.25, ...generateFocusStyle(theme.palette.primary.main) }
            }}
            key={index}
          >
            {item.title}
          </Typography>
        ))}
      {activeItem && (
        <Typography variant="body2" sx={{ p: 0.5 }}>
          {activeItem.title}
        </Typography>
      )}
    </MuiBreadcrumbs>
  );
}
