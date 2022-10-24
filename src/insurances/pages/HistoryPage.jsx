import { InsuranceLayout } from "../Layout/InsuranceLayout"
import { Grid, Typography } from "@mui/material"
import { FormatListBulleted } from "@mui/icons-material"

export const HistoryPage = () => {
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
        <FormatListBulleted sx={{fontSize:80, color:'black'}}/>          
      </Grid>
      <Grid item xs={ 12 }>
        <Typography color='black' variant="h5">Vista del historial no encontrada</Typography>          
      </Grid>

    </Grid>
    </InsuranceLayout>
  )
}
