import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Card, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core'


export default (props) => {
    // const {addItem} = props;
    // const [ obtained, ]

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
                            You find a note on the ground, it reads...<br />
                            <strong >"6113"</strong><br />
                            this might be useful information...<br />
                        </Typography>
                        <CardActions>
                            {/* <Button variant="outlined" onClick={onClickNote} >Take the Note</Button> */}
                        </CardActions>
                        <Typography variant="h5" component="h5">
                            Which way would you like to go?
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="outlined" onClick={() => navigate("/maze/3")} >Left</Button> 
                        <Button variant="outlined" onClick={() => navigate("/dead_end")} >Right</Button>
                    </CardActions>
                </Card>
                <img className="OldMan" src="https://art.pixilart.com/2e29f43a603936d.png" />
            </Grid>
        </div>
    )
}


//change the senerio to note
//maybe pick up the note?
