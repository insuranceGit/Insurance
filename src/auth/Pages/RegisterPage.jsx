import { Link as RouterLink } from "react-router-dom"

import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from "../Layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Nombre y apellido"
              type="text"
              //placeholder ="Ingrese correo"
              fullWidth
            ></TextField>              
          </Grid>
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
            <Grid item xs={12} sm={12}>
              <Button variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
            

            <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to='/auth/login'>
                  Login
                </Link>
            </Grid>

          </Grid>
        </form>

    </AuthLayout>
        
      
  )
}
