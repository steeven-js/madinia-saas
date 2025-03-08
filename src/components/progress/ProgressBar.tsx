import { useEffect, useMemo } from 'react';
import { m, useAnimation } from 'framer-motion';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function ProgressBar() {
  const theme = useTheme();
  const controls = useAnimation();

  const progressColors = useMemo(
    () => ({
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
      success: theme.palette.success.main,
    }),
    [theme.palette]
  );

  const baseColor = progressColors.primary;

  useEffect(() => {
    controls.start({
      x: '100%',
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  return (
    <Box
      component={m.div}
      initial={{ width: '100%', opacity: 0.8 }}
      sx={{
        right: 0,
        bottom: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        width: '100%',
        transformOrigin: '0%',
        bgcolor: alpha(baseColor, 0.48),
      }}
    >
      <Box
        component={m.div}
        animate={controls}
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          bgcolor: baseColor,
        }}
      />
    </Box>
  );
} 