import { useEffect } from 'react';

// @mui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

// @project
import { useAuth } from 'src/hooks/use-auth';

/***************************  DASHBOARD - ANALYTICS  ***************************/

export default function DashboardAnalytics() {
  const { displayRole, isAdmin, isSuperAdmin, refreshUserClaims } = useAuth();

  useEffect(() => {
    refreshUserClaims();
  }, [refreshUserClaims]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Bienvenue sur votre tableau de bord, {displayRole}.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Utilisateurs
              </Typography>
              <Typography variant="h3">1,254</Typography>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="success.main" sx={{ mr: 1 }}>
                  +12%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  depuis le mois dernier
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenus
              </Typography>
              <Typography variant="h3">$12,543</Typography>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="success.main" sx={{ mr: 1 }}>
                  +8%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  depuis le mois dernier
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Taux de conversion
              </Typography>
              <Typography variant="h3">3.2%</Typography>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="error.main" sx={{ mr: 1 }}>
                  -2%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  depuis le mois dernier
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {isSuperAdmin && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Informations administrateur
                </Typography>
                <Typography variant="body1">
                  Cette section n'est visible que par les super-administrateurs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}

        {(isSuperAdmin || isAdmin) && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Informations de gestion
                </Typography>
                <Typography variant="body1">
                  Cette section est visible par les administrateurs et les super-administrateurs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
} 