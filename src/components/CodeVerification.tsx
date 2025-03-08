// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// @third-party
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import OTPInput from 'react-otp-input';

// @project
import { generateFocusStyle } from 'src/utils/generateFocusStyle';
import { otpSchema } from 'src/utils/validationSchema';

interface Props<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
}

/***************************  CODE VERIFICATION  ***************************/

export default function CodeVerification<TFieldValues extends FieldValues>({ control }: Props<TFieldValues>) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        '& input:focus-visible': {
          borderColor: `${theme.palette.primary.main} !important`,
          ...generateFocusStyle(theme.palette.primary.main)
        }
      }}
    >
      <Controller
        control={control}
        name={'otp' as Path<TFieldValues>}
        rules={otpSchema}
        render={({ field: { value, onChange } }) => (
          <OTPInput
            value={value}
            onChange={onChange}
            numInputs={6}
            inputType="tel"
            shouldAutoFocus
            containerStyle={{ gap: 6 }}
            inputStyle={{
              width: '100%',
              height: 48,
              fontSize: 14,
              borderRadius: 8,
              borderWidth: 1,
              borderStyle: 'solid',
              outline: 'none',
              borderColor: theme.palette.divider
            }}
            renderInput={(props) => <input {...props} />}
          />
        )}
      />
    </Box>
  );
}
