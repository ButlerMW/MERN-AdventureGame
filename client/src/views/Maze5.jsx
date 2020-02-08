import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Card, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core'


export default () => {
    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })

const classes = useStyles();
    return (
        <div className="Maze">
             <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Card className={classes.card} variant="outlined">
                <CardContent>
                    <Typography>
                        You see an armored soldier wondering around <br />
                        "Have you had any success on getting out of here?!
                        I thought once I slayed the Gipa I would have found a way out of here. <br />
                        - Keith the knight<br />
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Which way would you like to go?
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="outlined" onClick={() => navigate("/maze/6")} >Left</Button> 
                    <Button variant="outlined" onClick={() => navigate("/dead_end")} >Right</Button>
                </CardActions>
            </Card>
            <img className="Martin" src="http://pixelartmaker.com/art/98743367cf0222c.png" />
        </Grid>
        </div>
    )
}

//interact? tell him where the enterance is?