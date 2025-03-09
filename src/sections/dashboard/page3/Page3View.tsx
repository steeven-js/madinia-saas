import { Box, Typography, Card, CardContent, Grid, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DynamicIcon from '../../../components/DynamicIcon';

// ==============================|| PAGE3 VIEW ||============================== //

const Page3View = () => {
  // Exemple de données pour la liste
  const listItems = [
    'Élément 1 - Description détaillée',
    'Élément 2 - Description détaillée',
    'Élément 3 - Description détaillée',
    'Élément 4 - Description détaillée',
    'Élément 5 - Description détaillée'
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h3" component="div">
                Page 3
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Contenu de la Page 3 - Vous pouvez personnaliser cette section selon vos besoins.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Informations importantes
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography variant="body1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Liste des éléments
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {listItems.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <DynamicIcon name="IconCircleCheck" size={20} stroke={1.5} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page3View; 