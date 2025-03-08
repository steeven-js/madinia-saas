import { createContext } from 'react';

// @project
import defaultConfig, { ThemeDirection, ThemeMode, Themes } from 'src/config';
import useLocalStorage from 'src/hooks/useLocalStorage';

// @types
import { ChildrenProps } from 'src/types/root';
import { CustomizationProps } from 'src/types/config';

// @initial
const initialState: CustomizationProps = {
  ...defaultConfig,
  onChangeCurrentTheme: () => { },
  onChangeThemeDirection: () => { },
  onChangeThemeMode: () => { },
  miniDrawer: false
};

/***************************  CONFIG - CONTEXT & PROVIDER  ***************************/

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }: ChildrenProps) {
  const [config, setConfig] = useLocalStorage('sass-able-react-mui-admin-next-ts', initialState);

  const onChangeCurrentTheme = (currentTheme: Themes) => {
    setConfig({
      ...config,
      currentTheme
    });
  };

  const onChangeThemeDirection = (direction: ThemeDirection) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeThemeMode = (mode: ThemeMode) => {
    setConfig({
      ...config,
      mode
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeCurrentTheme,
        onChangeThemeDirection,
        onChangeThemeMode
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
