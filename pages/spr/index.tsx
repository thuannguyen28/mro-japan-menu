import { Button, Stack, TextField, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useRef, useState } from "react"

import { headers } from "next/dist/client/components/headers";
import TableSpr from "../../components/spr/TableSpr";
import SprLayout from "./layout";

const css20bold = {
  color: " #325381",
  fontFamily: "Inter",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}

const textcss15={
  
  color: " #325381",
  fontFamily: "Inter",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}
const textwhitecss15={
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",

}
const SprPage = ({ props }) => {
const [woCurrent,setWoCurrent]=useState("");
const  refInput = useRef<HTMLInputElement>(null);
  return (
    <SprLayout>
      <Box sx={{ display: 'flex', flexDirection: "column", padding: "10px" }} >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: "21px" }}>
          <Typography sx={css20bold}>SPR(Shortage Parts Report) Ver.2</Typography>
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={css20bold}>WO:</Typography>
              <Stack flexDirection={'row'} gap={2} >
                <Box sx={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                 
                  borderRadius: "5px",
                  backgroundColor: "#F8F8F8",
                  boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)"
                }}>
                  <TextField
                  inputRef={refInput}
                   sx={{
                    "& .MuiInputBase-root": {
                      "& input": {
                          textAlign: "center"
                      }
                  }
                   }}
                  InputProps={{                   
                       disableUnderline: true, 
                    style:textcss15}}   hiddenLabel  defaultValue="10024280" id="outlined-basic"  variant="standard"/>
                 </Box>
                <Button onClick={() => {                   
                    setWoCurrent(refInput.current.value);                  
                }} variant="contained"
                  sx={{ borderRadius: "5px", background: "#325381",paddingX:"52px",paddingY:'13PX'}}>
                  <Typography sx={textwhitecss15}>全て表示</Typography>
                </Button>
              </Stack>

            </Box>
          </Box>
        </Box>
        <TableSpr 
        onClick={(value)=>console.log("d")}
        datas ={[{  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},{  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  {  NO:"SPR21-1474",
  WO:"10023866",
  AC:"JA219A",
  SPR_NO:"",
  TASK_CARD:"N/R-00027",
  ZONE:"MAM",
  CREATOR:"中川",
  DATE:"2022/02/01",},
  ]} ></TableSpr>
      </Box>
    </SprLayout>

  )
};

export default SprPage;
