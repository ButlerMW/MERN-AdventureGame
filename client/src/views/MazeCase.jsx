import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { TextField, Button, ButtonGroup, Grid, Card, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core'



export default (props) => {
    const {adventure1Done, setAdventure1Done, addItem} = props;
    let [code, setCode] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const onClickHandlerCode = e => {
        code += e;
        setError(false);
        console.log(code);
        if(code.length == 4){
            if(code == "6113"){
                console.log("you got the gem");
                setUnlocked(true)
            }
            else{
                console.log("invalid code");
                setError(true)
                code = "";
        }}
    }

    const useStyles = makeStyles({
        card: {
            width: 1000,
            marginTop: 45,
        }
    })

    const onClickPeridot = (e) => {
        addItem({ItemName: "Peridot", img: "http://pixelartmaker.com/art/8472bd8d24b7993.png"});
        setAdventure1Done(true);
        navigate("/")
    }


    const classes = useStyles();

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
                        {unlocked == false? <Typography>
                            The Case has a number pad, you must type in a code to retrieve the Peridot. 
                            I wonder what Orval meant by being aware og your surroundings?? 
                        </Typography> : <></> }
                        {unlocked == false ? <CardActions style={{justifyContent: 'center'}}>
                            <ButtonGroup
                                orientation="vertical"
                                color="primary"
                                aria-label="vertical outlined primary button group"
                            >
                                <Button onClick={e => onClickHandlerCode(1)}>One</Button>
                                <Button onClick={e => onClickHandlerCode(4)}>Four</Button>
                                <Button onClick={e => onClickHandlerCode(7)}>Seven</Button>
                            </ButtonGroup>
                            <ButtonGroup
                                orientation="vertical"
                                color="primary"
                                aria-label="vertical outlined primary button group"
                            >
                                <Button onClick={e => onClickHandlerCode(2)}>Two</Button>
                                <Button onClick={e => onClickHandlerCode(5)}>Five</Button>
                                <Button onClick={e => onClickHandlerCode(8)}>Eight</Button>
                            </ButtonGroup>
                            <ButtonGroup
                                orientation="vertical"
                                color="primary"
                                aria-label="vertical outlined primary button group"
                            >
                                <Button onClick={e => onClickHandlerCode(3)}>Three</Button>
                                <Button onClick={e => onClickHandlerCode(6)}>Six</Button>
                                <Button onClick={e => onClickHandlerCode(9)}>Nine</Button>
                            </ButtonGroup>
                        </CardActions> : <></> }
                        <Typography>
                            {error == true ? <h3>That was not the right code, try again</h3> : <></>}
                            {unlocked == true ? <h3>You opened the case! Grab the Peridot and get the hell out of here!</h3> : <></>}
                            {unlocked == true ? <Button onClick={onClickPeridot} variant="outlined">Retrieve the Peridot</Button> : <></>}
                        </Typography>
                    </CardContent>
                </Card>
                {unlocked == false ? <img src="https://opengameart.org/sites/default/files/Treasure%20Chest%20closed%20254x254.png" /> : <></> }
                {unlocked == true ? <img className="Martin" src="https://opengameart.org/sites/default/files/Treasure%20Chest%20open%20254x254.png" /> : <></> }
            </Grid>
        </div>
    )
}
//add validations

//start working of sockets?
//make this shit pretty