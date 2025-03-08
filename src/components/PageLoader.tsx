import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function PageLoader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%'
      }}
    >
      <CircularProgress />
    </Box>
  );
} 