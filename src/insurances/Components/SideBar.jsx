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
            <RouterLink to='/users' style={{ textDecoration: 'none', color:'white' }}> 
                <ListItem key={ 'Usuarios' } disablePadding>
                    <ListItemButton >
                        <ListItemIcon >
                            <TurnedInNot style={{fill: "#79A1F5"}}/>
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={ 'Usuarios' } />
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </RouterLink>

            <RouterLink to='/history' style={{  textDecoration: 'none', color:'white'  }}> 
                <ListItem key={ 'Historial' } disablePadding >
                    <ListItemButton color="red">
                        <ListItemIcon>
                            <TurnedInNot style={{fill: "#79A1F5"}} />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={ 'Historial' } />
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </RouterLink>

            <RouterLink to='/load' style={{ textDecoration: 'none' , color:'white'  }}> 
                <ListItem key={ 'Cargue masivo' } disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TurnedInNot style={{fill: "#79A1F5"}} />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={ 'Cargue masivo' } />
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </RouterLink>

            <RouterLink to='/form' style={{ textDecoration: 'none' , color:'white'  }}> 
                <ListItem key={ 'Formulario' } disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TurnedInNot style={{fill: "#79A1F5"}} />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={ 'Formulario' } />
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </RouterLink>
        </List>

            

        </Drawer>
    </Box>
    
        

  )
}
