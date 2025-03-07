import '@mui/material/styles';

declare module '@mui/material/styles/createTypography' {
  export type Variant = 'caption1';

  export interface TypographyOptions extends Partial<Record<Variant, TypographyStyleOptions> & FontStyleOptions> {
    caption1?: TypographyStyleOptions;
  }

  export interface Typography extends Record<Variant, TypographyStyle>, FontStyle, TypographyUtils {
    caption1: TypographyStyle;
  }
}
