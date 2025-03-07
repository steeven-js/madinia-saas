// @project
import Locales from 'src/components/Locales';
import RTLLayout from 'src/components/RTLLayout';
import { ConfigProvider } from 'src/contexts/ConfigContext';
import ThemeCustomization from 'src/themes';

// @types
import { ChildrenProps } from 'src/types/root';

/***************************  LAYOUT - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }: ChildrenProps) {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <RTLLayout>
          <Locales>{children}</Locales>
        </RTLLayout>
      </ThemeCustomization>
    </ConfigProvider>
  );
} 