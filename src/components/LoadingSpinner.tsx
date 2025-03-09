// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// @project
import LogoIcon from './logo/LogoIcon';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

/**
 * Composant d'indicateur de chargement avec logo
 */
export default function LoadingSpinner({ 
  size = 'medium'
}: LoadingSpinnerProps) {
  const theme = useTheme();
  
  const spinnerSizes = {
    small: 40,
    medium: 60, 
    large: 80
  };

  return (
    <Box 
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ position: 'relative' }}>
          <CircularProgress
            size={spinnerSizes[size]}
            sx={{
              color: theme.palette.primary.main
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <LogoIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}