import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const columns = [
  { id: "batters", label: "Batters", width: 140 },
  { id: "runs", label: "R", maxWidth: 49, align: "right" },
  { id: "balls", label: "B", maxWidth: 49, align: "right" },
  { id: "fours", label: "4s", maxWidth: 49, align: "right" },
  { id: "sixs", label: "6s", maxWidth: 49, align: "right" },
];

function Batter() {
  const [Batsman, setBatsman] = useState();
  useEffect(() => {
    const db = getDatabase();
    const path = ref(db, "/Batsman");
    onValue(path, (snapshot) => {
      const data = snapshot.val();
      setBatsman(data);
    });
  }, []);
  return (
    <TableContainer sx={{ maxwidth: 345 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ maxWidth: column.maxWidth }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Batsman &&
            Object.keys(Batsman).map((key, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell align="right">{Batsman[key].name}</TableCell>
                  <TableCell align="right">{Batsman[key].runs}</TableCell>
                  <TableCell align="right">{Batsman[key].balls}</TableCell>
                  <TableCell align="right">{Batsman[key].fours}</TableCell>
                  <TableCell align="right">{Batsman[key].sixes}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Batter;
