import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppNavigation } from "src/routes/hooks/hooks";
import { CommonAuthComponentProps } from "src/types/auth";
import { z } from "zod";

// Importer signUp depuis action.ts
import { signUp } from "src/auth/context/firebase/action";

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
const nameSchema = z.string().min(2, 'Must be at least 2 characters');

const registerSchema = z.object({
    firstName: nameSchema,
    lastName: nameSchema,
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
    const { navigateToDashboard } = useAppNavigation();
    const [registerError, setRegisterError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            setRegisterError('');
            setIsProcessing(true);
            
            // Utiliser signUp au lieu de signup
            await signUp({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName
            });
            
            navigateToDashboard();
        } catch (err) {
            let errorMessage = 'Registration failed. Please try again.';
            
            // Gestion plus précise des erreurs Firebase
            if (err instanceof Error) {
                if (err.message.includes('email-already-in-use')) {
                    errorMessage = 'This email is already registered.';
                } else if (err.message.includes('weak-password')) {
                    errorMessage = 'Password is too weak.';
                } else if (err.message.includes('invalid-email')) {
                    errorMessage = 'Invalid email format.';
                }
            }
            
            setRegisterError(errorMessage);
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Grid container rowSpacing={2.5} columnSpacing={1.5}>
                <Grid size={6}>
                    <InputLabel>First Name</InputLabel>
                    <OutlinedInput
                        {...register('firstName')}
                        placeholder="John"
                        fullWidth
                        error={Boolean(errors.firstName)}
                        sx={{ ...inputSx }}
                    />
                    {errors.firstName?.message && <FormHelperText error>{errors.firstName?.message}</FormHelperText>}
                </Grid>
                <Grid size={6}>
                    <InputLabel>Last Name</InputLabel>
                    <OutlinedInput
                        {...register('lastName')}
                        placeholder="Doe"
                        fullWidth
                        error={Boolean(errors.lastName)}
                        sx={{ ...inputSx }}
                    />
                    {errors.lastName?.message && <FormHelperText error>{errors.lastName?.message}</FormHelperText>}
                </Grid>
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