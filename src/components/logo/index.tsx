// @next
import NextLink from 'next/link';

// @mui
import { useTheme, SxProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

// @project
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';
import { APP_DEFAULT_PATH } from 'src/config';
import { generateFocusStyle } from 'src/utils/generateFocusStyle';

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: string;
}

/***************************  MAIN - LOGO  ***************************/

export default function LogoSection({ isIcon, sx, to }: Props) {
  const theme = useTheme();

  return (
    <NextLink href={!to ? APP_DEFAULT_PATH : to} passHref legacyBehavior>
      <ButtonBase disableRipple sx={{ ...sx, '&:focus-visible': generateFocusStyle(theme.palette.primary.main) }} aria-label="logo">
        {isIcon ? <LogoIcon /> : <LogoMain />}
      </ButtonBase>
    </NextLink>
  );
}
