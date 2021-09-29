import { Card, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

function TeamCard() {
  const [currentOver, setCurrentOver] = useState();
  const [currentRuns, setCurrentRuns] = useState();
  const [currentWickets, setCurrentWickets] = useState();

  useEffect(() => {
    const db = getDatabase();
    const path = ref(db, "/matchDetails");
    onValue(path, (snapshot) => {
      const data = snapshot.val();
      setCurrentOver(data.currentOver);
      setCurrentRuns(data.currentRuns);
      setCurrentWickets(data.currentWickets);
    });
  });
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
            <Typography>({currentOver}/20)</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              {currentRuns}/{currentWickets}
            </Typography>
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
        <Typography variant="body2" display="inline" color="primary">
          Chennai Super Kings won the toss & choose to bat
        </Typography>
      </CardContent>
    </Card>
  );
}
export default TeamCard;
