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
import TextField from '@mui/material/TextField';

import ListPart from '../../components/request_for_part_and_material/ListPart';

const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { width: '100%', color: '#325381', textAlign: 'right', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssBox = { background : '#F5F5F5', px: 1, py: 1, borderRadius: '5px'};
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};
const font12Center = { fontSize: '12px', textAlign: 'center' };
const font12 = { fontSize: '12px'};
const cssOder = { width: '100%', textAlign: 'right', fontSize: '12px', fontWeight: 700, mb: '5px' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };

export default function RequestPartMaterials() {
  
  return (
  <div>
    <Box sx={{ color: '#325381', mx: { xs: 2, md: 4 }, my: { xs: 3, md: 4 } }}>
      <Grid container spacing={2}>
        <Grid item xs={7} md={9}>
          <CardMedia
            sx={{ width: { xs: 150, md: 222} , height: { xs: 40, md: 58}}}
            image="../part-order/anal_1.png"
            title="ANA"
          />
        </Grid>
        <Grid item xs={5} md={3} sx={{ position: 'relative' }}>  
          <Link href="https://www.mrojpn.co.jp" underline="none" target="_blank">
            <Typography sx={cssMro}>
            https://www.mrojpn.co.jp
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1}} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={cssOder}>21 - 15292</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
            <Typography sx={{ fontSize: '16px' }}>Request For Part And Materials</Typography>
            <Typography sx={{ fontSize: '14px', mt: 1, mb: 1 }}>資村出庫要求伝票</Typography>
            <Box sx={cssBox}>
              <Grid container sx={{ height: '58px' }}>
                <Grid item xs>
                  <Typography sx={{ fontSize: '12px', ml: 1, mt: '10px' }}>Issued Parts</Typography>
                  <Typography sx={{ fontSize: '12px', ml: 1 }}>出庫資村</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs>
                  <Grid container spacing={0} sx={{ mt: '10px' }}>
                    <Grid item xs={4}>
                      <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ p:0 }} />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={font12}>MJP</Typography>
                      <Typography sx={font12}>自社資村</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs>
                  <Grid container spacing={0} sx={{ mt: '10px' }}>
                    <Grid item xs={4}>
                      <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ p:0 }}/>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography sx={font12}>Customer</Typography>
                      <Typography sx={font12}>支給資村</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={cssBox}>
            <Typography sx={font12Center}>Requested by / 資村要求者</Typography>
            <Divider sx={{ my: '4px'}} />
            <Grid container>
              <Grid item xs>
                <Typography sx={font12Center}>Zone</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font12Center}>Name</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '4px'}} />
            <Grid container>
              <Grid item xs>
                <Typography sx={font12Center}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '65px' }}></Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={cssBox}>
            <Typography sx={font12Center}>Received By / 資村受領者</Typography>
            <Divider sx={{ my: '4px'}} />
            <Grid container>
              <Grid item xs>
                <Typography sx={font12Center}>Zone</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs>
                <Typography sx={font12Center}>Name</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '4px'}} />
            <Grid container>
              <Grid item xs>
                <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '65px' }}></Typography>
              </Grid>
              <Divider orientation="vertical" flexItem>
              </Divider>
              <Grid item xs>
                <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '65px' }}></Typography>
              </Grid>
            </Grid>
          </Box>          
          
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={cssBox}>
                <Typography sx={font12Center}>Supply Section</Typography>
                <Typography sx={font12Center}>出庫担当者</Typography>
                <Divider sx={{ my: '13px'}} />
                <Grid container>
                  <Grid item xs>
                    <Typography sx={{ fontSize: '12px', textAlign: 'center', height: '56px' }}></Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={cssBox2}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <CardMedia
                      sx={{ width: 97 , height: 97, margin: 'auto' }}
                      image="../qr_code/QR 1.png"
                      title="ANA"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ListPart />

      <Grid container spacing={0} sx={{ mt : 2 }}>
        <Grid item xs={12} md={9}>
         <Typography sx={{ fontSize : '12px' }}>Note : 　① 　A/C-No. = Aircraft Registration No./ 機体登録　No.</Typography>
         <Typography sx={{ fontSize : '12px', ml: '50px' }}>②　RSN. = Reason Code / 部品消費理由コード (TC = MR TASK CARD / EO = EO 作業 / TR = TRP / RC = Discrepancy Repair 不具合修復 / MQ = Maintenance Quality 作業品質関連 / OT = Other その他)</Typography>          
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ fontSize : '12px', textAlign: 'right', mt: 2 }}>MRO Japan Form - SD - 004C</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: 1}} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ display: 'flex', alignItems:'right', justifyContent:'right' }}>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={cssBox2}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <CardMedia
                      sx={{ width: 97 , height: 97, margin: 'auto' }}
                      image="../qr_code/QR 1.png"
                      title="ANA"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={cssBox2}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <CardMedia
                      sx={{ width: 97 , height: 97, margin: 'auto' }}
                      image="../qr_code/QR 4-1.png"
                      title="ANA"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={cssBox2}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <CardMedia
                      sx={{ width: 97 , height: 97, margin: 'auto' }}
                      image="../qr_code/QR 4-2.png"
                      title="ANA"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={cssBox2}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <CardMedia
                      sx={{ width: 97 , height: 97, margin: 'auto' }}
                      image="../qr_code/QR 4-3.png"
                      title="ANA"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ListPart />

      <Grid container spacing={2} sx={{ mt : '5px' }}>
        <Grid item xs={12}>
          <TextField
            label="Memo"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            InputLabelProps={{style: {fontSize: '15px', color: '#325381'}}}
            inputProps={{style: {fontSize: '13px'}}}
          />
        </Grid>
      </Grid>    

    </Box>
  </div>
  );
}