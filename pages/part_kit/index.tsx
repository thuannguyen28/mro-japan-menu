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
import {keyframes} from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListPart from '../../components/request_for_part_and_material/ListPart';
import theme from '../../src/theme';
import Collapse from '@mui/material/Collapse';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});
// CSS
const cssLink = { textDecoration: 'none', color: 'inherit' };
const cssMro = { backgroundColor: '#325381', color:'#FFFFFF', fontSize: '13px', position: 'absolute', right: 0, bottom: 0 };
const cssMroTitle = { color: '#325381', fontSize: '20px'};
const cssBox = { py: 1, borderRadius: '5px'};
const cssBox2 = { background : '#F5F5F5', px: 1, py: '19px', borderRadius: '5px'};
const cssBox3 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', height:490};
const cssBox4 = { color: '#325381', backgroundColor: '#F5F5F5',py: 1, borderRadius: '5px', overflowY:'scroll', height:280};
const font12Center = { fontSize: '15px', display: 'flex', alignItems:'center', justifyContent: 'center' };
const font12Left = { fontSize: '15px', display: 'flex', alignItems:'center', justifyContent: 'left' };
const font12 = { fontSize: '12px'};
const cssOderLeft = { width: '100%', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px'};
const cssOderRight = { width: '100%',cursor: 'pointer', fontSize: '14px', color: '#325381', fontWeight: 700, mb: '5px', pr:'15px', display: 'flex', alignItems:'center', justifyContent: 'flex-end' };
const font13Bold = { fontSize: '13px', textAlign: 'center', py: 2, fontWeight: 700 };
const expand={
  "@keyframes expand":{
    "0%":{
    
      maxHeight:0},
    "100%":{
    
      maxHeight:94}
  },

  overflow:"hidden",
  animation:"expand 0.2s ease"
}

const shrink={
  "@keyframes shrink":{
    "0%":{
     
      maxHeight:120},

    "100%":{
    
      maxHeight:0}
  },
  maxHeight:0,
  overflow:"hidden",
  animation:"shrink 0.3s ease"
}


// Css TextField
const CssTextField = styled(TextField)({

  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'transparent',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      color:"#325381",
      textAlign:'left',
    },
    '& input': {
      height:20,
      textAlign:'center',
      color:"#325381",
      backgroundColor: "#f5f5f5",
      fontSize: '12px'
    },
  },

});

const cssAutoComplete={ maxwidth: {lg:234}, bgcolor:"#F0F0F0" }




export const CustomPopUpIcon = (props) => { 
  return (
    <>
    <Box borderLeft={props.open?0:1} height={28} borderColor={'#E3E3E3'}></Box>

          <ArrowDropDownIcon style={{color:'black'}}/>

    </>
 
      
  )
};




