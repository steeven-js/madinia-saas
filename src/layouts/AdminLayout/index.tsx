import { useEffect } from 'react';

// @mui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import Drawer from './Drawer';
import Header from './Header';
import { handlerDrawerOpen, useGetMenuMaster } from 'src/states/menu';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Loader from 'src/components/Loader';
import useConfig from 'src/hooks/useConfig';

// @types
import { ChildrenProps } from 'src/types/root';
import { DRAWER_WIDTH } from 'src/config';

/***************************  ADMIN LAYOUT  ***************************/

export default function DashboardLayout({ children }: ChildrenProps) {
  const { menuMasterLoading } = useGetMenuMaster();
  const { miniDrawer } = useConfig();

  const downXL = useMediaQuery((theme: Theme) => theme.breakpoints.down('xl'));

  // set drawer media and `miniDrawer` config wise
  useEffect(() => {
    if (!miniDrawer) {
      handlerDrawerOpen(!downXL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Stack direction="row" width={1}>
      <Header />
      <Drawer />
      <Box component="main" sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ minHeight: { xs: 54, sm: 46, md: 76 } }} />
        <Box
          sx={{
            py: 0.4,
            px: 1.5,
            mx: { xs: -2, sm: -3 },
            display: { xs: 'block', md: 'none' },
            borderBottom: 1,
            borderColor: 'divider',
            mb: 2
          }}
        >
          <Breadcrumbs />
        </Box>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          {children}
        </Container>
      </Box>
    </Stack>
  );
}