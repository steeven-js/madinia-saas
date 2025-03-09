import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

// ==============================|| PAGE1 VIEW ||============================== //

const Page1View = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h3" component="div">
                Page 1
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Contenu de la Page 1 - Vous pouvez personnaliser cette section selon vos besoins.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div">
                Section A
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contenu de la section A
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div">
                Section B
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contenu de la section B
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page1View; 