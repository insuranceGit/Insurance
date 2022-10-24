import { Box, Divider, Drawer, Grid, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from '@mui/icons-material';
import { Link as RouterLink } from "react-router-dom"

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx ={{ width: { sm: drawerWidth }, flexShrink:{ sm:0}}}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
        >

        <Toolbar>
            <Typography variant='h6' noWrap component='div'>
                Nombre proyecto
            </Typography>
           
        </Toolbar>
        <Divider />

        <List>
                {
                    ['Usuarios','Historico','Cargue masivo','Formulario'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

            

        </Drawer>
    </Box>
    
        

  )
}
