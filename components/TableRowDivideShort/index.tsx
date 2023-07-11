import React from "react"

import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export type Props={
  params:{
    headers:string[],
    rows:string[][],
    classNamePadding:string,
  }
}
const textCss11Bold={
    color: "#325381",
fontFamily: "Inter",
fontSize: "11px",
fontStyle: "normal",
fontWeight: 700,
lineHeight: "normal",
}
const textCss11Normal={
color:'#325381',
    fontSize:'11px',
    fontFamily:'Inter',
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:'normal',};

 const  StyledContainer=styled('div')(()=>({

      '& .row':{
        display:"flex",
        
        justifyContent:"center",
      },
      '& .row:first-of-type  .cell:first-of-type':{
        position:'relative',
     
        },
      '& .row:first-of-type':{
      
       borderBottom:"1px solid #E3E3E3"
      },
      '& .row .header50 ':{
        width:"139px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:`10px 0px 10px 0px` ,
        height:"auto",
        position:'relative',        
      },
      '& .row .header30 ':{
        width:"127px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:`10px 0px 10px 0px` ,
        height:"auto",
        position:'relative',        
      },
 
      '& .row .header30:not(:last-of-type):after,.header50:not(:last-of-type):after ':{
        content: '" "',
        height: "80%", 
        width: "1px",    
        position: "absolute",
        right: 0,
        top: "10%",     
        backgroundColor: "#E3E3E3", 
      },
      '& .row .cell ':{
        flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"60px",
      },
      
      '& .row .cell:not(:last-of-type):after':{
        content: '" "',
        height: "80%", 
        width: "1px",    
        position: "absolute",
        right: 0,
        top: "10%",     
        backgroundColor: "#E3E3E3", 
      },
      '& .row .cell:not(:last-of-type)':{
        height:"auto",
        position:'relative',
      },

   
    }))    
const cssBox = { borderRadius: '5px', backgroundColor: '#F5F5F5' };
export default function TableRowsDivideShort({params:{headers,rows,classNamePadding}}:Props){
  return (
    <Box sx={cssBox} >
  <StyledContainer>
       <Box className="row" >
         {headers.map((header)=><Box className={classNamePadding}><Typography variant={"h5"}  noWrap sx={textCss11Bold}>{header}</Typography></Box>)}
       </Box>      
         {rows.map((row)=>  <Box className="row">
         {row.map((cell)=><Box className="cell"><Typography variant={"h5"} noWrap sx={textCss11Normal}>{cell}</Typography></Box>)}
       </Box>)}
           
     </StyledContainer>
    </Box>
  
  )
};


