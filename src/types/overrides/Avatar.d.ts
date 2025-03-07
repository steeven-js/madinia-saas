// eslint-disable-next-line
import * as Avatar from '@mui/material/Avatar';

// @project
import { AvatarSize } from 'src/enum';

declare module '@mui/material/Avatar' {
  interface AvatarOwnProps {
    size?: AvatarSize;
  }
}
