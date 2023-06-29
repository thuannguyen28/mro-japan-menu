import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

//menu
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

//Switch
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

//css
const cssAlignCenter = { display:'flex', justifyContent:'center',textAlign:'center' };
const cssCenter = { display:'flex', justifyContent:'center',alignItems:'center', };
const cssText = { display:'flex', justifyContent:'left',alignItems:'left', };
const cssRight = { display:'flex', justifyContent:'right' ,alignItems:'right' };
const cssRight_ml_mt = { display:'flex', justifyContent:'right' ,alignItems:'right', ml:2, mt:1 };
const pt3pl2 = { pt:3, pl:2 };
const p2 ={ pt:2, pl:2, pb:2 };
const fontSize13 = { ml:1, fontSize:13 };
const Cssbtn = { width:'90%', backgroundColor: '#325381', ml:1, borderRadius:2 };

// Css Switch
const CSSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(33px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function Parts() {
  // Switch
  const [checked, setChecked] = React.useState([]);

  const handleChange = (index) => {

    const newchecked = [...checked];
    newchecked[index] = !newchecked[index];
    setChecked(newchecked);
  };
  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //end menu

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
  return (
  <div>
    <Box sx={{
          width: '100%',}}>
      {/*Card 1*/}
      <Grid container spacing={0} sx={{ p:2, pt:6 }}>
        {/*ANAL*/}
        <Grid item xs={4}>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 469,
                  height: 260,
                },
              }}
            >
            <Paper elevation={3}>
              <Grid container spacing={0}>
                {/*column 1*/}
                <Grid item xs={2} sx={cssCenter}>
                  <img src="../part-order/menu.png" width="36" height="25" />
                </Grid>
                <Grid item xs={8} sx={cssCenter}>
                  <img src="../part-order/anal_department.png" width="169" height="62" />
                </Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item xs={12} sx={cssRight_ml_mt}>
                      <FormGroup>
                        <FormControlLabel
                          control={<CSSSwitch checked={checked[0]} onClick={() => handleChange(0)} sx={{ m: 1 }} />}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={10} sx={cssRight}>
                      <img src="../part-order/info.png" width="22" height="22" />
                    </Grid>
                  </Grid>
                </Grid>
              {/*column 2*/}
                {
                  checked[0] ?
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>ANA部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>ANA部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                }
                
              {/*column 3*/}
                {
                  checked[0] ?
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                }

                <Grid container>
                  <Grid item xs={12} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/download.png" width="22" height="22" />
                      <Typography sx={fontSize13}>ANA部品在庫情報更新</Typography>
                    </Button>
                  </Grid>
                </Grid>

              </Grid>
            </Paper>
          </Box>
        </Grid>

        {/*PEACH*/}
        <Grid item xs={4}>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 469,
                  height: 260,
                },
              }}
            >
            <Paper elevation={3}>
              <Grid container spacing={0}>
                {/*column 1*/}
                <Grid item xs={2} sx={cssCenter}>
                  <img src="../part-order/menu.png" width="36" height="25" />
                </Grid>
                <Grid item xs={8} sx={cssCenter}>
                  <img src="../part-order/peach.png" width="198" height="62" />
                </Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item xs={12} sx={cssRight_ml_mt}>
                      <FormGroup>
                        <FormControlLabel
                          control={<CSSSwitch checked={checked[1]} onClick={() => handleChange(1)} sx={{ m: 1 }} />}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={10} sx={cssRight}>
                      <img src="../part-order/info.png" width="22" height="22" />
                    </Grid>
                  </Grid>
                </Grid>
              {/*column 2*/}
                {
                  checked[1] ?
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>PEACH部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>PEACH部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                }
                
              {/*column 3*/}
                {
                  checked[1] ?
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                }

                <Grid container>
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/download.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データインポート</Typography>
                    </Button>
                  </Grid>
                  {
                  checked[1] ?
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  :
                  <Grid item xs={6} sx={cssCenter}>
                    <Button disabled variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  }
                </Grid>

              </Grid>
            </Paper>
          </Box>
        </Grid>

        {/*Solaseed Air*/}
        <Grid item xs={4}>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 469,
                  height: 260,
                },
              }}
            >
            <Paper elevation={3}>
              <Grid container spacing={0}>
                {/*column 1*/}
                <Grid item xs={2} sx={cssCenter}>
                  <img src="../part-order/menu.png" width="36" height="25" />
                </Grid>
                <Grid item xs={8} sx={cssCenter}>
                  <img src="../part-order/solaseed.png" width="198" height="62" />
                </Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item xs={12} sx={cssRight_ml_mt}>
                      <FormGroup>
                        <FormControlLabel
                          control={<CSSSwitch checked={checked[2]} onClick={() => handleChange(2)} sx={{ m: 1 }} />}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={10} sx={cssRight}>
                      <img src="../part-order/info.png" width="22" height="22" />
                    </Grid>
                  </Grid>
                </Grid>
              {/*column 2*/}
                {
                  checked[2] ?
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>SOLA部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>SOLA部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                }
                
              {/*column 3*/}
                {
                  checked[2] ?
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                }

                <Grid container>
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/download.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データインポート</Typography>
                    </Button>
                  </Grid>
                  {
                  checked[2] ?
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  :
                  <Grid item xs={6} sx={cssCenter}>
                    <Button disabled variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  }
                </Grid>

              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/*Card 2*/}
      <Grid container spacing={0} sx={{ p:2, pt:6 }}>
        {/*STARFLYER*/}
        <Grid item xs={4}>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 469,
                  height: 260,
                },
              }}
            >
            <Paper elevation={3}>
              <Grid container spacing={0}>
                {/*column 1*/}
                <Grid item xs={2} sx={cssCenter}>
                  <img src="../part-order/menu.png" width="36" height="25" />
                </Grid>
                <Grid item xs={8} sx={cssCenter}>
                  <img src="../part-order/starflyer.png" width="169" height="62" />
                </Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item xs={12} sx={cssRight_ml_mt}>
                      <FormGroup>
                        <FormControlLabel
                          control={<CSSSwitch checked={checked[3]} onClick={() => handleChange(3)} sx={{ m: 1 }} />}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={10} sx={cssRight}>
                      <img src="../part-order/info.png" width="22" height="22" />
                    </Grid>
                  </Grid>
                </Grid>
              {/*column 2*/}
                {
                  checked[3] ?
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>STARFLYER部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>STARFLYER部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                }
                
              {/*column 3*/}
                {
                  checked[3] ?
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                }

                <Grid container>
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/download.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データインポート</Typography>
                    </Button>
                  </Grid>
                  {
                  checked[3] ?
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  :
                  <Grid item xs={6} sx={cssCenter}>
                    <Button disabled variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  }
                </Grid>

              </Grid>
            </Paper>
          </Box>
        </Grid>

        {/*VANILLA AIR*/}
        <Grid item xs={4}>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 469,
                  height: 260,
                },
              }}
            >
            <Paper elevation={3}>
              <Grid container spacing={0}>
                {/*column 1*/}
                <Grid item xs={2} sx={cssCenter}>
                  <img src="../part-order/menu.png" width="36" height="25" />
                </Grid>
                <Grid item xs={8} sx={cssCenter}>
                  <img src="../part-order/vanilla.png" width="198" height="62" />
                </Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item xs={12} sx={cssRight_ml_mt}>
                      <FormGroup>
                        <FormControlLabel
                          control={<CSSSwitch checked={checked[4]} onClick={() => handleChange(4)} sx={{ m: 1 }} />}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={10} sx={cssRight}>
                      <img src="../part-order/info.png" width="22" height="22" />
                    </Grid>
                  </Grid>
                </Grid>
              {/*column 2*/}
                {
                  checked[4] ?
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>VANILLA部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={pt3pl2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>VANILLA部品在庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>290656 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:05</Typography>
                      </Grid>
                    </Grid>
                }
                
              {/*column 3*/}
                {
                  checked[4] ?
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#325381"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#325381"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                  :
                    <Grid container sx={p2}>
                      <Grid item xs={5} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>部品MJP倉庫 :</Typography>
                      </Grid>
                      <Grid item xs={3} sx={cssText}>
                        <Typography sx={{ color:"#E3E3E3"}}>32114 件</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography sx={{ color:"#E3E3E3"}}>2022/02/07  07:00</Typography>
                      </Grid>
                    </Grid>
                }

                <Grid container>
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/download.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データインポート</Typography>
                    </Button>
                  </Grid>
                  {
                  checked[4] ?
                  <Grid item xs={6} sx={cssCenter}>
                    <Button variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  :
                  <Grid item xs={6} sx={cssCenter}>
                    <Button disabled variant="contained" sx={Cssbtn}>
                      <img src="../part-order/delete.png" width="22" height="22" />
                      <Typography sx={fontSize13}>XLS データ削除</Typography>
                    </Button>
                  </Grid>
                  }
                </Grid>

              </Grid>
            </Paper>
          </Box>
        </Grid>

      </Grid>

    </Box>
  </div>
  );
}