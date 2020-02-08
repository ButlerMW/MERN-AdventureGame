import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core'
import MazeQ5 from './MazeQ5'



export default (props) => {
    const { inventory } = props;
    const [ q4, setQ4 ] = useState(false)

    const onClickAnswer1 = e => {
        // e.preventDefault();
        if(e == 1){
            console.log("next Question3");
            setQ4(true);
        }
        else{
            navigate("/");
        }
        console.log(e);
    }

    return (
        <div>
            <div>
                {q4 == true ? <></> : <p>Very Good. I am the great Orval, the Maze Wizard.</p> }
                {q4 == true ? <></> : <h5>What fruit do I grow in the Labyrinth?</h5> }
                {q4 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Raspberry</Button> }
                {q4 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Pineapple</Button> }
                {q4 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(1)} >Lemon</Button> }
                {q4 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Coconut</Button> }
            </div>
            <div>
                {q4 == true ? <MazeQ5 inventory={inventory} /> : <></> }
            </div>
        </div>
    )
}