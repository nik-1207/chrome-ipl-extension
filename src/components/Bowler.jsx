import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { red } from '@mui/material/colors';
import React from 'react';
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
  { id: 'bowlers', label: 'Bowlers', width: 140 },
  { id: 'overs', label: 'O', maxWidth: 49, align: 'right' },
  { id: 'maidens', label: 'M', maxWidth: 49, align: 'right' },
  { id: 'runs', label: 'R', maxWidth: 49, align: 'right' },
  { id: 'wickets', label: 'W', maxWidth: 49, align: 'right' },
];
function createData(bowlers, overs, maidens, runs, wickets) {
  return { bowlers, overs, maidens, runs, wickets };
}
const rows = [
  createData('Player1', 8, 0, 40, 0),
  createData('Player2', 1, 0, 10, 0),
];

function Bowler() {
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
          {rows.map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Bowler;
