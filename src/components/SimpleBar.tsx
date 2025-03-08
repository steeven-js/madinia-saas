import { ReactNode } from 'react';

// @third-party
import SimpleBarCore from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// @mui
import { styled, SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// ==============================|| SIMPLE BAR - CUSTOM SCROLL BAR ||============================== //

const RootStyle = styled(Box)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});

interface SimpleBarProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
  [key: string]: any;
}

export default function SimpleBar({ children, sx, ...other }: SimpleBarProps) {
  return (
    <RootStyle sx={sx}>
      <SimpleBarCore {...other}>
        {children}
      </SimpleBarCore>
    </RootStyle>
  );
} 