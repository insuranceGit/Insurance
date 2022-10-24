import { Grid, Typography } from "@mui/material"
import { Warning } from "@mui/icons-material"
export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.sec', borderRadius: 3 }}
    >
      <Grid item xs={ 12 }>
        <Warning sx={{fontSize:100, color:'black'}}/>          
      </Grid>
      <Grid item xs={ 12 }>
        <Typography color='black' variant="h5">Vista no encontrada</Typography>          
      </Grid>

    </Grid>
  )
}
