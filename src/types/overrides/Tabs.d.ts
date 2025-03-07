// eslint-disable-next-line
import * as Tabs from '@mui/material/Tabs';

// @project
import { TabsType } from 'src/enum';

declare module '@mui/material/Tabs' {
  interface TabsOwnProps {
    type?: TabsType.SEGMENTED;
  }
}
