import { ThemeProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { purpleTheme } from './'

//////////////////////////////////////////////////////
//  Children: componente que se ingresa
//////////////////////////////////////////////////////

export const AppTheme = ({ children }) => {
  return (
    
    //////////////////////////////////////////////////////
    //  Provee el tema de Material dentro del proyecto 
    //  Theme: tema base
    //////////////////////////////////////////////////////

    <ThemeProvider theme = {purpleTheme}>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
