import { Link } from 'react-router-dom';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

// @project
import AuthLogin from 'src/sections/auth/AuthLogin';

export default function Login() {
  return (
    <Stack sx={{ height: 1, alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
      <Box sx={{ width: 1, maxWidth: 458 }}>
        <Stack sx={{ gap: { xs: 1, sm: 1.5 }, textAlign: 'center', mb: { xs: 3, sm: 8 } }}>
          <Typography variant="h1">Sign In</Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back! Select the method of login.
          </Typography>
        </Stack>

        {/* Social login buttons */}
        {/* <AuthSocial /> */}

        <Divider sx={{ my: { xs: 4, sm: 5 } }}>
          <Typography variant="body2" color="text.secondary">
            or continue with email
          </Typography>
        </Divider>

        {/* Login form */}
        <AuthLogin />

        <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 2, sm: 3 } }}>
          Don't have an account?{' '}
          <MuiLink component={Link} underline="hover" variant="subtitle2" to="/register" sx={{ '&:hover': { color: 'primary.dark' } }}>
            Sign Up
          </MuiLink>
        </Typography>
      </Box>

      {/* Copyright section*/}
      {/* <Copyright /> */}
    </Stack>
  );
}