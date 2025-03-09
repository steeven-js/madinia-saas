import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import LogoIcon from 'src/components/logo/LogoIcon';

// ----------------------------------------------------------------------

export function SplashScreen() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        right: 0,
        width: 1,
        zIndex: 9999,
        position: 'fixed',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        backdropFilter: 'blur(8px)',
        transition: theme.transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.complex
        })
      }}
    >
      <m.div
        animate={{
          scale: [1, 0.9, 0.9, 1, 1],
          opacity: [1, 0.48, 0.48, 1, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <LogoIcon />
      </m.div>

      <Box
        component={m.div}
        animate={{
          scale: [1.6, 1, 1, 1.6, 1.6],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 0.25, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        sx={{
          width: { xs: 80, md: 100 },
          height: { xs: 80, md: 100 },
          position: 'absolute',
          border: (theme) => `solid 3px ${alpha(theme.palette.primary.main, 0.24)}`,
          boxShadow: (theme) => `0 0 20px ${alpha(theme.palette.primary.main, 0.24)}`
        }}
      />

      <Box
        component={m.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 1, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: { xs: 100, md: 120 },
          height: { xs: 100, md: 120 },
          position: 'absolute',
          border: (theme) => `solid 8px ${alpha(theme.palette.primary.main, 0.24)}`,
          boxShadow: (theme) => `0 0 20px ${alpha(theme.palette.primary.main, 0.24)}`
        }}
      />
    </Stack>
  );
}