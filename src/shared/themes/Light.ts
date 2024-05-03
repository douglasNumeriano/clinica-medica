import {createTheme} from '@mui/material';
import { cyan } from '@mui/material/colors';


export const LightTheme = createTheme({
    palette: {
        primary:{
            main: '#20bbcf',
            dark: '#1eabbc',
            light: '#53cfdd',
            contrastText: '#ffffff',
         },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
       },
       background:{
        default: '#C8C8C8',
        paper: '#dbdbdb',
       }
    }
});