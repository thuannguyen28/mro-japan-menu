import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react"

const SprLayout = ({children}) => {
  return (
   <>
    <main>{children}</main>
    <Divider/>
    <Box component="footer" display={"flex"} justifyContent={"space-between"}>
        <Typography sx={{ color: "#9AA1A9", fontSize: 13, ml: 4, mt: 4 ,mb:4}}>
          Copyright © 2023 OCC
        </Typography>
        <Typography sx={{ color: "#9AA1A9", fontSize: 13, mr: 4, mt: 4 ,mb:4}}>
        Design by Codingdung
        </Typography>
        
      </Box>
   </>
  )
};

export default SprLayout;
