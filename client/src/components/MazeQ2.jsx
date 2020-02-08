import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core'
import MazeQ3 from './MazeQ3'


export default (props) => {
    const { inventory } = props;
    const [ q2, setQ2 ] = useState(false)

    const onClickAnswer1 = e => {
        // e.preventDefault();
        if(e == 1){
            console.log("next Question");
            setQ2(true);
        }
        else{
            navigate("/");
        }
        console.log(e);
    }

    return (
        <div>
            <div>
                {q2 == true ? <></> : <p>Correct, I guess I should say we had one, until that knight slayed it... next question.</p> }
                {q2 == true ? <></> : <h5>Do you know what color is the blood of a gipa?</h5> }
                {q2 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Red</Button> }
                {q2 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Blue</Button> }
                {q2 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(0)} >Purple</Button> }
                {q2 == true ? <></> : <Button variant="outlined" onClick={() => onClickAnswer1(1)} >Pink</Button> }
            </div>
            <div>
                {q2 == true ? <MazeQ3 inventory={inventory} /> : <></> }
            </div>
        </div>
    )
}