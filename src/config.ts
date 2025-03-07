// @project
import { AuthType } from 'src/enum';

/***************************  THEME CONSTANT  ***************************/

export const APP_DEFAULT_PATH = '/dashboard/analytics';
export const APP_SUPPORT_PATH = 'https://phoenixcoded.authordesk.app/';

export const DRAWER_WIDTH = 254;
export const MINI_DRAWER_WIDTH = 76 + 1; // 1px - for right-side border

/***************************  AUTH CONSTANT  ***************************/

export const AUTH_USER_KEY = 'auth-user';
export const AUTH_PROVIDER: AuthType = AuthType.MOCK;

/***************************  THEME ENUMS  ***************************/

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum ThemeDirection {
  LTR = 'ltr',
  RTL = 'rtl'
}

export enum Themes {
  DEFAULT = 'default',
  PURPLE = 'purple',
  BLUE = 'blue',
  GREEN = 'green',
  ORANGE = 'orange',
  RED = 'red'
}

export enum ThemeI18n {
  EN = 'en',
  FR = 'fr',
  RO = 'ro',
  ZH = 'zh'
}

/***************************  CONFIG  ***************************/

const config = {
  mode: ThemeMode.LIGHT,
  themeDirection: ThemeDirection.LTR,
  currentTheme: Themes.DEFAULT,
  i18n: ThemeI18n.EN
};

export default config;

/***************************  THEME - FONT FAMILY  ***************************/

// Remplacer les polices Next.js par des polices standard
export const FONT_ROBOTO: string = '"Roboto", sans-serif';
export const FONT_ARCHIVO: string = '"Archivo", sans-serif';
export const FONT_FIGTREE: string = '"Figtree", sans-serif';
