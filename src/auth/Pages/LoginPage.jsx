
import { Grid, Typography, TextField, Button } from "@mui/material"


export const LoginPage = () => {
  return (
    <Grid
      container
      spacing = { 0 }
      //direction = "column"
      alignItems = "center"
      justifyContent= "center"
      sx = {{minHeight:'100vh', padding: 4, backgroundColor: 'primary.main'}}    
    >
      <Grid
        item
        className="box-shadow"
        xs = {12}  
        md={6}
        sx = {{borderRadius: 2, padding: 3, backgroundColor: 'white'}}      
      >
        <Typography variant='h5' sx={{mb:3}}>Login </Typography>

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
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                Registrar
              </Button>
            </Grid>

          </Grid>
        </form>
      </Grid>

    </Grid>
  )
}
