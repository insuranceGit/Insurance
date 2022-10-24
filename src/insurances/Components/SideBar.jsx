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
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'secondary.main'}
                
            }}
        >

        <Toolbar>
            <Typography variant='h6' noWrap component='div' color='white'>
                AIR Seguros
            </Typography>
           
        </Toolbar>
        <Divider />

        <List>
            <ListItem key={ 'Usuarios' } disablePadding>
                <ListItemButton component={ RouterLink } to='/users'>
                    <ListItemIcon >
                        <TurnedInNot style={{fill: "#79A1F5"}}/>
                    </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={ 'Usuarios' } style={{color: "white"}} />
                    </Grid>
                </ListItemButton>
            </ListItem>

            <ListItem key={ 'Historial' } disablePadding >
                <ListItemButton component={ RouterLink } to='/history'>
                    <ListItemIcon>
                        <TurnedInNot style={{fill: "#79A1F5"}} />
                    </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={ 'Historial' } style={{color: "white"}} />
                    </Grid>
                </ListItemButton>
            </ListItem>

            <ListItem key={ 'Cargue masivo' } disablePadding>
                <ListItemButton component={ RouterLink } to='/load'>
                    <ListItemIcon>
                        <TurnedInNot style={{fill: "#79A1F5"}} />
                    </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={ 'Cargue masivo' } style={{color: "white"}} />
                    </Grid>
                </ListItemButton>
            </ListItem>

            <ListItem key={ 'Formulario' } disablePadding>
                <ListItemButton component={ RouterLink } to='/form'>
                    <ListItemIcon>
                        <TurnedInNot style={{fill: "#79A1F5"}} />
                    </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={ 'Formulario' } style={{color: "white"}} />
                    </Grid>
                </ListItemButton>
            </ListItem>
        </List>

            

        </Drawer>
    </Box>
    
        

  )
}
