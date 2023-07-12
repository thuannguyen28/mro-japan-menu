import { Button, Divider, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
type Props={
  des:(value:string)=>void,
  asc:(value:string)=>void,
  title:string,
}
const textCss15={
    color: "#325381",
fontFamily: "Inter",
fontSize: "15px",
fontStyle: "normal",
fontWeight: 400,
lineHeight: "normal",
}

const SortSign = ({des,asc,title}:Props) => {
  return (
       <Box sx={{display:"flex",alignItems:"center",width:"100%",justifyContent:"center"}}>
          <Typography sx={
            textCss15
          }>{title}</Typography>
          <Stack direction={"column"} alignItems={"center"}>
             <Button sx={{padding:0}} size={'small'}  onClick={()=>{asc(title)}}>
                <ArrowDropUpIcon/>
             </Button>
             <Divider sx={{width:'20px'}}/>
             <Button sx={{padding:0}} size={'small'} onClick={()=>{des(title)}}>
                <ArrowDropDownIcon/>
             </Button>
          </Stack>
       </Box>
  )
};

export default SortSign;
