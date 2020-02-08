import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Card, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core'
import MazeQ1 from '../components/MazeQ1'
import MazeQ2 from '../components/MazeQ2'


export default (props) => {
    const { inventory } = props;
    const [ startQ, setStartQ ] = useState(false);
    
    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })

    const classes = useStyles();

    const onClickAccept = e => {
        e.preventDefault();
        console.log("okay");
        setStartQ(true);
    }

    

    return (
        <div className="Center">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography>
                                {startQ == true ? <></> :
                                    <p>What?, how did you get through the door? That idiot apprentice needs to keep his lip shut. 
                                        I assume you are here for Peridot? I will present you with one if you answer my questons correcly. 
                                        or I'll ZAP you back to the Menu. Do we have a deal?
                                    </p> }
                            </Typography>
                            <CardActions style={{justifyContent: 'center'}}>
                                {startQ == true ? <></> : <Button variant="outlined" onClick={onClickAccept} >Yes</Button> }
                                {startQ == true ? <></> : <Button variant="outlined" onClick={() => navigate("/")} >Nope, just take me home</Button> }
                            </CardActions>
                            {startQ == true ? <MazeQ1 inventory={inventory} /> : <></> }
                        </CardContent>
                    </Card>
                </Grid>
            
            
            
            <img src="http://pixelartmaker.com/art/758cb3eb893ecbd.png" />
        </div>
    )
}

//might have to brut force this part
//
