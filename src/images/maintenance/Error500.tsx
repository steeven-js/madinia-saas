
// @mui
import { useTheme } from '@mui/material/styles';

// @project
import { ThemeMode } from '@/config';

/***************************  IMAGE - ERROR 500  ***************************/

export default function Error500() {
  const theme = useTheme();
  const primaryColor = theme.palette.mode === ThemeMode.DARK ? theme.palette.primary.main : theme.palette.primary.dark;

  return (
    <svg viewBox="0 0 731 319" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <g filter="url(#filter0_d_10084_35483)">
        <mask id="path-1-outside-1_10084_35483" maskUnits="userSpaceOnUse" x="93" y="76" width="544" height="223" fill="black">
          <rect fill={theme.palette.background.default} x="93" y="76" width="544" height="223" />
          <path d="M174.809 298.242C158.245 298.242 143.903 295.313 131.783 289.455C119.865 283.597 110.674 275.315 104.21 264.609C97.746 253.903 94.514 241.48 94.514 227.34V224.31H133.904V227.037C133.904 237.137 137.237 245.823 143.903 253.095C150.771 260.165 160.871 263.7 174.203 263.7C187.535 263.7 197.736 260.165 204.806 253.095C212.078 245.823 215.714 236.43 215.714 224.916V221.886C215.714 210.574 212.078 201.585 204.806 194.919C197.736 188.253 188.848 184.92 178.142 184.92C172.284 184.92 167.436 185.728 163.598 187.344C159.76 188.96 156.629 190.98 154.205 193.404C151.781 195.828 149.761 198.252 148.145 200.676H101.18V81.9H246.014V117.048H139.964V168.861H145.418C147.438 166.235 150.165 163.71 153.599 161.286C157.033 158.862 161.477 156.842 166.931 155.226C172.385 153.61 178.849 152.802 186.323 152.802C198.847 152.802 210.26 155.428 220.562 160.68C230.864 165.932 239.045 173.709 245.105 184.011C251.367 194.111 254.498 206.635 254.498 221.583V225.219C254.498 240.167 251.266 253.095 244.802 264.003C238.54 274.911 229.45 283.395 217.532 289.455C205.614 295.313 191.373 298.242 174.809 298.242ZM359.824 298.242C334.776 298.242 314.677 291.374 299.527 277.638C284.377 263.7 276.802 242.692 276.802 214.614V161.286C276.802 134.016 284.377 113.311 299.527 99.171C314.677 84.829 334.776 77.658 359.824 77.658C385.074 77.658 405.173 84.829 420.121 99.171C435.271 113.311 442.846 134.016 442.846 161.286V214.614C442.846 242.692 435.271 263.7 420.121 277.638C405.173 291.374 385.074 298.242 359.824 298.242ZM359.824 263.7C374.974 263.7 386.084 259.559 393.154 251.277C400.426 242.995 404.062 231.178 404.062 215.826V159.468C404.062 143.914 400.022 132.198 391.942 124.32C384.064 116.24 373.358 112.2 359.824 112.2C345.886 112.2 334.978 116.341 327.1 124.623C319.424 132.905 315.586 144.52 315.586 159.468V215.826C315.586 231.784 319.222 243.803 326.494 251.883C333.968 259.761 345.078 263.7 359.824 263.7ZM553.27 298.242C528.222 298.242 508.123 291.374 492.973 277.638C477.823 263.7 470.248 242.692 470.248 214.614V161.286C470.248 134.016 477.823 113.311 492.973 99.171C508.123 84.829 528.222 77.658 553.27 77.658C578.52 77.658 598.619 84.829 613.567 99.171C628.717 113.311 636.292 134.016 636.292 161.286V214.614C636.292 242.692 628.717 263.7 613.567 277.638C598.619 291.374 578.52 298.242 553.27 298.242ZM553.27 263.7C568.42 263.7 579.53 259.559 586.6 251.277C593.872 242.995 597.508 231.178 597.508 215.826V159.468C597.508 143.914 593.468 132.198 585.388 124.32C577.51 116.24 566.804 112.2 553.27 112.2C539.332 112.2 528.424 116.341 520.546 124.623C512.87 132.905 509.032 144.52 509.032 159.468V215.826C509.032 231.784 512.668 243.803 519.94 251.883C527.414 259.761 538.524 263.7 553.27 263.7Z" />
        </mask>
        <path
          d="M174.809 298.242C158.245 298.242 143.903 295.313 131.783 289.455C119.865 283.597 110.674 275.315 104.21 264.609C97.746 253.903 94.514 241.48 94.514 227.34V224.31H133.904V227.037C133.904 237.137 137.237 245.823 143.903 253.095C150.771 260.165 160.871 263.7 174.203 263.7C187.535 263.7 197.736 260.165 204.806 253.095C212.078 245.823 215.714 236.43 215.714 224.916V221.886C215.714 210.574 212.078 201.585 204.806 194.919C197.736 188.253 188.848 184.92 178.142 184.92C172.284 184.92 167.436 185.728 163.598 187.344C159.76 188.96 156.629 190.98 154.205 193.404C151.781 195.828 149.761 198.252 148.145 200.676H101.18V81.9H246.014V117.048H139.964V168.861H145.418C147.438 166.235 150.165 163.71 153.599 161.286C157.033 158.862 161.477 156.842 166.931 155.226C172.385 153.61 178.849 152.802 186.323 152.802C198.847 152.802 210.26 155.428 220.562 160.68C230.864 165.932 239.045 173.709 245.105 184.011C251.367 194.111 254.498 206.635 254.498 221.583V225.219C254.498 240.167 251.266 253.095 244.802 264.003C238.54 274.911 229.45 283.395 217.532 289.455C205.614 295.313 191.373 298.242 174.809 298.242ZM359.824 298.242C334.776 298.242 314.677 291.374 299.527 277.638C284.377 263.7 276.802 242.692 276.802 214.614V161.286C276.802 134.016 284.377 113.311 299.527 99.171C314.677 84.829 334.776 77.658 359.824 77.658C385.074 77.658 405.173 84.829 420.121 99.171C435.271 113.311 442.846 134.016 442.846 161.286V214.614C442.846 242.692 435.271 263.7 420.121 277.638C405.173 291.374 385.074 298.242 359.824 298.242ZM359.824 263.7C374.974 263.7 386.084 259.559 393.154 251.277C400.426 242.995 404.062 231.178 404.062 215.826V159.468C404.062 143.914 400.022 132.198 391.942 124.32C384.064 116.24 373.358 112.2 359.824 112.2C345.886 112.2 334.978 116.341 327.1 124.623C319.424 132.905 315.586 144.52 315.586 159.468V215.826C315.586 231.784 319.222 243.803 326.494 251.883C333.968 259.761 345.078 263.7 359.824 263.7ZM553.27 298.242C528.222 298.242 508.123 291.374 492.973 277.638C477.823 263.7 470.248 242.692 470.248 214.614V161.286C470.248 134.016 477.823 113.311 492.973 99.171C508.123 84.829 528.222 77.658 553.27 77.658C578.52 77.658 598.619 84.829 613.567 99.171C628.717 113.311 636.292 134.016 636.292 161.286V214.614C636.292 242.692 628.717 263.7 613.567 277.638C598.619 291.374 578.52 298.242 553.27 298.242ZM553.27 263.7C568.42 263.7 579.53 259.559 586.6 251.277C593.872 242.995 597.508 231.178 597.508 215.826V159.468C597.508 143.914 593.468 132.198 585.388 124.32C577.51 116.24 566.804 112.2 553.27 112.2C539.332 112.2 528.424 116.341 520.546 124.623C512.87 132.905 509.032 144.52 509.032 159.468V215.826C509.032 231.784 512.668 243.803 519.94 251.883C527.414 259.761 538.524 263.7 553.27 263.7Z"
          fill={primaryColor}
        />
        <path
          d="M131.783 289.455L131.492 290.046L131.496 290.048L131.783 289.455ZM104.21 264.609L103.646 264.95L104.21 264.609ZM94.514 224.31V223.651H93.8551V224.31H94.514ZM133.904 224.31H134.563V223.651H133.904V224.31ZM143.903 253.095L143.417 253.54L143.424 253.547L143.43 253.554L143.903 253.095ZM204.806 253.095L204.34 252.629L204.806 253.095ZM204.806 194.919L204.354 195.398L204.361 195.405L204.806 194.919ZM163.598 187.344L163.342 186.737L163.598 187.344ZM154.205 193.404L154.671 193.87L154.205 193.404ZM148.145 200.676V201.335H148.498L148.693 201.042L148.145 200.676ZM101.18 200.676H100.521V201.335H101.18V200.676ZM101.18 81.9V81.241H100.521V81.9H101.18ZM246.014 81.9H246.673V81.241H246.014V81.9ZM246.014 117.048V117.707H246.673V117.048H246.014ZM139.964 117.048V116.389H139.305V117.048H139.964ZM139.964 168.861H139.305V169.52H139.964V168.861ZM145.418 168.861V169.52H145.742L145.94 169.263L145.418 168.861ZM153.599 161.286L153.979 161.824L153.599 161.286ZM166.931 155.226L166.744 154.594L166.931 155.226ZM220.562 160.68L220.861 160.093L220.562 160.68ZM245.105 184.011L244.537 184.345L244.541 184.352L244.545 184.358L245.105 184.011ZM244.802 264.003L244.235 263.667L244.231 263.675L244.802 264.003ZM217.532 289.455L217.823 290.046L217.831 290.042L217.532 289.455ZM174.809 297.583C158.322 297.583 144.082 294.668 132.07 288.862L131.496 290.048C143.724 295.958 158.168 298.901 174.809 298.901V297.583ZM132.074 288.864C120.262 283.058 111.169 274.86 104.774 264.268L103.646 264.95C110.179 275.77 119.468 284.136 131.492 290.046L132.074 288.864ZM104.774 264.268C98.3799 253.678 95.1729 241.376 95.1729 227.34H93.8551C93.8551 241.584 97.1121 254.128 103.646 264.95L104.774 264.268ZM95.1729 227.34V224.31H93.8551V227.34H95.1729ZM94.514 224.969H133.904V223.651H94.514V224.969ZM133.245 224.31V227.037H134.563V224.31H133.245ZM133.245 227.037C133.245 237.298 136.637 246.144 143.417 253.54L144.389 252.65C137.837 245.502 134.563 236.976 134.563 227.037H133.245ZM143.43 253.554C150.461 260.792 160.758 264.359 174.203 264.359V263.041C160.984 263.041 151.081 259.538 144.376 252.636L143.43 253.554ZM174.203 264.359C187.65 264.359 198.041 260.791 205.272 253.561L204.34 252.629C197.431 259.539 187.42 263.041 174.203 263.041V264.359ZM205.272 253.561C212.683 246.15 216.373 236.582 216.373 224.916H215.055C215.055 236.278 211.473 245.496 204.34 252.629L205.272 253.561ZM216.373 224.916V221.886H215.055V224.916H216.373ZM216.373 221.886C216.373 210.419 212.68 201.243 205.251 194.433L204.361 195.405C211.476 201.927 215.055 210.729 215.055 221.886H216.373ZM205.258 194.44C198.053 187.646 188.997 184.261 178.142 184.261V185.579C188.699 185.579 197.419 188.86 204.354 195.398L205.258 194.44ZM178.142 184.261C172.229 184.261 167.287 185.076 163.342 186.737L163.854 187.951C167.585 186.38 172.339 185.579 178.142 185.579V184.261ZM163.342 186.737C159.442 188.379 156.235 190.442 153.739 192.938L154.671 193.87C157.023 191.518 160.078 189.541 163.854 187.951L163.342 186.737ZM153.739 192.938C151.29 195.388 149.241 197.845 147.597 200.31L148.693 201.042C150.281 198.659 152.272 196.268 154.671 193.87L153.739 192.938ZM148.145 200.017H101.18V201.335H148.145V200.017ZM101.839 200.676V81.9H100.521V200.676H101.839ZM101.18 82.5589H246.014V81.241H101.18V82.5589ZM245.355 81.9V117.048H246.673V81.9H245.355ZM246.014 116.389H139.964V117.707H246.014V116.389ZM139.305 117.048V168.861H140.623V117.048H139.305ZM139.964 169.52H145.418V168.202H139.964V169.52ZM145.94 169.263C147.911 166.701 150.585 164.22 153.979 161.824L153.219 160.748C149.745 163.2 146.965 165.769 144.896 168.459L145.94 169.263ZM153.979 161.824C157.338 159.454 161.71 157.46 167.118 155.858L166.744 154.594C161.244 156.224 156.728 158.27 153.219 160.748L153.979 161.824ZM167.118 155.858C172.496 154.264 178.894 153.461 186.323 153.461V152.143C178.804 152.143 172.274 152.956 166.744 154.594L167.118 155.858ZM186.323 153.461C198.752 153.461 210.061 156.066 220.263 161.267L220.861 160.093C210.459 154.79 198.942 152.143 186.323 152.143V153.461ZM220.263 161.267C230.449 166.46 238.538 174.147 244.537 184.345L245.673 183.677C239.552 173.271 231.279 165.404 220.861 160.093L220.263 161.267ZM244.545 184.358C250.728 194.33 253.839 206.726 253.839 221.583H255.157C255.157 206.544 252.006 193.892 245.665 183.664L244.545 184.358ZM253.839 221.583V225.219H255.157V221.583H253.839ZM253.839 225.219C253.839 240.07 250.629 252.878 244.235 263.667L245.369 264.339C251.903 253.312 255.157 240.264 255.157 225.219H253.839ZM244.231 263.675C238.036 274.465 229.045 282.862 217.233 288.868L217.831 290.042C229.855 283.928 239.044 275.357 245.373 264.331L244.231 263.675ZM217.241 288.864C205.433 294.668 191.297 297.583 174.809 297.583V298.901C191.449 298.901 205.795 295.958 217.823 290.046L217.241 288.864ZM299.527 277.638L299.08 278.123L299.084 278.126L299.527 277.638ZM299.527 99.171L299.976 99.6527L299.98 99.6495L299.527 99.171ZM420.121 99.171L419.664 99.6465L419.671 99.6527L420.121 99.171ZM420.121 277.638L420.566 278.123L420.567 278.123L420.121 277.638ZM393.154 251.277L392.658 250.842L392.652 250.849L393.154 251.277ZM391.942 124.32L391.47 124.78L391.476 124.786L391.482 124.792L391.942 124.32ZM327.1 124.623L326.622 124.169L326.616 124.175L327.1 124.623ZM326.494 251.883L326.004 252.324L326.01 252.33L326.016 252.337L326.494 251.883ZM359.824 297.583C334.901 297.583 314.972 290.753 299.969 277.15L299.084 278.126C314.381 291.995 334.651 298.901 359.824 298.901V297.583ZM299.973 277.153C285.002 263.38 277.461 242.577 277.461 214.614H276.143C276.143 242.807 283.751 264.02 299.081 278.123L299.973 277.153ZM277.461 214.614V161.286H276.143V214.614H277.461ZM277.461 161.286C277.461 134.138 284.998 113.632 299.976 99.6527L299.077 98.6893C283.755 112.99 276.143 133.894 276.143 161.286H277.461ZM299.98 99.6495C314.983 85.4459 334.908 78.3169 359.824 78.3169V76.999C334.643 76.999 314.37 84.2121 299.074 98.6925L299.98 99.6495ZM359.824 78.3169C384.943 78.3169 404.865 85.4469 419.664 99.6465L420.577 98.6955C405.48 84.2111 385.204 76.999 359.824 76.999V78.3169ZM419.671 99.6527C434.649 113.632 442.187 134.138 442.187 161.286H443.505C443.505 133.894 435.892 112.99 420.57 98.6893L419.671 99.6527ZM442.187 161.286V214.614H443.505V161.286H442.187ZM442.187 214.614C442.187 242.577 434.645 263.38 419.674 277.153L420.567 278.123C435.896 264.02 443.505 242.807 443.505 214.614H442.187ZM419.675 277.153C404.876 290.752 384.951 297.583 359.824 297.583V298.901C385.197 298.901 405.469 291.996 420.566 278.123L419.675 277.153ZM359.824 264.359C375.088 264.359 386.416 260.184 393.655 251.705L392.652 250.849C385.751 258.934 374.86 263.041 359.824 263.041V264.359ZM393.649 251.712C401.061 243.27 404.721 231.275 404.721 215.826H403.403C403.403 231.081 399.79 242.72 392.658 250.842L393.649 251.712ZM404.721 215.826V159.468H403.403V215.826H404.721ZM404.721 159.468C404.721 143.805 400.651 131.891 392.402 123.848L391.482 124.792C399.392 132.505 403.403 144.023 403.403 159.468H404.721ZM392.413 123.86C384.387 115.628 373.497 111.541 359.824 111.541V112.859C373.218 112.859 383.74 116.852 391.47 124.78L392.413 123.86ZM359.824 111.541C345.748 111.541 334.651 115.728 326.622 124.169L327.577 125.077C335.304 116.954 346.024 112.859 359.824 112.859V111.541ZM326.616 124.175C318.795 132.614 314.927 144.409 314.927 159.468H316.245C316.245 144.631 320.052 133.196 327.583 125.071L326.616 124.175ZM314.927 159.468V215.826H316.245V159.468H314.927ZM314.927 215.826C314.927 231.872 318.582 244.077 326.004 252.324L326.983 251.442C319.862 243.529 316.245 231.696 316.245 215.826H314.927ZM326.016 252.337C333.654 260.387 344.964 264.359 359.824 264.359V263.041C345.191 263.041 334.282 259.135 326.972 251.429L326.016 252.337ZM492.973 277.638L492.527 278.123L492.531 278.126L492.973 277.638ZM492.973 99.171L493.423 99.6527L493.426 99.6495L492.973 99.171ZM613.567 99.171L613.111 99.6465L613.118 99.6527L613.567 99.171ZM613.567 277.638L614.013 278.123L614.013 278.123L613.567 277.638ZM586.6 251.277L586.105 250.842L586.099 250.849L586.6 251.277ZM585.388 124.32L584.916 124.78L584.922 124.786L584.928 124.792L585.388 124.32ZM520.546 124.623L520.069 124.169L520.063 124.175L520.546 124.623ZM519.94 251.883L519.45 252.324L519.456 252.33L519.462 252.337L519.94 251.883ZM553.27 297.583C528.347 297.583 508.419 290.753 493.416 277.15L492.531 278.126C507.828 291.995 528.097 298.901 553.27 298.901V297.583ZM493.419 277.153C478.449 263.38 470.907 242.577 470.907 214.614H469.589C469.589 242.807 477.198 264.02 492.527 278.123L493.419 277.153ZM470.907 214.614V161.286H469.589V214.614H470.907ZM470.907 161.286C470.907 134.138 478.445 113.632 493.423 99.6527L492.524 98.6893C477.201 112.99 469.589 133.894 469.589 161.286H470.907ZM493.426 99.6495C508.43 85.4459 528.355 78.3169 553.27 78.3169V76.999C528.09 76.999 507.816 84.2121 492.52 98.6925L493.426 99.6495ZM553.27 78.3169C578.39 78.3169 598.311 85.4469 613.111 99.6465L614.023 98.6955C598.927 84.2111 578.651 76.999 553.27 76.999V78.3169ZM613.118 99.6527C628.095 113.632 635.633 134.138 635.633 161.286H636.951C636.951 133.894 629.339 112.99 614.017 98.6893L613.118 99.6527ZM635.633 161.286V214.614H636.951V161.286H635.633ZM635.633 214.614C635.633 242.577 628.091 263.38 613.121 277.153L614.013 278.123C629.343 264.02 636.951 242.807 636.951 214.614H635.633ZM613.121 277.153C598.323 290.752 578.397 297.583 553.27 297.583V298.901C578.643 298.901 598.916 291.996 614.013 278.123L613.121 277.153ZM553.27 264.359C568.534 264.359 579.863 260.184 587.101 251.705L586.099 250.849C579.198 258.934 568.306 263.041 553.27 263.041V264.359ZM587.095 251.712C594.508 243.27 598.167 231.275 598.167 215.826H596.849C596.849 231.081 593.236 242.72 586.105 250.842L587.095 251.712ZM598.167 215.826V159.468H596.849V215.826H598.167ZM598.167 159.468C598.167 143.805 594.097 131.891 585.848 123.848L584.928 124.792C592.839 132.505 596.849 144.023 596.849 159.468H598.167ZM585.86 123.86C577.834 115.628 566.944 111.541 553.27 111.541V112.859C566.665 112.859 577.187 116.852 584.916 124.78L585.86 123.86ZM553.27 111.541C539.194 111.541 528.098 115.728 520.069 124.169L521.024 125.077C528.751 116.954 539.47 112.859 553.27 112.859V111.541ZM520.063 124.175C512.241 132.614 508.373 144.409 508.373 159.468H509.691C509.691 144.631 513.499 133.196 521.029 125.071L520.063 124.175ZM508.373 159.468V215.826H509.691V159.468H508.373ZM508.373 215.826C508.373 231.872 512.028 244.077 519.45 252.324L520.43 251.442C513.308 243.529 509.691 231.696 509.691 215.826H508.373ZM519.462 252.337C527.1 260.387 538.41 264.359 553.27 264.359V263.041C538.638 263.041 527.728 259.135 520.418 251.429L519.462 252.337Z"
          fill={theme.palette.background.default}
          mask="url(#path-1-outside-1_10084_35483)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M343.5 179C342.948 179 342.5 179.448 342.5 180C342.5 180.552 342.948 181 343.5 181H352.537C352.197 181.54 352 182.178 352 182.863C352 184.796 353.567 186.363 355.5 186.363C357.433 186.363 359 184.796 359 182.863C359 182.178 358.803 181.54 358.463 181H360.5C361.052 181 361.5 180.552 361.5 180C361.5 179.448 361.052 179 360.5 179H343.5Z"
        fill={primaryColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M372.5 179C371.948 179 371.5 179.448 371.5 180C371.5 180.552 371.948 181 372.5 181H381.537C381.197 181.54 381 182.178 381 182.863C381 184.796 382.567 186.363 384.5 186.363C386.433 186.363 388 184.796 388 182.863C388 182.178 387.803 181.54 387.463 181H389.5C390.052 181 390.5 180.552 390.5 180C390.5 179.448 390.052 179 389.5 179H372.5Z"
        fill={primaryColor}
      />
      <path
        d="M349.5 202.637C349.5 202.637 361.565 200.637 372.5 200.637C375.624 200.637 385.5 202.637 385.5 202.637"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="364.5" y1="207.637" x2="370.5" y2="207.637" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
      <g filter="url(#filter1_d_10084_35483)">
        <path
          d="M616.928 21C616.928 38.47 608.528 54.9675 599.5 69.412"
          stroke={primaryColor}
          strokeWidth="16.8316"
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#filter2_d_10084_35483)">
        <path
          d="M638.5 78C643.157 72.3166 648.172 67.7723 653.025 63.0374C662.438 53.8529 671.897 44.8041 681.477 36.5028C692.642 26.8273 704.019 18.5762 715.5 11"
          stroke={primaryColor}
          strokeWidth="16.8316"
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#filter3_d_10084_35483)">
        <path
          d="M646.5 108C659.608 108 672.544 108.631 685.533 110.546C695.418 112.003 705.323 114.646 715.232 115.637"
          stroke={primaryColor}
          strokeWidth="16.8316"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_10084_35483"
          x="94.5137"
          y="77.6582"
          width="548.779"
          height="227.584"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="7" dy="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0.36 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10084_35483" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10084_35483" result="shape" />
        </filter>
        <filter
          id="filter1_d_10084_35483"
          x="591.084"
          y="12.584"
          width="41.2598"
          height="72.2451"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="7" dy="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0.36 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10084_35483" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10084_35483" result="shape" />
        </filter>
        <filter
          id="filter2_d_10084_35483"
          x="630.084"
          y="2.5835"
          width="100.832"
          height="90.8325"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="7" dy="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0.36 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10084_35483" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10084_35483" result="shape" />
        </filter>
        <filter
          id="filter3_d_10084_35483"
          x="638.084"
          y="99.584"
          width="92.5645"
          height="31.4692"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="7" dy="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0.36 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10084_35483" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10084_35483" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
