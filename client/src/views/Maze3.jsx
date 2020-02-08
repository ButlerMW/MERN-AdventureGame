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
                        You see some strange, pink color goop splattered on the walls. 
                        You can't make out what it is, but you are not willing to touch it...
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Which way would you like to go?
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="outlined" onClick={() => navigate("/dead_end")} >Left</Button>
                    <Button variant="outlined" onClick={() => navigate("/maze/4")} >Right</Button>
                </CardActions>
             </Card>
                <img className="dert" src="http://pixelartmaker.com/art/aed3632af2fd3dc.png" />
            </Grid>
        </div>
    )
}
            