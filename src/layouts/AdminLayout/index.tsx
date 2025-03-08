import { useState, ReactNode } from 'react';

// @mui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// @project
import Header from './Header';
import Drawer from './Drawer';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from 'src/config';

// Props
interface AdminLayoutProps {
  children: ReactNode;
}

/***************************  ADMIN LAYOUT  ***************************/

export default function AdminLayout({ children }: AdminLayoutProps) {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(!downLG);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { xs: '100%', lg: `calc(100% - ${open ? DRAWER_WIDTH : MINI_DRAWER_WIDTH}px)` },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          ...(open && {
            marginLeft: { lg: `${DRAWER_WIDTH}px` },
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen
            })
          })
        }}
      >
        <Box sx={{ pt: { xs: 8, sm: 8.5, md: 9.5 } }} />
        {children}
      </Box>
    </Box>
  );
} 