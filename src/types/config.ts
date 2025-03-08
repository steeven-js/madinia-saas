// @project
import { ThemeDirection, ThemeI18n, ThemeMode, Themes } from '@/config';

export interface ConfigProps {
  currentTheme: Themes;
  themeDirection: ThemeDirection;
  mode: ThemeMode;
  miniDrawer: boolean;
  i18n: ThemeI18n;
}

export type CustomizationProps = {
  currentTheme: Themes;
  themeDirection: ThemeDirection;
  mode: ThemeMode;
  miniDrawer: boolean;
  i18n: ThemeI18n;
  onChangeCurrentTheme: (direction: Themes) => void;
  onChangeThemeDirection: (direction: ThemeDirection) => void;
  onChangeThemeMode: (mode: ThemeMode) => void;
};
