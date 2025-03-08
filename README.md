# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

node scripts/create-users-with-roles.js

node scripts/check-users-roles.js
```
madinia-saas
├─ .eslintrc.cjs
├─ .eslintrc.js
├─ README.md
├─ a.md
├─ eslint.config.js
├─ format-imports.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  │  └─ images
│  │     ├─ cards
│  │     ├─ graphics
│  │     │  └─ hosting
│  │     ├─ social
│  │     └─ users
│  └─ vite.svg
├─ scripts
│  ├─ check-users-roles.js
│  ├─ create-users-with-roles.js
│  ├─ update-admin-role.js
│  ├─ update-specific-user.js
│  └─ update-users-roles.js
├─ sort-imports-by-length.js
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ branding.json
│  ├─ components
│  │  ├─ Breadcrumbs.tsx
│  │  ├─ DynamicIcon.tsx
│  │  ├─ Loader.tsx
│  │  ├─ LoadingSpinner.tsx
│  │  ├─ Locales.tsx
│  │  ├─ MainCard.tsx
│  │  ├─ NotificationItem.tsx
│  │  ├─ PageLoader.tsx
│  │  ├─ Profile.tsx
│  │  ├─ ProviderWrapper.tsx
│  │  ├─ RTLLayout.tsx
│  │  ├─ SimpleBar.tsx
│  │  ├─ header
│  │  │  └─ empty-state
│  │  │     ├─ EmptyNotification.tsx
│  │  │     └─ EmptySearch.tsx
│  │  ├─ iconify
│  │  ├─ logo
│  │  │  ├─ LogoIcon.tsx
│  │  │  ├─ LogoMain.tsx
│  │  │  └─ index.tsx
│  │  ├─ mui
│  │  └─ third-party
│  │     └─ SimpleBar.tsx
│  ├─ config
│  ├─ config.ts
│  ├─ contexts
│  │  ├─ AuthContext.tsx
│  │  └─ ConfigContext.tsx
│  ├─ enum
│  ├─ enum.ts
│  ├─ firebase
│  │  └─ config.ts
│  ├─ hooks
│  │  ├─ useConfig.ts
│  │  ├─ useCurrentUser.ts
│  │  └─ useLocalStorage.ts
│  ├─ images
│  │  ├─ illustration
│  │  │  ├─ BalletDoodle.tsx
│  │  │  ├─ CoffeeDoddle.tsx
│  │  │  ├─ DancingDoodle.tsx
│  │  │  ├─ DogJumpDoodle.tsx
│  │  │  ├─ DoogieDoodle.tsx
│  │  │  ├─ DumpingDoodle.tsx
│  │  │  ├─ FloatDoodle.tsx
│  │  │  ├─ GroovyDoodle.tsx
│  │  │  ├─ GroovySittingDoodle.tsx
│  │  │  ├─ IceCreamDoodle.tsx
│  │  │  ├─ LayingDoodle.tsx
│  │  │  ├─ LovingDoodle.tsx
│  │  │  ├─ MeditatingDoodle.tsx
│  │  │  ├─ MessyDoodle.tsx
│  │  │  ├─ MoshingDoodle.tsx
│  │  │  ├─ PettingDoodle.tsx
│  │  │  ├─ PlantDoodle.tsx
│  │  │  ├─ ReadingDoodle.tsx
│  │  │  ├─ ReadingSideDoodle.tsx
│  │  │  ├─ RollerSkatingDoodle.tsx
│  │  │  ├─ RollingDoodle.tsx
│  │  │  ├─ RunningDoodle.tsx
│  │  │  ├─ SelfieDoodle.tsx
│  │  │  ├─ SitReadingDoodle.tsx
│  │  │  ├─ SittingDoodle.tsx
│  │  │  ├─ SleekDoodle.tsx
│  │  │  ├─ SprintingDoodle.tsx
│  │  │  ├─ StrollingDoodle.tsx
│  │  │  ├─ SwingingDoodle.tsx
│  │  │  ├─ UnboxingDoodle.tsx
│  │  │  ├─ ZombieingDoodle.tsx
│  │  │  └─ index.ts
│  │  └─ maintenance
│  │     ├─ Error404.tsx
│  │     ├─ Error500.tsx
│  │     └─ Error500Server.tsx
│  ├─ index.css
│  ├─ layouts
│  │  ├─ AdminLayout
│  │  │  ├─ Drawer
│  │  │  │  ├─ DrawerContent
│  │  │  │  │  ├─ MiniDrawer
│  │  │  │  │  │  ├─ NavCollapse.tsx
│  │  │  │  │  │  ├─ NavGroup.tsx
│  │  │  │  │  │  ├─ NavItem.tsx
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ NavCard.tsx
│  │  │  │  │  ├─ ResponsiveDrawer
│  │  │  │  │  │  ├─ NavCollapse.tsx
│  │  │  │  │  │  ├─ NavGroup.tsx
│  │  │  │  │  │  ├─ NavItem.tsx
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ DrawerHeader
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ MiniDrawerStyled.ts
│  │  │  │  └─ index.tsx
│  │  │  ├─ Header
│  │  │  │  ├─ AppBarStyled.tsx
│  │  │  │  ├─ HeaderContent
│  │  │  │  │  ├─ Notification.tsx
│  │  │  │  │  ├─ Profile.tsx
│  │  │  │  │  ├─ SearchBar.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ index.tsx
│  │  │  └─ index.tsx
│  │  ├─ AuthLayout.tsx
│  │  ├─ GuestLayout.tsx
│  │  └─ Layout.tsx
│  ├─ main.tsx
│  ├─ menu
│  │  ├─ index.tsx
│  │  ├─ manage.tsx
│  │  └─ other.tsx
│  ├─ pages
│  │  ├─ Dashboard.tsx
│  │  ├─ ForgotPassword.tsx
│  │  ├─ Login.tsx
│  │  ├─ Register.tsx
│  │  └─ auth
│  ├─ routes
│  │  ├─ AuthRedirect.tsx
│  │  ├─ hooks.ts
│  │  ├─ index.tsx
│  │  ├─ path.ts
│  │  ├─ privateRoutes.tsx
│  │  ├─ publicRoutes.tsx
│  │  └─ utils.ts
│  ├─ sections
│  │  └─ auth
│  │     ├─ AuthLogin.tsx
│  │     └─ AuthRegister.tsx
│  ├─ states
│  │  └─ menu.ts
│  ├─ themes
│  │  ├─ index.tsx
│  │  ├─ overrides
│  │  │  ├─ Autocomplete.tsx
│  │  │  ├─ Avatar.tsx
│  │  │  ├─ AvatarGroup.ts
│  │  │  ├─ Backdrop.ts
│  │  │  ├─ BarLabel.tsx
│  │  │  ├─ Breadcrumbs.tsx
│  │  │  ├─ Button.ts
│  │  │  ├─ CardActions.tsx
│  │  │  ├─ CardContent.tsx
│  │  │  ├─ CardHeader.tsx
│  │  │  ├─ ChartsAxis.ts
│  │  │  ├─ ChartsAxisHighlight.ts
│  │  │  ├─ ChartsTooltip.ts
│  │  │  ├─ Checkbox.tsx
│  │  │  ├─ Chip.tsx
│  │  │  ├─ DateCalendar.tsx
│  │  │  ├─ DayCalendar.ts
│  │  │  ├─ Dialog.ts
│  │  │  ├─ DialogActions.ts
│  │  │  ├─ DialogContent.ts
│  │  │  ├─ DialogTitle.ts
│  │  │  ├─ FormControlLabel.ts
│  │  │  ├─ FormHelperText.ts
│  │  │  ├─ IconButton.ts
│  │  │  ├─ InputAdornment.ts
│  │  │  ├─ InputLabel.ts
│  │  │  ├─ LinearProgress.tsx
│  │  │  ├─ ListItemButton.tsx
│  │  │  ├─ ListItemIcon.tsx
│  │  │  ├─ ListItemText.tsx
│  │  │  ├─ Menu.tsx
│  │  │  ├─ MenuItem.tsx
│  │  │  ├─ Modal.tsx
│  │  │  ├─ OutlinedInput.tsx
│  │  │  ├─ Pagination.tsx
│  │  │  ├─ PaginationItem.tsx
│  │  │  ├─ PickersArrowSwitcher.ts
│  │  │  ├─ PickersCalendarHeader.ts
│  │  │  ├─ PickersDay.ts
│  │  │  ├─ PickersPopper.ts
│  │  │  ├─ Popper.ts
│  │  │  ├─ Radio.tsx
│  │  │  ├─ Slider.ts
│  │  │  ├─ Switch.ts
│  │  │  ├─ Tab.ts
│  │  │  ├─ TableCell.ts
│  │  │  ├─ TableHead.ts
│  │  │  ├─ TableRow.ts
│  │  │  ├─ Tabs.ts
│  │  │  ├─ Tooltip.ts
│  │  │  └─ index.ts
│  │  ├─ palette.ts
│  │  ├─ shadow.ts
│  │  ├─ theme
│  │  │  └─ README.md
│  │  └─ typography.ts
│  ├─ types
│  │  ├─ auth.ts
│  │  ├─ chart.ts
│  │  ├─ config.ts
│  │  ├─ contact.ts
│  │  ├─ currency.ts
│  │  ├─ graphics.ts
│  │  ├─ menu.ts
│  │  ├─ modal.ts
│  │  ├─ mui.ts
│  │  ├─ notificationItem.ts
│  │  ├─ overrides
│  │  │  ├─ Avatar.d.ts
│  │  │  ├─ Chip.d.ts
│  │  │  ├─ IconButton.d.ts
│  │  │  ├─ LinearProgress.d.ts
│  │  │  ├─ Radio.d.ts
│  │  │  ├─ Switch.d.ts
│  │  │  ├─ Tabs.d.ts
│  │  │  ├─ Typography.d.ts
│  │  │  ├─ createPalette.d.ts
│  │  │  ├─ createTheme.d.ts
│  │  │  └─ createTypography.d.ts
│  │  ├─ profile.ts
│  │  ├─ progress.ts
│  │  ├─ root.ts
│  │  ├─ tabler.ts
│  │  ├─ targetProgress.ts
│  │  └─ url.ts
│  ├─ utils
│  │  ├─ GetImagePath.tsx
│  │  ├─ api.ts
│  │  ├─ axios.ts
│  │  ├─ generateFocusStyle.ts
│  │  ├─ locales
│  │  │  ├─ en.json
│  │  │  ├─ fr.json
│  │  │  ├─ ro.json
│  │  │  └─ zh.json
│  │  ├─ route-guard
│  │  │  ├─ AuthGuard.tsx
│  │  │  └─ RoleGuard.tsx
│  │  └─ validationSchema.ts
│  ├─ views
│  │  └─ admin
│  │     └─ dashboard
│  │        └─ analytics.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```