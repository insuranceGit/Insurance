import { Link as RouterLink } from "react-router-dom"

import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from "../Layout/AuthLayout"


export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Correo"
              type="email"
              //placeholder ="Ingrese correo"
              fullWidth
            ></TextField>              
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Contraseña"
              type="password"
              //placeholder ="Ingrese contraseña"
              fullWidth
            ></TextField>             
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs={12} sm={6}>
            <Link component={ RouterLink } style={{ textDecoration: 'none' }} to='/'>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Link>
              

            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to='/auth/register'>
                  Crear cuenta
                </Link>
            </Grid>

          </Grid>
        </form>

    </AuthLayout>
        
      
  )
}
