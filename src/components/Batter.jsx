import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses }from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
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
  { id: 'batters', label: 'Batters', width: 140 },
  { id: 'runs', label: 'R', maxWidth: 49, align: 'right' },
  { id: 'balls', label: 'B', maxWidth: 49, align: 'right' },
  { id: 'fours', label: '4s', maxWidth: 49, align: 'right' },
  { id: 'sixs', label: '6s', maxWidth: 49, align: 'right' },
];
function createData(batters, runs, balls, fours, sixs) {
  return { batters, runs, balls, fours, sixs };
}
const rows = [
  createData('Player1', 50, 30, 4,3),
  createData('Player2', 10, 3, 0 ,1),
];
function Batter() {
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

export default Batter;
