import { Button, Stack, Typography } from "@mui/material";
import React from "react"
const text13normal = {
    color: "#325381",
    fontFamily: "Inter",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const text15normal = {
    color: "#325381",
    fontFamily: "Inter",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
type Prop={
    row:any,
    id:number,
    onClick:Function,
}  
const RowFourItem = ({row,id,onClick}:Prop) => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={"0.5rem"} width={"min-content"} paddingX={1}>
    <Typography sx={text15normal}>{id + 1}</Typography>

    <Button
      onClick={()=>onClick(row)}   
      color="white"
      sx={{ paddingX:0}}
      variant="contained"
      startIcon={<img src={"spr/edit.png"} width={15}></img>}
    >
      <Typography sx={text13normal}>修正</Typography>
    </Button>

    <Button
      color="white"
      sx={{paddingX:0}}
      variant="contained"
      startIcon={<img src={"spr/view.png"} width={15}></img>}
    >
      <Typography sx={text13normal}>View</Typography>
    </Button>

    <Button
    
      color="white"
      sx={{ paddingX:0}}
      variant="contained"
      startIcon={<img src={"spr/pdf.png"} width={15}></img>}
    >
      <Typography sx={text13normal}>PDF</Typography>
    </Button>

    <Button
      color="white"
      sx={{ paddingX:0}}
      variant="contained"
      startIcon={<img src={"spr/print.png"} width={15}></img>}
    >
      <Typography sx={text13normal}>Print</Typography>
    </Button>
  </Stack>
  )
};

export default RowFourItem;
