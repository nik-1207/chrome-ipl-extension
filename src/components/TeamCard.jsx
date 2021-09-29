import { Card, CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import React from 'react';
function TeamCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="live score">
            IPL
          </Avatar>
        }
        title="Live Score"
        subheader="2nd Match, Dubai, September 14, 2021"
        action={
            <div>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
          }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Chennai Super Kings</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>(6/20)</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>80/1</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Mumbai Indians</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography></Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography></Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
          <Typography variant="body2" display="inline" color="primary">Chennai Super Kings won the toss & choose to bat</Typography>
      </CardContent>
    </Card>
  );
}
export default TeamCard;
