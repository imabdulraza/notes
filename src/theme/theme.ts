import { createTheme } from '@mui/material';
import colors from './colors';

export const theme = createTheme({
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                fontFamily: `Verdana, Geneva, Tahoma, sans-serif`,
                fontWeight: 500,
                textTransform: 'capitalize',
                letterSpacing: '0.085em',
                borderRadius: '100px'
            },
          },
        },
      },
    shape: {
        borderRadius: 8
    },
    palette: {
        primary: {
            main: '#333652'
        }
    },
    // palette: {
    //     primary: {
    //         light: '',
    //         main: '',
    //         dark: ''
    //     },
    //     secondary: {
    //         light: '',
    //         main: '',
    //         dark: ''
    //     },
    //     error: {
    //         light: '',
    //         main: '',
    //         dark: ''
    //     },
    //     warning: {
    //         light: '',
    //         main: '',
    //         dark: ''
    //     }, 
    //     info: {
    //         light: '',
    //         main: '',
    //         dark: ''
    //     },
    //     success: {
    //         light: '',
    //         main: '',
    //         dark: ''
    //     }
    // },
    typography: {
        // fontFamily: `DM Sans, sans-serif !important`,
        h1: {
            fontSize: '48px',
            fontWeight: 700
        },
        h2: {
            fontSize: '36px',
            fontWeight: 700
        },
        h3: {
            fontSize: '28px',
            fontWeight: 700
        },
        h4: {
            fontSize: '22px',
            fontWeight: 700
        },
        h5: {
            fontSize: '18px',
            fontWeight: 700
        },
        h6: {
            fontSize: '16px',
            fontWeight: 700
        },
        subtitle1: {

        },
        body1: {
            fontSize: '16px',
            fontWeight: 400
        },
        body2: {
            fontSize: '14px',
            fontWeight: 400
        },
        subtitle2: {

        },
        button: {
            
        },
        caption: {
            fontSize: '12px',
            fontWeight: 400
        },
        overline: {
            fontSize: '14px',
            fontWeight: 400,
            textTransform: 'uppercase',
        },
    }
});