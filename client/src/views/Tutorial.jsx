import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Card, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core'

export default () => {
    const [ reply, setReply ] = useState(0); //Might Need to Change this reaction to a 0,1,2 
    // const [ no, setNo ] = useState(false); //Might Need to Change this reaction to a 0,1,2 
    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })
    
    const onClickReactWithMartin = e => {
        e.preventDefault();
        setReply(true);
    }

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
                            Welcome to the Tutorial!
                        </Typography>
                        <Typography>
                            {reply == true ? "Wonderful, now lets begin! You also will get the option to move to a different location instead of interacting let's move forward. I'll be right behind you." 
                            : "To start off you can interact with people you meet by the speech optional below. The actions below will give you options on what to say or do. Do you understand?" }
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {reply == true ? "Where would you like to go?" : "What would you like to say?" }
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        { reply == false ? <Button variant="outlined" onClick={onClickReactWithMartin} >"Yes"</Button> 
                        : <Button variant="outlined" onClick={onClickReactWithMartin} >Forward</Button> }
                    </CardActions>
                </Card>
                <img className="Martin" src="MartinTheKeeper.png" />
            </Grid>
        </div>
    )
}