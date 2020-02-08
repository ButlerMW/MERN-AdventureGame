import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core'
import MazeQ4 from './MazeQ4'


export default (props) => {
    const { inventory } = props;
    const [ q3, setQ3 ] = useState(false)

    const onClickAnswer1 = e => {
        // e.preventDefault();
        if(e == 1){
            console.log("next Question3");
            setQ3(true);
        }
        else{
            navigate("/");
        }
        console.log(e);
    }

    return (
        <div>
            <div>
                {q3 == true ? <></> : <p>Great Job! you know alot about the Gipa, let's if you know anything about me.</p> }
                {q3 == true ? <></> : <h5>What's my name?</h5> }
                {q3 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(1)} >Orval</Button> }
                {q3 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Horton</Button> }
                {q3 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Octavious</Button> }
                {q3 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Booger</Button> }
            </div>
            <div>
                {q3 == true ? <MazeQ4 inventory={inventory} /> : <></> }
            </div>
        </div>
    )
}