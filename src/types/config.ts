// @project
import { ThemeDirection, ThemeMode, Themes, ThemeI18n } from 'src/config';

// ==============================|| TYPES - CONFIG ||============================== //

export interface CustomizationProps {
  mode: ThemeMode;
  themeDirection: ThemeDirection;
  currentTheme: Themes;
  i18n: ThemeI18n;
  onChangeCurrentTheme: (theme: Themes) => void;
  onChangeThemeDirection: (direction: ThemeDirection) => void;
  onChangeThemeMode: (mode: ThemeMode) => void;
}
