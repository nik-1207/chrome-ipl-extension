import { Card, CardContent } from '@mui/material'
import React from 'react'
import Batter from './Batter'
import Bowler from './Bowler'
import CurrentOver from './CurrentOver'
function PlayerCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Batter />
            </CardContent>
            <CardContent>
                <Bowler />
            </CardContent>
            <CardContent>
                <CurrentOver />
            </CardContent>
        </Card>
    )
}
export default PlayerCard
