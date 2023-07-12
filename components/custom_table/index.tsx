import { CheckBox } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

type Prop = {
  headers: String[];
  rows: String[][];
};

const Container = styled("div")({
  "& .row .cell ": {
    textAlign: "center",

    height: "60px",
  },

  "& .row .header": {
    textAlign: "center",

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
    height: "100%",
    width: "1px",
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#E3E3E3",
  },
  "& .row .cell:not(:last-of-type)": {
    height: "auto",
    position: "relative",
  },
});
const text15Bold = {
  color: "#325381",
  fontFamily: "Inter",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const text15 = {
  color: "#325381",
  fontFamily: "Inter",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};
const CustomTableNotHaveBottomBorder = ({ headers, rows }: Prop) => {
  return (
    <Container sx={{ width: "100%" }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="row">
              {headers.map((header) => (
                <TableCell className="header" align="center">
                  <Typography sx={text15Bold}>{header}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow key={id} className="row">
                {row.map((cell, id) => (
                  <TableCell
                    sx={{ borderBottom: "0" }}
                    key={id}
                    align="right"
                    className="header"
                  >
                    <Typography sx={text15}>{cell}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

type PropOneRow = {
  rows: React.ReactNode[];
  minWidth: number;
};

const cssOneRow = {
  ".css-hq7jim": {
    width: "100%",
  },
};

export const CustomTableOneRow = ({ rows, minWidth }: PropOneRow) => {
  return (
    <TableContainer sx={cssOneRow}>
      <Table aria-label="simple table">
        <Container>
          <TableHead>
            <TableRow className="row">
              {rows.map((cell) => (
                <TableCell
                  sx={{ borderBottom: "0" }}
                  className="cell"
                  align="center"
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Container>
      </Table>
    </TableContainer>
  );
};
const cssRadio={
    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
    {
        color: '#c5c6d0',
    },

}
// headers={["No.","PARTS No.","NOMEN","Q'ty","IPC No. DWG No","Request Date <br/> 入手希望日","Stock Qty <br/> 願客在庫数"]}
export const CustomTableFullDivide = ({  rows }: Prop) => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <Container>
          <TableHead>
            <TableRow className="row">
              <TableCell className="header" align="center" sx={text15}>
                No.
              </TableCell>
              <TableCell className="header" align="center" sx={text15}>
                PARTS No.
              </TableCell>
              <TableCell className="header" align="center" sx={text15}>
                NOMEN
              </TableCell>
              <TableCell colSpan={2} className="header" align="center" sx={text15}>Q’ty / Unit</TableCell>
              <TableCell className="header" align="center" sx={text15}>
                IPC No. DWG No
              </TableCell>
              <TableCell className="header" align="center" sx={text15}>
                Request Date <br /> 入手希望日
              </TableCell>
              <TableCell className="header" align="center" sx={text15}>
                Stock Qty <br /> 願客在庫数
              </TableCell>
              <TableCell className="header" align="center" sx={text15}>
                Account <br /> 口座の有無
              </TableCell>
              <TableCell className="header" align="center" sx={text15}>
                Other Stock <br /> 海外在庫の有無
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idRow) => (
              <TableRow key={idRow} className="row">
                {row.map((cell, id) => (
                  <TableCell sx={text15} key={id} align="center" className="cell">
                    {cell}
                  </TableCell>
                ))}
                <TableCell align="center" className="cell" width={"159px"}>
            
                <RadioGroup aria-label="position" row={true}>
                    <FormControlLabel
                 
                    sx={text15}
                      value="有"
                      control={<Radio sx={cssRadio} />}
                      label="有"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                    sx={text15}
                      value="無"
                      control={<Radio   sx={cssRadio}/>}
                      label="無"
                      labelPlacement="end"
                    />
                  </RadioGroup>
               
                 
                </TableCell>
                <TableCell align="center" className="cell" width={"159px"}>
                  
                <RadioGroup aria-label="position" row={true}>
                    <FormControlLabel
                    sx={text15}
                      value="有"
                      control={<Radio  sx={cssRadio}/>}
                      label="有"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                    sx={text15}
                      value="無"
                      control={<Radio  sx={cssRadio}/>}
                      label="無"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Container>
      </Table>
    </TableContainer>
  );
};

export default CustomTableNotHaveBottomBorder;
