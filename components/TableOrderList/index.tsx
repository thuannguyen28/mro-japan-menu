import React from "react"

import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

export type Props={
  params:{
    headers:string[],
    rows:string[][],
  
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
      
        borderBottom:"1px solid #E3E3E3"
      },
      '& .row:first-of-type  .cell:first-of-type':{
        position:'relative',     
        },
      '& .row:first-of-type':{
      
       borderBottom:"1px solid #E3E3E3"
      },
     '& .row .header:first-of-type':{
       
        width:"40px",
     },
     '& .row .header:nth-child(2)':{
        width:"150px",
     },
     '& .row .header:nth-child(3)':{
        width:"298px",
     },
     '& .row .header:nth-child(4)':{
        width:"50px",
     },
     '& .row .header:nth-child(5)':{
        width:"50px",
     },
     '& .row .header:nth-child(6)':{
        width:"210px",
     },
   
      '& .row .header':{       
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:`10px 0px 10px 0px` ,
        height:"auto",
        position:'relative',        
      },
 
      '& .row .header:not(:last-of-type):after':{
        content: '" "',
        height: "80%", 
        width: "1px",    
        position: "absolute",
        right: 0,
        top: "10%",     
        backgroundColor: "#E3E3E3", 
      },
      '& .row .cell:first-of-type':{
       
        width:"40px",
      },
      '& .row .cell:nth-child(2)':{
        width:"150px",
      },
      '& .row .cell:nth-child(3)':{
        width:"298px",
      },
      '& .row .cell:nth-child(4)':{
        width:"50px",
      },
      '& .row .cell:nth-child(5)':{
        width:"50px",
      },
      '& .row .cell:nth-child(6)':{
        width:"70px",
      },
      '& .row .cell:nth-child(7)':{
        width:"70px",
      },
      '& .row .cell:nth-child(8)':{
        width:"70px",
      },
      '& .row .cell ':{
       
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        height:"60px",
      },
      
 
      '& .row:not(:first-of-type) .cell:not(:last-of-type):after':{
        content: '" "',
        height: "100%", 
        width: "1px",    
        position: "absolute",
        right: 0,
        top: 0,     
        backgroundColor: "#E3E3E3", 
      },
      '& .row:nth-child(2) .cell:not(:last-of-type):after':{
        content: '" "',
        height: "90%", 
        width: "1px",    
        position: "absolute",
        right: 0,
        top: "10%",     
        backgroundColor: "#E3E3E3", 
      },
  
      '& .row .cell:not(:last-of-type):after':{
        content: '" "',
        height: "90%", 
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
export default function TableOrderList({params:{headers,rows}}:Props){


  return (
    <Box sx={cssBox}  paddingX={2} paddingBottom={1} >
  <StyledContainer>
       <Box className="row">
         {headers.map((header)=><Box className="header"><Typography variant={"h5"}  noWrap sx={textCss11Bold}>{header}</Typography></Box>)}
       </Box>      
         {rows.map((row)=>  <Box className="row">
         {row.map((cell)=><Box className="cell"><Typography variant={"h5"} noWrap sx={textCss11Normal}>{cell}</Typography></Box>)}
       </Box>)}   
     </StyledContainer>
   
    </Box>
  
  )
};


