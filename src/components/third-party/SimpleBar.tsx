'use client';

import { ReactNode } from 'react';

// @mui
import { alpha, styled, Theme } from '@mui/material/styles';
import { MUIStyledCommonProps } from '@mui/system';
import Box from '@mui/material/Box';

// @third-party
import MainSimpleBar, { Props } from 'simplebar-react';
import { BrowserView, MobileView } from 'react-device-detect';

// @project
import { ThemeMode } from '../../config';

// root style
const RootStyle = styled(BrowserView)({ flexGrow: 1, height: '100%', overflow: 'hidden' });

// scroll bar wrapper
const SimpleBarStyle = styled(MainSimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': { background: alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 200 : 500], 0.48) },
    '&.simplebar-visible:before': { opacity: 1 }
  },
  '& .simplebar-track.simplebar-vertical': { width: 10 },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': { height: 6 },
  '& .simplebar-mask': { zIndex: 'inherit' }
}));

/***************************  SIMPLE SCROLL BAR   ***************************/

export default function SimpleBar({ children, sx, ...other }: MUIStyledCommonProps<Theme> & Props) {
  return (
    <>
      <RootStyle>
        <SimpleBarStyle clickOnTrack={false} sx={sx} {...other}>
          {children as ReactNode}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children as ReactNode}
        </Box>
      </MobileView>
    </>
  );
} 