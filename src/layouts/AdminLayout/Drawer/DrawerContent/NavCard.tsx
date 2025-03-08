import { useState } from 'react';

// @mui
import { useTheme, CSSObject, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { DRAWER_WIDTH, ThemeDirection } from 'src/config';
import MainCard from 'src/components/MainCard';
import SimpleBar from 'src/components/third-party/SimpleBar';
import { AvatarSize } from 'src/enum';

// @assets
import { IconBolt } from '@tabler/icons-react';

interface NavCardProps {
  isMiniDrawer: boolean;
}

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

/***************************  NAVIGATION CARD - DATA  ***************************/

const data = {
  title: 'Upgrade your plan',
  description: 'Unlock premium features and enhance your experience. Choose a plan that fits your needs.',
  icon: <IconBolt size={16} />
};

/***************************  POPPER - ARROW  ***************************/

const popperArrowStyles = (theme: Theme) =>
  ({
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 20,
    left: -6,
    width: 10,
    height: 10,
    bgcolor: 'grey.50',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 120,
    ...(theme.direction !== ThemeDirection.RTL && {
      borderLeft: '1px solid',
      borderLeftColor: 'divider',
      borderBottom: '1px solid',
      borderBottomColor: 'divider'
    }),
    ...(theme.direction === ThemeDirection.RTL && {
      borderRight: '1px solid',
      borderRightColor: 'divider',
      transform: 'translateY(-50%) rotate(45deg) scaleX(-1)',
      borderTop: '1px solid',
      borderTopColor: 'divider'
    }),
    boxShadow: theme.customShadows?.tooltip
  }) as CSSObject;

/***************************  NAVIGATION CARD - CONTENT  ***************************/

function CardContent({ title, description, icon }: CardProps) {
  const theme = useTheme();

  return (
    <Stack sx={{ gap: 3 }}>
      <Avatar variant="rounded" size={AvatarSize.XS} sx={{ bgcolor: 'grey.300' }}>
        <IconBolt color={theme.palette.text.primary} />
      </Avatar>
      <Stack sx={{ gap: 1, alignItems: 'flex-start', textWrap: 'wrap' }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
        <Button startIcon={icon} variant="contained" sx={{ mt: 0.5 }}>
          Upgrade Now
        </Button>
      </Stack>
    </Stack>
  );
}

/***************************  DRAWER CONTENT - NAVIGATION CARD  ***************************/

export default function NavCard({ isMiniDrawer }: NavCardProps) {
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up('md'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [miniMenuOpened, setMiniMenuOpened] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMiniMenuOpened((prev) => !prev);
  };

  const handleClose = () => {
    setMiniMenuOpened(false);
  };

  return (
    <>
      {!isMiniDrawer ? (
        <MainCard sx={{ p: 1.5, bgcolor: 'grey.50', boxShadow: 'none', mb: 3 }}>
          <CardContent title={data.title} description={data.description} icon={data.icon} />
        </MainCard>
      ) : (
        <IconButton sx={{ marginX: 'auto', mb: 3 }} onMouseEnter={handleClick} onMouseLeave={handleClose} aria-label="upgrade plan">
          <ListItemAvatar
            sx={{
              minWidth: 32,
              width: 42,
              height: 42,
              borderRadius: 2,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              <IconBolt size={20} color="background" />
            </ListItemIcon>
          </ListItemAvatar>
          {upMD && (
            <Popper
              open={miniMenuOpened}
              anchorEl={anchorEl}
              placement="right-end"
              sx={{
                zIndex: 1202,
                minWidth: 220,
                maxWidth: `${DRAWER_WIDTH - 24}px`,
                '& > .MuiPaper-root': { position: 'relative', mb: -0.75, '&:before': { ...popperArrowStyles(theme) } }
              }}
            >
              {({ TransitionProps }) => (
                <Grow in={miniMenuOpened} {...TransitionProps} timeout={{ appear: 0, enter: 150, exit: 150 }}>
                  <MainCard
                    sx={{
                      p: 1.5,
                      bgcolor: 'grey.50',
                      boxShadow: theme.customShadows?.tooltip,
                      backgroundImage: 'none',
                      transformOrigin: '0 0 0',
                      left: 16,
                      overflow: 'visible'
                    }}
                  >
                    <ClickAwayListener onClickAway={handleClose} onMouseEnter={handleClick} onMouseLeave={handleClose}>
                      <Box>
                        <SimpleBar style={{ maxHeight: '50vh', overflowX: 'hidden', overflowY: 'auto' }}>
                          <CardContent title={data.title} description={data.description} icon={data.icon} />
                        </SimpleBar>
                      </Box>
                    </ClickAwayListener>
                  </MainCard>
                </Grow>
              )}
            </Popper>
          )}
        </IconButton>
      )}
    </>
  );
} 