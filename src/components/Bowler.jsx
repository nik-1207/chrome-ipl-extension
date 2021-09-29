import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { red } from "@mui/material/colors";
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
  { id: "bowlers", label: "Bowlers", width: 140 },
  { id: "overs", label: "O", maxWidth: 49, align: "right" },
  { id: "maidens", label: "M", maxWidth: 49, align: "right" },
  { id: "runs", label: "R", maxWidth: 49, align: "right" },
  { id: "wickets", label: "W", maxWidth: 49, align: "right" },
];

function Bowler() {
  const [Bowler, setBowler] = useState();
  useEffect(() => {
    const db = getDatabase();
    const path = ref(db, "/Bowlers");
    onValue(path, (snapshot) => {
      const data = snapshot.val();
      setBowler(data);
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
                style={{ maxWidth: column.maxWidth, bgcolor: red }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Bowler &&
            Object.keys(Bowler).map((key, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell align="right">{Bowler[key].name}</TableCell>
                  <TableCell align="right">{Bowler[key].overs}</TableCell>
                  <TableCell align="right">{Bowler[key].maidens}</TableCell>
                  <TableCell align="right">{Bowler[key].runs}</TableCell>
                  <TableCell align="right">{Bowler[key].wickets}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Bowler;
