import { InsuranceLayout } from "../layout/InsuranceLayout"
import { Grid, Typography } from "@mui/material"
import { People } from "@mui/icons-material"

export const UsersPage = () => {
  return (
    <InsuranceLayout>
      <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.sec', borderRadius: 3 }}
    >
      <Grid item xs={ 12 }>
        <People sx={{fontSize:80, color:'black'}}/>          
      </Grid>
      <Grid item xs={ 12 }>
        <Typography color='black' variant="h5">Vista de usuarios no encontrada</Typography>          
      </Grid>

    </Grid>
    </InsuranceLayout>
  )
}
