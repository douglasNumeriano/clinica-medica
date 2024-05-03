import {createTheme} from '@mui/material';
import { cyan } from '@mui/material/colors';


export const DarkTheme = createTheme({
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
        default: '#8c8c8c',
        paper: '#afafaf',
       }
    }
});