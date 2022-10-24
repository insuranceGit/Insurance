import { Box , Toolbar} from "@mui/material"
import { SideBar, NavBar } from "../Components";
const drawerWidth = 240;

export const InsuranceLayout = ( { children }) => {
  return (
    
    <Box sx={{ display:'flex' }}>

        <NavBar drawerWidth={drawerWidth} />
        <SideBar drawerWidth={drawerWidth} />

        <Box component='main' sx={{flexGrow:1, p:3}}>

            <Toolbar/>

            { children }
        </Box>

    </Box>


  )
}
