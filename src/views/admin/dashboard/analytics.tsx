// @mui
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

// @project
import { useAuth } from 'src/hooks/use-auth';

/***************************  DASHBOARD - ANALYTICS  ***************************/

export default function DashboardAnalytics() {
  const { 
    currentUser, 
    userClaims, 
    displayRole, 
    isAdmin, 
    isSuperAdmin, 
    refreshUserClaims,
    isRefreshing
  } = useAuth();

  return (
    <Grid2 container spacing={3}>
      {/* Carte d'information utilisateur */}
      <Grid2 size={4}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar 
                src={currentUser?.photoURL || '/assets/images/users/avatar-1.png'} 
                alt={currentUser?.displayName || 'Utilisateur'} 
                sx={{ width: 56, height: 56, mr: 2 }}
              />
              <Box>
                <Typography variant="h5">
                  {currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Utilisateur'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currentUser?.email}
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Rôle: 
                <Chip 
                  label={displayRole}
                  color={isSuperAdmin ? 'error' : isAdmin ? 'primary' : 'default'}
                  size="small"
                  sx={{ ml: 1 }}
                />
              </Typography>
              
              <Typography variant="body2" gutterBottom>
                Email vérifié: {currentUser?.emailVerified ? 'Oui' : 'Non'}
              </Typography>
              
              <Typography variant="body2" gutterBottom>
                Dernière connexion: {currentUser?.metadata.lastSignInTime}
              </Typography>
              
              <Button 
                variant="outlined" 
                size="small" 
                onClick={refreshUserClaims}
                disabled={isRefreshing}
                startIcon={isRefreshing ? <CircularProgress size={16} /> : null}
                sx={{ mt: 2 }}
              >
                {isRefreshing ? 'Rafraîchissement...' : 'Rafraîchir les claims'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
      
      {/* Carte des claims Firebase */}
      <Grid2 size={8}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Claims Firebase
            </Typography>
            <Box 
              sx={{ 
                mt: 2, 
                p: 2, 
                bgcolor: 'background.default', 
                borderRadius: 1,
                maxHeight: 300,
                overflow: 'auto'
              }}
            >
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                {JSON.stringify(userClaims, null, 2)}
              </pre>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
      
      {/* Contenu conditionnel basé sur le rôle */}
      {(isAdmin || isSuperAdmin) && (
        <Grid2 size={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Panneau d'administration
              </Typography>
              <Typography variant="body1">
                Contenu visible uniquement pour les administrateurs et super administrateurs.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      )}
      
      {isSuperAdmin && (
        <Grid2 size={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Panneau Super Admin
              </Typography>
              <Typography variant="body1">
                Contenu visible uniquement pour les super administrateurs.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      )}
    </Grid2>
  );
} 