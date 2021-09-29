import { Card, CardContent } from "@mui/material";
import React from "react";
import Batter from "./Batter";
import Bowler from "./Bowler";
function PlayerCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Batter />
      </CardContent>
      <CardContent>
        <Bowler />
      </CardContent>
    </Card>
  );
}
export default PlayerCard;
