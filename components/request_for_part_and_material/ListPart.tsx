import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

const cssBox = { background : '#F5F5F5', px: 1, py: 1, borderRadius: '5px'};
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};
const font12Center = { fontSize: '12px', textAlign: 'center' };
const font12 = { fontSize: '12px'};
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };

export default function ListPart(props) {
  return (
  	<div>
  	  <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12} md={9}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs>
                <Typography sx={font12Center}>Work Order</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font12Center}>Task Card</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font12Center}>A/C - No</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font12Center}>RSN</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />
            <Grid container>
              <Grid item xs>
                <Typography sx={font13Bold}>10023631</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>N/R - 00144</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>JA608A</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>RC</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={cssBox}>           
            <Grid container>
              <Grid item xs>
                <Typography sx={font12Center}>Date</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font12Center}>Time</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />
            <Grid container>
              <Grid item xs>
                <Typography sx={font13Bold}>2022/02/25</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>14:00</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12} md={12}>
          <Box sx={cssBox}>
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>No.</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={2}>
                <Typography sx={font12Center}>Parts No.</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font12Center}>Nomen</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>UT</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>QTY</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font12Center}>Bin No. or Location</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: '3px'}} />
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font13Bold}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={2}>
                <Typography sx={font13Bold}>115 - 163DB</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font13Bold}>S*EA = KT TPCOAT D-BLU</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}>EA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}>5</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>DA2-4B3</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>-MJP1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>TTL6</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: '0px'}} />
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font13Bold}>2</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={2}>
                <Typography sx={font13Bold}>115 - 163T</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font13Bold}>S*THINNER</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}>EA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}>5</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>DA2-4B2</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>-MJP0</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>TTL9</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: '0px'}} />
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font13Bold}>3</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={2}>
                <Typography sx={font13Bold}>115 - 163AC</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font13Bold}>S*ACTIVATOR</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}>EA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}>5</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>DA2-4B5</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>-MJP1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}>TTL6</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: '0px'}} />
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font13Bold}>4</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: '0px'}} />
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font13Bold}>5</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: '0px'}} />
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font13Bold}>6</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={2}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font13Bold}></Typography>
              </Grid>
            </Grid>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
}