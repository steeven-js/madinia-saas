import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';

// ==============================|| PAGE2 VIEW ||============================== //

const Page2View = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h3" component="div">
                Page 2
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Contenu de la Page 2 - Vous pouvez personnaliser cette section selon vos besoins.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Statistiques
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                  <CardContent>
                    <Typography variant="h6">Statistique 1</Typography>
                    <Typography variant="h4">250</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
                  <CardContent>
                    <Typography variant="h6">Statistique 2</Typography>
                    <Typography variant="h4">120</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: 'success.light', color: 'success.contrastText' }}>
                  <CardContent>
                    <Typography variant="h6">Statistique 3</Typography>
                    <Typography variant="h4">75%</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page2View; 