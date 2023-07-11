import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SortSign from "./SortSign";
import { styled } from "@mui/material/styles";
import { Button, IconButton, Stack } from "@mui/material";

const cssBox = { borderRadius: '5px', backgroundColor: '#F5F5F5' };
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
     
    width:"24rem"
   },
   '& .row .header:nth-child(2)':{
    width:"11rem"
   },
   '& .row .header:nth-child(3)':{
     width:"7rem"
   },
   '& .row .header:nth-child(4)':{
       width:"4rem"
   },
   '& .row .header:nth-child(5)':{
       width:"4rem"
   },
   '& .row .header:nth-child(6)':{
       width:"4rem"
   },
   '& .row .header:nth-child(7)':{
     width:"4rem"
 },
 '& .row .header:nth-child(8)':{
     width:"4rem"
 },
 '& .row .header:nth-child(9)':{
     width:"4rem"
 },

 '& .row .header:nth-child(10)':{
     width:"4rem"
 },
 '& .row .cell ':{     
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"60px",
  },
  

    '& .row .header':{       
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:`5px 0px 5px 0px` ,
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
        justifyContent:"flex-start",
        width:"40%"
    },
    '& .row .cell:nth-child(2)':{
        width:"20%"
    },
    '& .row .cell:nth-child(3)':{
       width:"7%"
    },
    '& .row .cell:nth-child(4)':{
         width:"6%"
    },
    '& .row .cell:nth-child(5)':{
          width:"6%"
    },
    '& .row .cell:nth-child(6)':{
        width:"6%"
    },
    '& .row .cell:nth-child(7)':{
        width:"6%"
    },
    '& .row .cell:nth-child(8)':{
        width:"6%"
    },
    '& .row .cell:nth-child(9)':{
          width:"6%"
      },
      '& .row .cell:nth-child(10)':{
          width:"15%"
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
  const textCss15Normal={
    color: "#325381",
fontFamily: 'Inter',
fontSize: '15px',
fontStyle: 'normal',
fontWeight: 400,
lineHeight: 'normal',
  }  
  export type Props={
    params:{
      headers:string[],
      rows:Array<string[]>,
      needSort:string[],
    }
  }  
 const text13normal={
    color: "#325381",
fontFamily: "Inter",
fontSize: "11px",
fontStyle: "normal",
fontWeight: 400,
lineHeight: "normal",
 }

  const CellItem = ({indexRow,index,title}) => { 
    switch (index) {
        case 0:
            return <Stack flexDirection={'row'} alignItems={"center"}
           
            gap={"0.2rem"}>
                <Typography sx={text13normal}>{indexRow+1}</Typography>
              
               <Button color="white"   
               
    sx={{width:"25%", padding:0.5 }}
    variant="contained"
    startIcon={<img src={"spr/edit.png"} width={15}></img>}
    ><Typography sx={text13normal}>修正</Typography></Button>
    
    <Button color="white"    sx={{width:"25%",paddingY:0.5, }}
    variant="contained"
    startIcon={<img src={"spr/view.png"}  width={15}></img>}
    >
        <Typography sx={text13normal}>View</Typography>
    </Button>
   
    <Button color="white"    sx={{width:"25%",paddingY:0.5 }}
    variant="contained"
    startIcon={<img src={"spr/pdf.png"}  width={15}></img>}
    >
           <Typography sx={text13normal}>PDF</Typography>
    </Button>
   
    <Button color="white"   sx={{width:"25%",paddingY:0.5}}
    variant="contained"
    startIcon={<img src={"spr/print.png" } width={15}></img>}
    >
        <Typography sx={text13normal}>Print</Typography>
    </Button>
  
            </Stack>           
        case 1:
            return  <Stack  flexDirection={'row'} gap={"0.5rem"}>
              
                    <Button color="white"    sx={{width:"2rem",paddingY:0.5 }}
    variant="contained"
    startIcon={<img src={"spr/pdf.png" }  width={15}></img>}
    >
           <Typography sx={text13normal}>PDF</Typography>
    </Button>
  
    <Button color="white"    sx={{width:"2rem",paddingY:0.5 }}
    variant="contained"
    startIcon={<img src={"spr/print.png"} width={15} ></img>}
    >
        <Typography sx={text13normal}>Print</Typography>
    </Button>
  
            </Stack>
            
        default:
            return <Typography sx={textCss15Normal}>{title}</Typography>
    }
 }



export default function TableSpr({params:{headers,rows,needSort}}:Props){

  return (
    <Box sx={cssBox}  paddingX={2} paddingBottom={1} >
  <StyledContainer>
       <Box className="row">
         {headers.map((header)=>
         <Box className="header">
           
            {needSort.includes(header)?<SortSign des={(value)=>{}} asc={(value)=>{}} title={header}/>: <Typography variant={"h5"}  noWrap sx={textCss15Normal}>{header}</Typography>}
         </Box>)}
         
       </Box>      
         {rows.map((row,indexRow)=>  <Box className="row">
         {row.map((cell,index)=><Box className="cell" >
           <CellItem indexRow={indexRow} index={index} title={cell} ></CellItem>
         </Box>)}

       </Box>)}   
     </StyledContainer>
   
    </Box>
  
  )
};

