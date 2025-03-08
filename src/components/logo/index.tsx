// @mui
import { useTheme, SxProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';

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
    <Link to={!to ? APP_DEFAULT_PATH : to}>
      <ButtonBase disableRipple sx={{ ...sx, '&:focus-visible': generateFocusStyle(theme.palette.primary.main) }} aria-label="logo">
        {isIcon ? <LogoIcon /> : <LogoMain />}
      </ButtonBase>
    </Link>
  );
}
