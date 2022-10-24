import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary:{
            main: '#262254',
            sec:'#79A1F5'
        },
        secondary:{
            main: '#1A0541',
            sec: '#310388'
        },
        error:{
            main: red.A400
        }
    },

    
})