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
                        <Typography variant="h5" component="h2">
                            Make your way through the Labyrinth!
                        </Typography>
                        <Typography>
                            "Hello there.<br />
                            If you reach a dead end, you will be trasported back here. <br />
                            Good luck!"<br /> 
                            - Martin, the Groundskeeper
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Which way would you like to go?
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="outlined" onClick={() => navigate("/dead_end")} >Left</Button> 
                        <Button variant="outlined" onClick={() => navigate("/maze/2")} >Right</Button>
                    </CardActions>
                </Card>
                <img className="Martin" src="MartinTheKeeper.png" />
            </Grid>
        </div>
    )
}

//interact with the characters?