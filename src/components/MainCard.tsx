import { forwardRef, ReactNode } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// @types
interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children: ReactNode;
  contentProps?: Record<string, unknown>;
  darkTitle?: boolean;
  divider?: boolean;
  elevation?: number;
  secondary?: ReactNode;
  shadow?: string;
  sx?: Record<string, unknown>;
  title?: ReactNode;
  headerSx?: Record<string, unknown>;
  contentSx?: Record<string, unknown>;
  withContent?: boolean;
}

// ==============================|| MAIN CARD ||============================== //

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
  (
    {
      border = true,
      boxShadow,
      children,
      contentProps = {},
      darkTitle,
      divider = true,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      headerSx = {},
      contentSx = {},
      withContent = true,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        sx={{
          position: 'relative',
          border: border ? '1px solid' : 'none',
          borderColor: theme.palette.divider,
          borderRadius: 2,
          boxShadow: boxShadow ? shadow || theme.customShadows?.z1 || 'inherit' : 'inherit',
          ':hover': {
            boxShadow: boxShadow ? shadow || theme.customShadows?.z1 || 'inherit' : 'inherit'
          },
          ...sx
        }}
        {...others}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader sx={{ p: 2.5, ...headerSx }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />
        )}
        {darkTitle && title && (
          <CardHeader sx={{ p: 2.5, ...headerSx }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />
        )}

        {/* content & header divider */}
        {title && divider && <Divider />}

        {/* card content */}
        {withContent && (
          <CardContent sx={{ p: 2.5, ...contentSx }} {...contentProps}>
            {children}
          </CardContent>
        )}
        {!withContent && children}
      </Card>
    );
  }
);

MainCard.displayName = 'MainCard';

export default MainCard; 