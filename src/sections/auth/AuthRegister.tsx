import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "src/contexts/AuthContext";
import { useAppNavigation } from "src/routes/hooks";
import { CommonAuthComponentProps } from "src/types/auth";
import { z } from "zod";

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import Grid from '@mui/material/Grid2';

// Validation schemas
const emailSchema = z.string().email('Invalid email');
const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');

const registerSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const commonIconProps = { size: 20, stroke: 1.5 };

export default function AuthRegister({ inputSx }: CommonAuthComponentProps) {
    const { signup } = useAuth();
    const { navigateToDashboard } = useAppNavigation();
    const [registerError, setRegisterError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            setRegisterError('');
            setIsProcessing(true);
            await signup(data.email, data.password);
            navigateToDashboard();
        } catch (err) {
            setRegisterError('Registration failed. Please try again.');
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Grid container rowSpacing={2.5} columnSpacing={1.5}>
                <Grid size={12}>
                    <InputLabel>Email</InputLabel>
                    <OutlinedInput
                        {...register('email')}
                        placeholder="example@email.com"
                        fullWidth
                        error={Boolean(errors.email)}
                        sx={{ ...inputSx }}
                    />
                    {errors.email?.message && <FormHelperText error>{errors.email?.message}</FormHelperText>}
                </Grid>
                <Grid size={12}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        {...register('password')}
                        type={isOpen ? 'text' : 'password'}
                        placeholder="Enter password"
                        fullWidth
                        autoComplete="new-password"
                        error={Boolean(errors.password)}
                        endAdornment={
                            <InputAdornment
                                position="end"
                                sx={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <IconEye {...commonIconProps} /> : <IconEyeOff {...commonIconProps} />}
                            </InputAdornment>
                        }
                        sx={inputSx}
                    />
                    {errors.password?.message && <FormHelperText error>{errors.password?.message}</FormHelperText>}
                </Grid>
                <Grid size={12}>
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                        {...register('confirmPassword')}
                        type={isConfirmOpen ? 'text' : 'password'}
                        placeholder="Enter confirm password"
                        fullWidth
                        error={Boolean(errors.confirmPassword)}
                        endAdornment={
                            <InputAdornment
                                position="end"
                                sx={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                                onClick={() => setIsConfirmOpen(!isConfirmOpen)}
                            >
                                {isConfirmOpen ? <IconEye {...commonIconProps} /> : <IconEyeOff {...commonIconProps} />}
                            </InputAdornment>
                        }
                        sx={inputSx}
                    />
                    {errors.confirmPassword?.message && <FormHelperText error>{errors.confirmPassword?.message}</FormHelperText>}
                </Grid>
            </Grid>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isProcessing}
                endIcon={isProcessing && <CircularProgress color="secondary" size={16} />}
                sx={{ minWidth: 120, mt: { xs: 2, sm: 4 }, '& .MuiButton-endIcon': { ml: 1 } }}
            >
                Sign Up
            </Button>
            {registerError && (
                <Alert sx={{ mt: 2 }} severity="error" variant="filled" icon={false}>
                    {registerError}
                </Alert>
            )}
        </form>
    )
}