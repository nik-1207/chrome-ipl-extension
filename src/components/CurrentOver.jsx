import { Grid, Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React from 'react';

function CurrentOver() {
  return (
    <Grid
      container
      display="flex"
      justifyContent="left"
      align="center"
      item
      xs={12}
    >
      {['0nb',2, '3wd', 4, 0, 'w'].map((value) => (
        <Grid key={value} item>
          <Paper sx={{ width: 29, m: 0.5, p: 0.5, bgcolor: blueGrey[100] }}>
            {' '}
            {value}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default CurrentOver;
