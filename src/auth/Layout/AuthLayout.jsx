import { Grid, Typography, TextField, Button, Link } from "@mui/material"



export const AuthLayout = ({children, title = ''}) => {
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
        <Typography variant='h5' sx={{mb:3}}>{title} </Typography>
        { children }

    </Grid>

    </Grid>

  )
}
