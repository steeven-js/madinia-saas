// @mui
/* eslint-disable */
import * as Theme from '@mui/material/styles';

// @project
import { CustomShadowProps } from '@types/mui';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    customShadows: CustomShadowProps;
  }

  interface Theme {
    customShadows: CustomShadowProps;
  }
}
