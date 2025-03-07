import { useEffect } from 'react';

// @mui
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

// @project
import useConfig from 'src/hooks/useConfig';

// @types
import { ChildrenProps } from 'src/types/root';
import { ThemeDirection } from 'src/config';

// ==============================|| RTL LAYOUT ||============================== //

export default function RTLLayout({ children }: ChildrenProps) {
  const { themeDirection } = useConfig();

  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  const cacheRtl = createCache({
    key: themeDirection === ThemeDirection.RTL ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: themeDirection === ThemeDirection.RTL ? [rtlPlugin] : []
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
} 