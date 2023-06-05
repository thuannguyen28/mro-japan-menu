import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const mainContainer = (
    <Grid container spacing={1}>
      {/* Chart */}
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            height: 240,
          }}
        >
	        <Typography component="h1"
	              variant="h6"
	              color="inherit"
	              noWrap
	              sx={{ flexGrow: 1 }} />
    	    <Typography color="black" sx={{ ml:2}} >
		      <strong>Hello Admind</strong>
		    </Typography>
        </Paper>
      </Grid>

    </Grid>
);