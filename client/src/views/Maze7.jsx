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
                        (You see a young magician walk by)<br />
                        <strong>OPIA</strong><br />
                        Did you know thats the password?
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Which way would you like to go?
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="outlined" onClick={() => navigate("/dead_end")} >Left</Button> 
            <Button variant="outlined" onClick={() => navigate("/maze/8")} >Right</Button>
                </CardActions>
            </Card>
            
            <img className="Martin" src="http://pixelartmaker.com/art/d223dc4d96a87a4.png" />
           </Grid> 
        </div>
    )
}


//change thing to fit wizard apprentice
//interact? maybe give him the note? 