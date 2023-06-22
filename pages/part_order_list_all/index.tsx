import * as React from 'react';
import ListAll from '../../components/part_order_list/ListAll';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Parts() {

  // Mobile
  const [width, setWidth] = React.useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;
  // End Mobile
  return (
  <div>
    <Box sx={{
          width: '100%',}}>
      <Grid container spacing={0} sx={{ p: 4,  }}>
        <Grid item xs={12} sx={{ mb:2 }}>
          <Typography color="#325381" >
            <strong>Part Order List (All)</strong>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ width: '100%', height: 700,overflow: 'auto'}} backgroundColor="#F5F5F5">
            <ListAll />
          </Box>
        </Grid>

        <Grid container spacing={2} sx={{ display: 'flex', alignItems:'right', justifyContent:'right', mt:1 }}>
          <Grid item xs={12} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Button variant="contained" sx={{ width:150, fontSize:11,backgroundColor: '#325381' }}>
                    <Typography sx={{ color:'#FFFFFF', fontSize:12}}>検索モード</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Button variant="contained" sx={{ width:150, fontSize:11,backgroundColor: '#325381' }}>
                    <Typography sx={{ color:'#FFFFFF', fontSize:12}}>検索実行</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Button variant="contained" sx={{ width:150, fontSize:11,backgroundColor: '#325381' }}>
                    <Typography sx={{ color:'#FFFFFF', fontSize:12}}>検索削除</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Button variant="contained" sx={{ width:150, fontSize:11,backgroundColor: '#325381' }}>
                    <Typography sx={{ color:'#FFFFFF', fontSize:12}}>エクスポート</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </div>
  );
}
