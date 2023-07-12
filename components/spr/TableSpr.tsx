import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SortSign from "./SortSign";
import { styled } from "@mui/material/styles";
import { Button, Divider, IconButton, Stack } from "@mui/material"; // table ??

import { TableContainer } from "@mui/material";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useRef } from "react";
import RowFourItem from "./RowFourItem";
import CustomLayoutDialog from "../custom_layout_dialog";
import CustomButton from "../custom_button_primary";
import { Label, RotateLeftOutlined } from "@mui/icons-material";
import CustomTable, { CustomTableFullDivide, CustomTableOneRow } from "../custom_table";
import CustomTableNotHaveBottomBorder from "../custom_table";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const cssBox = { borderRadius: "5px", backgroundColor: "#F5F5F5" };

const textCss15Normal = {
  color: "#325381",
  fontFamily: "Inter",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

const Container = styled("div")({
  "& .row .cell ": {
    textAlign: "center",

    height: "60px",
  },

  "& .row .header": {
    textAlign: "center",
    padding: `5px 0px 5px 0px`,
    height: "100%",
    position: "relative",
  },

  "& .row .header:not(:last-of-type):after": {
    content: '" "',
    height: "80%",
    width: "1px",
    position: "absolute",
    right: 0,
    top: "10%",
    backgroundColor: "#E3E3E3",
  },
  "& .row:not(:first-of-type) .cell:not(:last-of-type):after": {
    content: '" "',
    height: "100%",
    width: "1px",
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#E3E3E3",
  },

  "& .row .cell:not(:last-of-type):after": {
    content: '" "',
    height: "90%",
    width: "1px",
    position: "absolute",
    right: 0,
    top: "10%",
    backgroundColor: "#E3E3E3",
  },
  "& .row .cell:not(:last-of-type)": {
    height: "auto",
    position: "relative",
  },
});
type Prop = {
  NO: string;
  WO: string;
  AC: string;
  SPR_NO: string;
  TASK_CARD: string;
  ZONE: string;
  CREATOR: string;
  DATE: string;
};
const text13normalWhite = {
  letterSpacing: "-0.333px",
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};
const text11red = {
  color: "rgba(222, 6, 6, 0.80)",
  fontFamily: "Inter",
  fontSize: "11px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};
const text13normal = {
  color: "#325381",
  fontFamily: "Inter",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};
const text20bold = {
  color: "#325381",
  fontFamily: "Inter",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 700,
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

const text25Bold = {
  color: "#325381",
  fontFamily: "Inter",
  fontSize: "25px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
// DatePicker
const datePicker = {
  minWidth: "150px !important",
  width: "150px !important",
  marginRight: "20px",
  input: {
    color: "#325381",
    fontSize: "13px",
    order: "2",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: 0,
  },
};

export default function TableSpr({ datas }: Prop[]) {
  return (
    <Box sx={cssBox} paddingX={2} paddingBottom={1}>
      <Container>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="row">
                <TableCell className="header" width={"5%"}>
                  <Typography sx={text15normal}>SPR</Typography>
                </TableCell>
                <TableCell className="header" width={"5%"}>
                  <Typography sx={text15normal}>資材出庫要求伝票</Typography>
                </TableCell>
                <TableCell className="header">
                  <SortSign
                    des={(value) => {}}
                    asc={(value) => {}}
                    title={"No."}
                  />
                </TableCell>
                <TableCell className="header">
                  <Typography sx={text15normal}>Wo</Typography>
                </TableCell>
                <TableCell className="header">
                  <Typography sx={text15normal}>AC</Typography>
                </TableCell>
                <TableCell className="header">
                  <Typography sx={text15normal}>SPR NO</Typography>
                </TableCell>
                <TableCell className="header">
                  <Typography sx={text15normal}>TaskCard</Typography>
                </TableCell>
                <TableCell className="header">
                  <Typography sx={text15normal}>Zone</Typography>
                </TableCell>
                <TableCell className="header">
                  <Typography sx={text15normal}>ISSUED BY</Typography>
                </TableCell>
                <TableCell className="header">
                  <Typography sx={text15normal}>DATE</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((row, id) => (
                <TableRow className="row" key={id}>
                  <TableCell className="cell" width={"5%"} padding={"none"}>
                    <RowFourItem
                      row={row}
                      id={id}
                      onClick={(row) => console.log(row)}
                    />
                  </TableCell>
                  <TableCell padding={"none"} align="center" className="cell">
                    {" "}
                    <Stack
                      flexDirection={"row"}
                      gap={"0.5rem"}
                      width={"5%"}
                      paddingX={2}
                    >
                      <Button
                        color="white"
                        sx={{ width: "2rem" }}
                        variant="contained"
                        startIcon={<img src={"spr/pdf.png"} width={15}></img>}
                      >
                        <Typography sx={text13normal}>PDF</Typography>
                      </Button>

                      <Button
                        color="white"
                        sx={{ width: "2rem" }}
                        variant="contained"
                        startIcon={<img src={"spr/print.png"} width={15}></img>}
                      >
                        <Typography sx={text13normal}>Print</Typography>
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>{row.NO}</Typography>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>{row.WO}</Typography>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>{row.AC}</Typography>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>{row.SPR_NO}</Typography>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>
                      {row.TASK_CARD}
                    </Typography>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>{row.ZONE}</Typography>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>{row.CREATOR}</Typography>
                  </TableCell>
                  <TableCell padding={"none"} className="cell">
                    <Typography sx={textCss15Normal}>{row.DATE}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <CustomLayoutDialog
        pr={67}
        pl={64}
        pt={31}
        pb={0}
        open={true}
        toggleClick={() => {}}
        title={""}
        maxWidth={"lg"}
        height={"80vh"}
      >
        <Stack display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Stack
            width={"100%"}
            display={"flex"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography sx={text20bold}>SPR 修正</Typography>

            <Button
              sx={{
                borderRadius: "5px",
                backgroundColor: "#325381",
              }}
              startIcon={<img src="spr/reset.png"></img>}
            >
              <Typography sx={text13normalWhite}>N/R Task Data 更新</Typography>
            </Button>
          </Stack>

          <img src="part-order/Logo.png" width={174} height={35}></img>

          <Typography sx={text25Bold}>SHORTAGE PARTS REPORT (SPR)</Typography>
          <Typography alignSelf={"flex-end"} sx={text13normal}>
            Issue date : 2023/05/19
          </Typography>
          <Stack
            display={"flex"}
            gap={1}
            flexDirection={"row"}
            alignSelf={"flex-start"}
            width={"100%"}
          >
            <Box flex={1} sx={cssBox} paddingX={2} paddingBottom={1}>
              <CustomTableNotHaveBottomBorder
                headers={["A/C No.", "DOCK No.", "SPR No."]}
                rows={[["JA219A", "DOCK-2", ""]]}
              ></CustomTableNotHaveBottomBorder>
            </Box>

            <Box flex={1} sx={cssBox} paddingX={2} paddingBottom={1}>
              <CustomTableNotHaveBottomBorder
                headers={["ZONE", "Issued By", "Confirmed By"]}
                rows={[["EXT2", "中嶋", ""]]}
              ></CustomTableNotHaveBottomBorder>
            </Box>
          </Stack>
          <Box sx={cssBox} mt={2} paddingX={2} paddingBottom={1} width={"100%"}>
            <CustomTableOneRow
              rows={[
                <Typography mr={4} sx={text13normal}>
                  {" "}
                  Dock - in Period <br />
                  (yyyy/mm/dd - yyyy/mm/dd) <br />
                  ドックイン期間
                </Typography>,
              
                <Stack ml={15} display={"flex"} gap={1} flexDirection={"row"} alignItems={"center"}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    
                      <DatePicker
                        sx={datePicker}
                        defaultValue={dayjs("2022/02/06")}
                      />
                  

                      <DatePicker
                        sx={datePicker}
                        defaultValue={dayjs("2022/02/06")}
                      />
                
                  </LocalizationProvider>
                </Stack>,
              ]}
              minWidth={100}
            ></CustomTableOneRow>
        
              
            
          </Box>
          <Box sx={cssBox} mt={2} paddingX={2} paddingBottom={1} width={"100%"}>
          <CustomTableFullDivide  rows={[["1","TAAI3 - 03 PE00-01","","","EA","","2022/02/08","0"]]}/>
          </Box>
         <Stack mt={2} width={"100%"} direction={"column"} gap={2} divider={<Divider/>}>
          <Stack direction={"row"} justifyContent={"space-between"} ><Typography  sx={text13normal} ml="20px">N/R No :   ANA-12030006 </Typography>
          <Typography sx={text11red}>選択の削除はキーボードの[Delete]</Typography></Stack>
          <Typography sx={text13normal} ml="20px">Defects details 不具合内容: COND AND EXPIRATION DATE CK - LIFE VESTS</Typography>
          <Typography  sx={text13normal} ml="20px">Remarks  備考 : </Typography>
           <Divider/>
          </Stack>
        </Stack>
      </CustomLayoutDialog>
    </Box>
  );
}

// export default function TableSpr({
//   params: { headers, rows, needSort },
// }: Props) {
//   return (
//     <Box sx={cssBox} paddingX={2} paddingBottom={1}>
//       <StyledContainer>
//         <Box className="row">
//           {headers.map((header) => (
//             <Box className="header">
//               {needSort.includes(header) ? (
//                 <SortSign
//                   des={(value) => {}}
//                   asc={(value) => {}}
//                   title={header}
//                 />
//               ) : (
//                 <Typography variant={"h5"} noWrap sx={textCss15Normal}>
//                   {header}
//                 </Typography>
//               )}
//             </Box>
//           ))}
//         </Box>
//         {rows.map((row, indexRow) => (
//           <Box className="row">
//             {row.map((cell, index) => (
//               <Box className="cell">
//                 <CellItem
//                   indexRow={indexRow}
//                   index={index}
//                   title={cell}
//                 ></CellItem>
//               </Box>
//             ))}
//           </Box>
//         ))}
//       </StyledContainer>
//     </Box>
//   );
// }
// vi sao k xãi table cua MUIMUI
//phai custom co dong ri ne can j dung r custom class lai th custom kieu rang a bin chi voi code lai
