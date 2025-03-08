import { Fragment, MouseEvent, useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';

// @project
import { ThemeDirection } from 'src/config';
import EmptySearch from 'src/components/header/empty-state/EmptySearch';
import MainCard from 'src/components/MainCard';
import NotificationItem from 'src/components/NotificationItem';
import { AvatarSize } from 'src/enum';

// @assets
import { IconCommand, IconSearch } from '@tabler/icons-react';

/***************************  HEADER - SEARCH DATA  ***************************/

const profileData = [
  { alt: 'Aplican Warner', src: '/assets/images/users/avatar-1.png', title: 'Aplican Warner', subTitle: 'Admin' },
  { alt: 'Apliaye Aweoa', src: '/assets/images/users/avatar-2.png', title: 'Apliaye Aweoa', subTitle: 'Admin' }
];

const listCotent = [
  { title: 'Role', items: ['Applican', 'App User'] },
  { title: 'Files', items: ['Applican', 'Applican'] }
];

/***************************  HEADER - SEARCH BAR  ***************************/

export default function SearchBar() {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const buttonStyle = { borderRadius: 2, p: 1 };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isEmptySearch, setIsEmptySearch] = useState(true);
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Function to open the popper
  const openPopper = (event: MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    setAnchorEl(inputRef.current);
    setIsPopperOpen(true);
  };

  const handleActionClick = (event: MouseEvent<HTMLElement>) => {
    if (isPopperOpen) {
      // If popper is open, close it
      setIsPopperOpen(false);
      setAnchorEl(null);
    } else {
      openPopper(event);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isEmpty = event.target.value.trim() === '';
    setIsEmptySearch(isEmpty);

    if (!isPopperOpen && !isEmpty) {
      openPopper(event as unknown as MouseEvent<HTMLElement>);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && !isPopperOpen) {
      openPopper(event);
    } else if (event.key === 'Escape' && isPopperOpen) {
      setIsPopperOpen(false);
      setAnchorEl(null);
    } else if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      if (!isPopperOpen) {
        openPopper(event);
      }
    }
  };

  const renderSubheader = (title: string, withMarginTop = false) => (
    <ListSubheader sx={{ color: 'text.disabled', typography: 'caption', py: 0.5, px: 1, mb: 0.5, ...(withMarginTop && { mt: 1.5 }) }}>
      {title}
    </ListSubheader>
  );

  const renderListItem = (item: string, index: number) => (
    <ListItemButton key={index} sx={buttonStyle} onClick={handleActionClick}>
      <ListItemText primary={item} />
    </ListItemButton>
  );

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        // Check if the search input is not focused before opening the popper
        if (document.activeElement !== inputRef.current) {
          openPopper(event as unknown as MouseEvent<HTMLElement>);
          inputRef.current?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isPopperOpen]);

  return (
    <>
      <OutlinedInput
        inputRef={inputRef}
        placeholder="Search here"
        startAdornment={
          <InputAdornment position="start">
            <IconSearch />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconCommand color={theme.palette.grey[700]} />
          </InputAdornment>
        }
        aria-describedby="Search"
        inputProps={{ 'aria-label': 'search' }}
        onClick={handleActionClick}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        sx={{ minWidth: { xs: 200, sm: 240 } }}
      />
      <Popper
        placement="bottom"
        id={isPopperOpen ? 'search-action-popper' : undefined}
        open={isPopperOpen}
        anchorEl={anchorEl}
        transition
        popperOptions={{
          modifiers: [{ name: 'offset', options: { offset: [downSM ? (theme.direction === ThemeDirection.RTL ? -20 : 20) : 0, 8] } }]
        }}
      >
        {({ TransitionProps }) => (
          <Fade in={isPopperOpen} {...TransitionProps}>
            <MainCard
              sx={{
                borderRadius: 2,
                boxShadow: theme.customShadows.tooltip,
                width: 1,
                minWidth: { xs: 352, sm: 240 },
                maxWidth: { xs: 352, md: 420 },
                p: 0.5
              }}
            >
              <ClickAwayListener
                onClickAway={() => {
                  setIsPopperOpen(false);
                  setAnchorEl(null);
                }}
              >
                {isEmptySearch ? (
                  <EmptySearch />
                ) : (
                  <List disablePadding>
                    {renderSubheader('Users')}
                    {profileData.map((user, index) => (
                      <ListItemButton sx={buttonStyle} key={index} onClick={handleActionClick}>
                        <NotificationItem
                          avatar={{ alt: user.alt, src: user.src, size: AvatarSize.XS }}
                          title={user.title}
                          subTitle={user.subTitle}
                        />
                      </ListItemButton>
                    ))}
                    {listCotent.map((list, item) => (
                      <Fragment key={item}>
                        {renderSubheader(list.title, true)}
                        {list.items.map((item, index) => renderListItem(item, index))}
                      </Fragment>
                    ))}
                  </List>
                )}
              </ClickAwayListener>
            </MainCard>
          </Fade>
        )}
      </Popper>
    </>
  );
}
