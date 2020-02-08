import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core'
import MazeQ2 from './MazeQ2'


export default (props) => {
    const { inventory } = props;
    const [ q1, setQ1 ] = useState(false)

    const onClickAnswer1 = e => {
        // e.preventDefault();
        if(e == 1){
            console.log("next Question");
            setQ1(true)
        }
        else{
            navigate("/");
        }
        console.log(e);
    }

    return (
        <div>
        <div>
            {q1 == true ? <></> : <p>Splendid! here is the first question.</p> }
            {q1 == true ? <></> : <h5>The Labyrinth keeps a rare, exotic creature called what?</h5> }
            {q1 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Gapi</Button> }
            {q1 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(1)} >Gipa</Button> }
            {q1 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Gopher</Button> }
            {q1 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Gapa</Button> }
        </div>
        <div>
            {q1 == true ? <MazeQ2 inventory={inventory} /> : <></> }
        </div>
        </div>
    )
}

//see if we can change some things a that would be nice. 