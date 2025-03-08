import { useState, ReactNode } from 'react';

// @mui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// @project
import Header from './Header';
import Drawer from './Drawer';

// Props
interface AdminLayoutProps {
  children: ReactNode;
}

/***************************  ADMIN LAYOUT  ***************************/

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { sm: `calc(100% - ${open ? 240 : 64}px)` },
          ml: { sm: `${open ? 240 : 64}px` },
          mt: '64px'
        }}
      >
        {children}
      </Box>
    </Box>
  );
} 