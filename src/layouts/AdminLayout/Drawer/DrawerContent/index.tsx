// @mui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';

// @project
import MiniDrawer from './MiniDrawer';
import NavCard from './NavCard';
import ResponsiveDrawer from './ResponsiveDrawer';
import { MINI_DRAWER_WIDTH } from 'src/config';
import SimpleBar from 'src/components/third-party/SimpleBar';

interface DrawerContentProps {
  open: boolean;
}

/***************************  DRAWER - CONTENT  ***************************/

export default function DrawerContent({ open }: DrawerContentProps) {
  const upMD = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const contentHeight = `calc(100vh - ${MINI_DRAWER_WIDTH}px)`;

  return (
    <SimpleBar sx={{ height: contentHeight }}>
      <Stack sx={{ minHeight: contentHeight, flexDirection: 'column', px: !open && upMD ? 0 : 2, justifyContent: 'space-between' }}>
        {!open && upMD ? <MiniDrawer /> : <ResponsiveDrawer />}
        <NavCard isMiniDrawer={!open && upMD} />
      </Stack>
    </SimpleBar>
  );
} 