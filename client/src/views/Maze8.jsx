import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Grid, Button, Card, makeStyles, CardContent, Typography, CardActions, ListItemIcon } from '@material-ui/core'
import Axios from 'axios';

export default (props) => {
    const {addItem, lemonObtained, setLemonObtained } = props;
    // const [ obtained, setObtained ] = useState(false);


    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })

    const classes = useStyles();

    const onSubmitLemon = (e) => {
        e.preventDefault();
        addItem({ ItemName: "Lemon", img:"http://pixelartmaker.com/art/f27371913c668f4.png" });
        setLemonObtained(true);
    }

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
                            { lemonObtained == false? "(Interesting... you found a fairly fresh Lemon, wonder why that would be here...)" : "(You grabbed the Lemon!)" }
                        </Typography>
                        <CardActions style={{justifyContent: 'center'}}>
                            { lemonObtained == false ? <Button variant="outlined" onClick={onSubmitLemon} >Take the Lemon</Button> : <></> }
                        </CardActions>
                        <Typography variant="h5" component="h5">
                            Which way would you like to go?
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button variant="outlined" onClick={() => navigate("/maze/door")} >Left</Button> 
                        <Button variant="outlined" onClick={() => navigate("/dead_end")} >Right</Button>
                    </CardActions>
                </Card>
                { lemonObtained == false ? <img className="Martin" src="http://pixelartmaker.com/art/f27371913c668f4.png" /> : <></> }
            </Grid>
        </div>
    )
}

//maybe pick up lemon?