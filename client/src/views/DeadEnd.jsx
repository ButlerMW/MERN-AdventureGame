import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Card, makeStyles, CardContent, Typography, CardActions, CardActionArea } from '@material-ui/core'


export default () => {
    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })
    
    const classes = useStyles();

    return (
        <div className="Deadend">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Oh No! a Dead End!
                        </Typography>
                        <Typography>
                            You are about to be teleported, Hold on!
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="outlined" onClick={() => navigate("/maze")} >Holding On</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}