export default function RequestPartMaterials() {
  
  const [showText, setShowText] = React.useState(false);
  const [openAc, setOpenAc] = React.useState(false);
  const [openZone, setOpenZone] = React.useState(false);
  const [openAta, setOpenAta] = React.useState(false);
  const [openCustomer, setOpenCustomer] = React.useState(false);
  const [openAuthor, setOpenAuthor] = React.useState(false);
  const [numberColumn,setnumberColumn]=React.useState(5);

  const handleClick = () => {
    setShowText(!showText);


    if(showText)
    {
      setnumberColumn(5);
    
    }
    else{
      setnumberColumn(12/2.1);
    
    }
  };
  
  return (
  <div>
    <Box sx={{ color: '#325381', mx: { xs: 2, md: 4 }, my: { xs: 3, md: 2 } }}>
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
        <Grid item xs={'auto'}>
          <Typography sx={cssOderLeft}>全て検索</Typography>
        </Grid>
      </Grid>
    {/*Header 1*/}
      <Grid container width={showText?"100%":"90%"} spacing={2}>
          <Grid item  xs={12/numberColumn}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}><strong>AC Type</strong></Typography>
              <Box sx={cssBox}>
                <Grid container >
                  <Grid item xs={12} >
                    <Autocomplete
                    disablePortal
              id="filter-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              filterOptions={filterOptions}
              sx={cssAutoComplete}
             onOpen={(e)=>{setOpenAc(true)}}
             onClose={(e)=>{setOpenAc(false)}}
              popupIcon={<CustomPopUpIcon open={openAc} />}
              renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
              />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item   xs={12/numberColumn}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}><strong>Zone</strong></Typography>
            
              <Box sx={cssBox}>
                <Grid container>
                  <Grid item xs={12}>
                  
                    <Autocomplete
                    disablePortal
              id="filter-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              filterOptions={filterOptions}
               sx={cssAutoComplete}
               onOpen={(e)=>{setOpenZone(true)}}
               onClose={(e)=>{setOpenZone(false)}}
                popupIcon={<CustomPopUpIcon open={openZone} />}
              renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
              />
                 
                   
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12/numberColumn}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}><strong>ATA</strong></Typography>
              <Box sx={cssBox}>
                <Grid container>
                  <Grid item xs>
                    <Autocomplete
                    disablePortal
              id="filter-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              filterOptions={filterOptions}
              sx={cssAutoComplete}
              onOpen={(e)=>{setOpenAta(true)}}
              onClose={(e)=>{setOpenAta(false)}}
               popupIcon={<CustomPopUpIcon open={openAta} />}
              renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
              />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12/numberColumn}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}><strong>Customer</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }}>
                  <Grid item xs>
                    <Autocomplete
                    disablePortal
              id="filter-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              filterOptions={filterOptions}
              sx={cssAutoComplete}
              onOpen={(e)=>{setOpenCustomer(true)}}
              onClose={(e)=>{setOpenCustomer(false)}}
               popupIcon={<CustomPopUpIcon open={openCustomer} />}
              renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
              />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

          <Grid item xs={12/numberColumn}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}><strong>Author</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }}>
                  <Grid item xs>
                    <Autocomplete
                    disablePortal
              id="filter-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              filterOptions={filterOptions}
              sx={cssAutoComplete}
              onOpen={(e)=>{setOpenAuthor(true)}}
              onClose={(e)=>{setOpenAuthor(false)}}
               popupIcon={<CustomPopUpIcon open={openAuthor} />}
              renderInput={(params) => <TextField {...params} size="small" label="すべて" />}
              />
                  </Grid>   
                </Grid>
              </Box>
          </Grid>

        
  {showText && (
          <Grid item xs={1.5}>
              <Typography sx={{ fontSize: '16px', color: '#FFFFFF' }}><strong>Author</strong></Typography>
              <Box sx={cssBox}>
                <Grid container sx={{ height: '58px' }} spacing={2}  justifyContent={'flex-start'}>
                  <Grid item xs={10}>
            <Link href="https://www.mrojpn.co.jp" underline="none" target="_blank">
                  <Button fullWidth variant="contained" sx={{ bgcolor:"#325381"}}>
                  <SearchIcon style={{width:"20px"}} /> 
                    <Typography fontSize={{xs:"14px",}} >
                    検索
                  </Typography>
                  </Button>
                </Link>
                  </Grid>  
                <Grid item xs={2}>
                <Link href="#" underline="none">
                    <img src="../part-kit/reset.png" width="30" height="30"/>
                  </Link>
                </Grid>
                  
                </Grid>
              </Box>
          </Grid>
    )}
        </Grid>  
    {/*Header 2*/}
{/*  
        <Grid  container spacing={2} width={"86%"} sx={
       showText?expand:shrink
         }>
          <Grid item xs={3} sx={{ mt:2 }} >
              <Typography sx={{ fontSize: '16px', color: '#325381' }}>Task Card</Typography>
              <Box sx={cssBox} >
                 
                    <TextField id="filled-basic" size="small" variant="filled" fullWidth />
                
              </Box>
          </Grid>

          <Grid item xs={3} sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}>Category</Typography>
              <Box sx={cssBox}>
              <TextField id="filled-basic" size="small" variant="filled" fullWidth />
                  
              </Box>
          </Grid>

          <Grid item xs={3}  sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}>AMM</Typography>
              <Box sx={cssBox}>
              <TextField id="filled-basic" size="small" variant="filled" fullWidth />
              </Box>
          </Grid>

          <Grid item xs={3}  sx={{ mt:2 }}>
              <Typography sx={{ fontSize: '16px', color: '#325381' }}>Kit 名/作業名</Typography>
              <Box sx={cssBox}>
              <TextField id="filled-basic" size="small" variant="filled" fullWidth />
              </Box>
          </Grid>
        </Grid>
       */}
       
       <Collapse  in={showText} timeout="auto"
                        unmountOnExit>
          <Grid  container spacing={2}>
            <Grid item xs={12} md={2}>
                <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>Task Card</Typography>
                <Box sx={cssBox}>
                  <Grid container>
                    <Grid item xs>
                      <CssTextField fullWidth defaultValue="" size="small" placeholder="" />
                    </Grid>   
                  </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} md={2}>
                <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>Category</Typography>
                <Box sx={cssBox}>
                  <Grid container>
                    <Grid item xs>
                      <CssTextField fullWidth defaultValue="" size="small" placeholder="" />
                    </Grid>   
                  </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} md={2}>
                <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>AMM</Typography>
                <Box sx={cssBox}>
                  <Grid container>
                    <Grid item xs>
                      <CssTextField fullWidth defaultValue="" size="small" placeholder="" />
                    </Grid>   
                  </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} md={2}>
                <Typography sx={{ fontSize: '13px', color: '#325381', fontWeight: 700 }}>Kit 名/作業名</Typography>
                <Box sx={cssBox}>
                  <Grid container>
                    <Grid item xs>
                      <CssTextField fullWidth defaultValue="" size="small" placeholder="" />
                    </Grid>   
                  </Grid>
                </Box>
            </Grid>
          </Grid>
         </Collapse>
      <Grid container spacing={2} justifyContent="flex-end" mt={"12px"}>
      
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
      </Paper>

       <Paper
        elevation={0}
        variant="outlined"
        sx={{
          borderRadius: 2,
          p:2,
          mt: { xs: 4, md: 2 },
        }}>
        
      <Grid container spacing={2} sx={{ pt: 2 }}>
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
                <Typography sx={font12Center}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737</Typography>
                <Typography sx={font12Center}>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE</Typography>
                <Typography sx={font12Center}>夜間定例LINE</Typography>
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
                <Typography sx={font12Center}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737</Typography>
                <Typography sx={font12Center}>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE</Typography>
                <Typography sx={font12Center}>夜間定例LINE</Typography>
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
                <Typography sx={font12Center}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737</Typography>
                <Typography sx={font12Center}>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE</Typography>
                <Typography sx={font12Center}>夜間定例LINE</Typography>
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
                <Typography sx={font12Center}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737</Typography>
                <Typography sx={font12Center}>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE</Typography>
                <Typography sx={font12Center}>夜間定例LINE</Typography>
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
                <Typography sx={font12Center}>編集</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '3px'}} />

            <Grid container>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>
                  <img src="../part-kit/upload.png" width="17" height="17"/>
                </Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Typography sx={font12Center}>1</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>B737</Typography>
                <Typography sx={font12Center}>ANA</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={1.5}>
                <Typography sx={font12Center}>LINE</Typography>
                <Typography sx={font12Center}>夜間定例LINE</Typography>
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
                <Typography sx={font12Center}>編集</Typography>
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
                <Typography sx={font12Left}>KITB3-7IDGFILTER</Typography>
                <Typography sx={font12Left}>KITIDG FILTERSERVICE</Typography>
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
                <Typography sx={font12Left}>KITB3-7IDGFILTER</Typography>
                <Typography sx={font12Left}>KITIDG FILTERSERVICE</Typography>
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
                <Typography sx={font12Left}>KITB3-7IDGFILTER</Typography>
                <Typography sx={font12Left}>KITIDG FILTERSERVICE</Typography>
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