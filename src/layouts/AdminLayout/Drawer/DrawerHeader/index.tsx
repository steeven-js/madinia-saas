// @mui
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// @project
import Logo from 'src/components/logo';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from 'src/config';

interface Props {
  open: boolean;
}

// drawer header styled component
const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<Props>(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 3 : 0),
  ...(open && {
    minWidth: DRAWER_WIDTH
  }),
  ...(!open && {
    width: MINI_DRAWER_WIDTH,
    borderRight: `1px solid ${theme.palette.divider}`
  })
}));

/***************************  DRAWER - HEADER  ***************************/

export default function DrawerHeader({ open }: Props) {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <DrawerHeaderStyled open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo isIcon={!open} sx={{ width: open ? 'auto' : 36, height: 36 }} />
      </Stack>
    </DrawerHeaderStyled>
  );
} 