import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'src/contexts/AuthContext';
import { useAppNavigation } from 'src/routes/hooks';
import { Link as RouterLink } from 'react-router-dom';
// import { PATHS } from 'src/routes/path';

import { emailSchema, passwordSchema } from 'src/utils/validationSchema';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MuiLink from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { CommonAuthComponentProps } from 'src/types/auth';

interface LoginFormInput {
    email: string;
    password: string;
}

/***************************  AUTH - LOGIN  ***************************/

// Schéma de validation
const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

type LoginFormData = z.infer<typeof loginSchema>;

const commonIconProps = { size: 20, stroke: 1.5 };

export default function AuthLogin({ inputSx }: CommonAuthComponentProps) {
    const { login } = useAuth();
    const { navigateToDashboard } = useAppNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Initialize react-hook-form
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors }
    } = useForm<LoginFormInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: 'super_admin@saasable.io', password: 'Super@123' }
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            setLoginError('');
            setIsProcessing(true);
            await login(data.email, data.password);
            navigateToDashboard();
        } catch (err) {
            setLoginError('Login failed. Please check your credentials.');
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <>
            {/* <Stack direction="row" sx={{ gap: 1, mb: 2 }}>
                {userCredentials.map((credential) => (
                    <Button
                        key={credential.title}
                        variant="outlined"
                        color="secondary"
                        sx={{ flex: 1 }}
                        onClick={() => reset({ email: credential.email, password: credential.password })}
                    >
                        {credential.title}
                    </Button>
                ))}
            </Stack> */}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Stack gap={2}>
                    <Box>
                        <InputLabel>Email</InputLabel>
                        <OutlinedInput
                            {...register('email', emailSchema)}
                            placeholder="example@saasable.io"
                            fullWidth
                            error={Boolean(errors.email)}
                            sx={inputSx}
                        />
                        {errors.email?.message && <FormHelperText error>{errors.email.message}</FormHelperText>}
                    </Box>

                    <Box>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            {...register('password', passwordSchema)}
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Enter your password"
                            fullWidth
                            error={Boolean(errors.password)}
                            endAdornment={
                                <InputAdornment
                                    position="end"
                                    sx={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                >
                                    {isPasswordVisible ? <IconEye {...commonIconProps} /> : <IconEyeOff {...commonIconProps} />}
                                </InputAdornment>
                            }
                            sx={inputSx}
                        />
                        <Stack direction="row" alignItems="center" justifyContent={errors.password ? 'space-between' : 'flex-end'} width={1}>
                            {errors.password?.message && <FormHelperText error>{errors.password.message}</FormHelperText>}
                            <MuiLink
                                component={RouterLink}
                                to="/forgot-password"
                                underline="hover"
                                variant="caption"
                                sx={{ '&:hover': { color: 'primary.dark' }, mt: 0.75 }}
                            >
                                Forgot Password?
                            </MuiLink>
                        </Stack>
                    </Box>
                </Stack>

                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={isProcessing}
                    endIcon={isProcessing && <CircularProgress color="secondary" size={16} />}
                    sx={{ minWidth: 120, mt: { xs: 1, sm: 4 }, '& .MuiButton-endIcon': { ml: 1 } }}
                >
                    Sign In
                </Button>

                {loginError && (
                    <Alert sx={{ mt: 2 }} severity="error" variant="filled" icon={false}>
                        {loginError}
                    </Alert>
                )}
            </form>
        </>
    );
}
