import { useMemo } from 'react';

// @mui
import { createTheme, PaletteOptions, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// eslint-disable-next-line
import { TypographyOptions } from '@mui/material/styles/createTypography';

// @project
import palette from './palette';
import componentsOverride from './overrides';
import Shadows from './shadow';
import typography from './typography';

import useConfig from 'src/hooks/useConfig';

// @types
import { ChildrenProps } from '../types/root';

/*************************** DEFAULT THEME - MAIN ***************************/

export default function ThemeCustomization({ children }: ChildrenProps) {
  const { mode, themeDirection } = useConfig();

  const themePalette = useMemo<PaletteOptions>(() => palette(mode), [mode]);

  let themeDefault = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1440
      }
    },
    direction: themeDirection,
    palette: themePalette,
    customShadows: {}
  });

  // create duplicate theme due to responsive typography and fontFamily
  let theme = createTheme({
    ...themeDefault,
    typography: typography(themeDefault) as TypographyOptions,
    customShadows: Shadows(themeDefault)
  });

  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
