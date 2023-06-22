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
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ListPart from '../../components/request_for_part_and_material/ListPart';


const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});
// CSS
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { backgroundColor: '#325381', color:'#FFFFFF', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssMroTitle = { color: '#325381', fontSize: '16px'};
const cssBox = { py: 1, borderRadius: '5px'};
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};
const cssBox3 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', maxHeight:490};
const cssBox4 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', maxHeight:280};
const font12Center = { fontSize: '12px', display: 'flex', alignItems:'center', justifyContent: 'center', textAlign: 'center', height: '100%' };
const font12Left = { fontSize: '12px', display: 'flex', alignItems:'center', justifyContent: 'left', height: '100%' };
const font12 = { fontSize: '12px'};
const cssOderLeft = { width: '100%', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px'};
const cssOderRight = { width: '100%',cursor: 'pointer', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px', display: 'flex', alignItems:'center', justifyContent: 'flex-end' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };
const font12CenterCursor = { fontSize: '15px', display: 'flex', alignItems:'center', justifyContent: 'center', cursor: 'pointer', height: '100%' };
const cursor = { cursor: 'pointer' };


export default function RequestPartMaterials() {
  
  const [showText, setShowText] = React.useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
  <div>
    <Box sx={{ color: '#325381', mx: { xs: 2, md: 4 }, my: { xs: 3, md: 4 } }}>
      <Grid container spacing={2}>
        <Grid item xs={7} md={9}>
          <Typography sx={cssMroTitle}>
            <strong>Parts Kit</strong>
          </Typography>
        </Grid>
        <Grid item xs={5} md={3} sx={{ position: 'relative' }}>  
          <Link href="/part_kit/part_kit_insert" underline="none" target="_blank">
            <Button variant="contained"sx={cssMro}>
            <img src="../part-kit/Search.png" width="20" height="20"/>
              <Typography sx={{ ml:2 }}>
              新規作成
            </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
      

      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          borderRadius: 2,
          p:2,
          mt: { xs: 4, md: 2 },
        }}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={cssOderLeft}>全て検索</Typography>
        </Grid>
      </Grid>
    {/*Header 1*/}
      <Grid container spacing={2}>
          <Grid item xs={12} md={2} sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '13px', color: '#325381' }}><strong>AC Type</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }}>
                  <Grid item xs>
                    <Autocomplete
                      disablePortal
                      id="filter-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      filterOptions={filterOptions}
                      sx={{ bgcolor:"#F0F0F0" }}
                      renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
                    />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12} md={2} sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '13px', color: '#325381' }}><strong>Zone</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }}>
                  <Grid item xs>
                    <Autocomplete
                      disablePortal
                      id="filter-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      filterOptions={filterOptions}
                      sx={{bgcolor:"#F0F0F0" }}
                      renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
                    />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12} md={2} sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '13px', color: '#325381' }}><strong>ATA</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }}>
                  <Grid item xs>
                    <Autocomplete
                    disablePortal
                    id="filter-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    sx={{ bgcolor:"#F0F0F0" }}
                    renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
                    />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12} md={2} sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '13px', color: '#325381' }}><strong>Customer</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }}>
                  <Grid item xs>
                    <Autocomplete
                    disablePortal
                    id="filter-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    sx={{ bgcolor:"#F0F0F0" }}
                    renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
                    />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12} md={2} sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '13px', color: '#325381' }}><strong>Author</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }}>
                  <Grid item xs>
                    <Autocomplete
                    disablePortal
                    id="filter-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    sx={{ bgcolor:"#F0F0F0" }}
                    renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
                    />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>
          <Grid item xs={12} md={2} sx={{ mt:5 }} justifyContent="flex-end">
              <Button variant="contained" startIcon={<SearchIcon />}>
                検索
              </Button>
              <IconButton sx={{ ml:2 }} aria-label="reset">
                <img src="../part-kit/reset.png" width="30" height="30"/>
              </IconButton>
              
          </Grid>
        </Grid>  
    {/*Header 2*/}
        <Grid container spacing={2}>
          <Grid item xs={12} md={2.5}>
              <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>Task Card</Typography>
              <Box sx={cssBox}>
                <Grid container>
                  <Grid item xs sx={{ height: '30px' }}>
                    <TextField id="filled-basic" size="small" variant="filled"/>
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12} md={2.5}>
              <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>Category</Typography>
              <Box sx={cssBox}>
                <Grid container>
                  <Grid item xs>
                    <TextField id="filled-basic" size="small" variant="filled"/>
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12} md={2.5}>
              <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>AMM</Typography>
              <Box sx={cssBox}>
                <Grid container>
                  <Grid item xs>
                    <TextField id="filled-basic" size="small" variant="filled"/>
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12} md={2.5}>
              <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>Kit 名/作業名</Typography>
              <Box sx={cssBox}>
                <Grid container>
                  <Grid item xs>
                    <TextField id="filled-basic" size="small" variant="filled"/>
                  </Grid>   
                </Grid>
              </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={12} md={12}>
            {showText ?
            <Typography sx={cssOderRight} onClick={handleClick}>
              閉じる
              <ExpandLessIcon sx={{ ml: 1,cursor:'pointer' }} />
            </Typography>
            :
            <Typography sx={cssOderRight} onClick={handleClick}>
              全て検索
              <ExpandMoreIcon sx={{ ml: 1,cursor:'pointer' }} />
            </Typography>
            }
          </Grid>
        </Grid>
      </Paper>

       <Paper
        elevation={0}
        variant="outlined"
        sx={{
          borderRadius: 2,
          p:2,
          mt: { xs: 4, md: 2 },
        }}>
        
      <Grid container spacing={2}>
        <Grid item xs={12} md={7.5}>
        <Typography sx={cssMroTitle}>
            <strong>Parts Kit List : </strong>
        </Typography>
          <Box sx={cssBox3}>
            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}></Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>No.</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>AC</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>Zone</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>ATA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>作業名</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font12Center}>Memo</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={1}>
                <Typography sx={font12Center}></Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12CenterCursor}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737<br/>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE <br/> 夜間定例LINE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>00</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>偶数A整備 1/2</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font12Center}>夜間定例　A整備基本パッケージ</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={1}>
                <Typography sx={font12CenterCursor}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12CenterCursor}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737<br/>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE <br/> 夜間定例LINE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>00</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>偶数A整備 1/2</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font12Center}>夜間定例　A整備基本パッケージ</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={1}>
                <Typography sx={font12CenterCursor}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12CenterCursor}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737<br/>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE <br/> 夜間定例LINE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>00</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>偶数A整備 1/2</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font12Center}>夜間定例　A整備基本パッケージ</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={1}>
                <Typography sx={font12CenterCursor}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12CenterCursor}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737<br/>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE <br/> 夜間定例LINE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>00</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>偶数A整備 1/2</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font12Center}>夜間定例　A整備基本パッケージ</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={1}>
                <Typography sx={font12CenterCursor}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12CenterCursor}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737<br/>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE <br/> 夜間定例LINE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1}>
                <Typography sx={font12Center}>00</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>偶数A整備 1/2</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={4}>
                <Typography sx={font12Center}>夜間定例　A整備基本パッケージ</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={1}>
                <Typography sx={font12CenterCursor}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

          </Box>
        </Grid>
        <Grid item xs={12} md={4.5}>
        <Typography sx={cssMroTitle}>
          <strong>Parts Kit Detail :</strong>
        </Typography>
          <Box sx={cssBox4}>         
            <Grid container>
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>No.</Typography>
              </Grid>
              <Grid item xs={4.5}>
                <Typography sx={font12Left}>Parts Number / Nomen</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font12Center}>Qty</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font12Center}>Note/ Ref</Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Grid item xs={4.5}>
               <Typography sx={font12Left}>KITB3-7IDGFILTER<br/>KITIDG FILTERSERVICE</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font12Center}>4</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font12Center}>IDG FILTER</Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>2</Typography>
              </Grid>
              <Grid item xs={4.5}>
                <Typography sx={font12Left}>KITB3-7IDGFILTER<br/>KITIDG FILTERSERVICE</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font12Center}>4</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font12Center}>IDG FILTER</Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>3</Typography>
              </Grid>
              <Grid item xs={4.5}>
                <Typography sx={font12Left}>KITB3-7IDGFILTER<br/>KITIDG FILTERSERVICE</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={2}>
                <Typography sx={font12Center}>4</Typography>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item xs={3}>
                <Typography sx={font12Center}>IDG FILTER</Typography>
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
            <Divider sx={{ my: '3px'}} />

          </Box>
        </Grid>
      </Grid>

      </Paper>
    </Box>
  </div>
  );
}


interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  ];