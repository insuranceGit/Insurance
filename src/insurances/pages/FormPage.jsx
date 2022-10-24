import { InsuranceLayout } from "../Layout/InsuranceLayout"
import { Grid, Typography } from "@mui/material"
import { InsertDriveFile } from "@mui/icons-material"

export const FormPage = () => {
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
        <InsertDriveFile sx={{fontSize:80, color:'black'}}/>          
      </Grid>
      <Grid item xs={ 12 }>
        <Typography color='black' variant="h5">Vista de formulario no encontrada</Typography>          
      </Grid>

    </Grid>
    </InsuranceLayout>
  )
}
