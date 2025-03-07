// @mui
import { SxProps } from '@mui/material/styles';

//@project
import { AuthRole, SocialTypes } from '@/enum';

export interface AuthSocialProps {
  type?: SocialTypes;
  buttonSx?: SxProps;
}

export type ResendOtpType = 'signup' | 'email_change';

export interface User {
  id: string;
  email: string;
  role: AuthRole;
  contact: string;
  dialcode: string;
  firstname: string;
  lastname: string;
}

export interface CommonAuthComponentProps {
  inputSx?: SxProps;
}

export interface OtpVerificationProps {
  email: string;
  verify: string;
}
