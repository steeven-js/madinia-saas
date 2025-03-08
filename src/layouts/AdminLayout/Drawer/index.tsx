import { useMemo } from 'react';

// @mui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

// @project
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';

import { handlerDrawerOpen, useGetMenuMaster } from 'src/states/menu';
import { DRAWER_WIDTH } from 'src/config';

interface Props {
  window?: () => Window;
}

/***************************  ADMIN LAYOUT - DRAWER  ***************************/

export default function MainDrawer({ window }: Props) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  // Define container for drawer when window is specified
  const container = window !== undefined ? () => window().document.body : undefined;

  // Memoize drawer content and header to prevent unnecessary re-renders
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={drawerOpen} />, [drawerOpen]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {downLG ? (
        // Temporary drawer for smaller screens
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={() => handlerDrawerOpen(!drawerOpen)}
          PaperProps={{
            sx: {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: '1px solid',
              borderRightColor: 'divider',
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
          ModalProps={{ keepMounted: true }}
          // TODO - Remove this style - not working toggler for resize
          sx={{ display: { xs: drawerOpen ? 'block' : 'none', lg: 'none', zIndex: 1501 } }}
        >
          {drawerHeader}
          <Divider sx={{ mx: 2 }} />
          {drawerContent}
        </Drawer>
      ) : (
        // Permanent drawer for larger screens
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {drawerHeader}
          <Divider sx={{ mx: 2 }} />
          {drawerContent}
        </MiniDrawerStyled>
      )}
    </Box>
  );
}
