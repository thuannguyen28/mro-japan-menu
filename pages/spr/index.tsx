import { Button, Stack,  Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react"

import { headers } from "next/dist/client/components/headers";
import TableSpr from "../../components/spr/TableSpr";
import SprLayout from "./layout";

const css20bold={
color:" #325381",
fontFamily: "Inter",
fontSize: "20px",
fontStyle: "normal",
fontWeight: 700,
lineHeight: "normal",
}

const SprPage = ({props}) => {
    return (
      <SprLayout>
<Box sx={{ display: 'flex', flexDirection: "column" ,padding:"10px"}} >
            <Box sx={{ display: 'flex',justifyContent:'space-between', alignItems:'center',my:"21px"}}>
                <Typography sx={css20bold}>SPR(Shortage Parts Report) Ver.2</Typography>
                <Box>
                    <Box sx={{ display: 'flex',flexDirection:'column'}}>
                    <Typography sx={css20bold}>WO:</Typography>
                        <Stack flexDirection={'row'} gap={1} >                       
                            <Box sx={{
                              paddingY:"12px",
                              paddingX:"97px",
                                borderRadius: "5px",
                                backgroundColor: "#F8F8F8",
                                boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)"
                            }}><Typography>10024280</Typography></Box>
                            <Button onClick={()=>{}} variant="contained"
                             sx={{borderRadius: "5px",background: "#325381"}}>
                                <Typography>全て表示</Typography>
                            </Button>
                        </Stack>
                        
                    </Box>
                </Box>
            </Box>
           <TableSpr params={{
          headers: ["SPR","資材出庫要求伝票","No. ","Wo","AC","SPR NO","TaskCard","Zone","ISSUED BY","DATE"],
          rows: [['','','SPR21-1474','10023866','JA219A','','N/R-00027','MAM','中川','2022/02/01'],
          ['','','SPR21-1474','10023866','JA219A','','N/R-00027','MAM','中川','2022/02/01'],
          ['','','SPR21-1474','10023866','JA219A','','N/R-00027','MAM','中川','2022/02/01'],
          ['','','SPR21-1474','10023866','JA219A','','N/R-00027','MAM','中川','2022/02/01'],
          ['','','SPR21-1474','10023866','JA219A','','N/R-00027','MAM','中川','2022/02/01']
        ],
          needSort: ["No. "]
        }}></TableSpr>
        </Box>
      </SprLayout>
        
    )
};

export default SprPage;
