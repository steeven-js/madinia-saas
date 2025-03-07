import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useAuth } from 'src/contexts/AuthContext';
import { PATHS } from 'src/routes/path';
import LogoMain from 'src/components/logo/LogoMain';
import GetImagePath from 'src/utils/GetImagePath';

const dashBoardImage = {
  light: '/assets/images/graphics/hosting/dashboard-light.svg',
  dark: '/assets/images/graphics/hosting/dashboard-dark.svg'
};

interface GuestLayoutProps {
  children?: ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid size={{ xs: 12, md: 6, lg: 7 }} sx={{ p: { xs: 3, sm: 7 } }}>
        {children || <Outlet />}
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 5 }} sx={{ bgcolor: 'grey.100', pt: 7, display: { xs: 'none', md: 'block' } }}>
        <Stack sx={{ height: 1, justifyContent: 'space-between' }}>
          <Stack sx={{ alignItems: 'center', gap: 2 }}>
            <LogoMain />
            <Typography variant="body2" color="text.secondary" align="center" sx={{ maxWidth: 400 }}>
              SaaS platform for seamless data management and user insights. Unlock growth with real-time analytics and flexible features.
            </Typography>
          </Stack>
          <Box sx={{ pt: 6, pl: 6, height: 'calc(100% - 114px)' }}>
            <CardMedia
              image={GetImagePath(dashBoardImage)}
              sx={{
                height: 1,
                border: '4px solid',
                borderColor: 'grey.300',
                borderBottom: 'none',
                borderRight: 'none',
                backgroundPositionX: 'left',
                backgroundPositionY: 'top',
                borderTopLeftRadius: 24
              }}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}