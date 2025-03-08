'use client';

import { forwardRef } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme, SxProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// @project
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';
import { APP_DEFAULT_PATH } from 'src/config';
import { generateFocusStyle } from 'src/utils/generateFocusStyle';

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: string;
}

// @types
interface LogoProps {
  isIcon?: boolean;
  sx?: Record<string, unknown>;
  [key: string]: any;
}

/**
 * Logo Component
 * Displays either the full logo or just the icon based on the isIcon prop
 */
const Logo = forwardRef<HTMLDivElement, LogoProps>(({ isIcon = false, sx, ...others }, ref) => {
  const theme = useTheme();

  return (
    <Box ref={ref} sx={{ display: 'flex', alignItems: 'center', ...sx }} {...others}>
      {isIcon ? (
        <LogoIcon />
      ) : (
        <LogoMain />
      )}
    </Box>
  );
});

Logo.displayName = 'Logo';

/***************************  MAIN - LOGO  ***************************/

export default Logo;
