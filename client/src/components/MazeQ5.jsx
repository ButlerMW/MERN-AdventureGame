import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core'


export default (props) => {
    const { inventory } = props;
    
    const [ q5, setQ5 ] = useState(false)

    const onClickAnswer1 = e => {
        if( inventory.length == 1){
            inventory.pop();
            setQ5(true)
        }
        else{
            navigate("/");
        }
    }

    const onClickAnswer2 = e => {
        navigate("/");
    }

    return (
        <div>
            <div>
                {q5 == true ? <></> : <p>Very good! I left a lemon in the maze do you have it? If not, im going to ZAP you.</p> }
                {q5 == true ? <></> : <h5>Do you have a Lemon? 
                </h5> }
                {q5 == true ? <></> : <Button variant="outlined" onClick={onClickAnswer1} >Yes. Give Lemon</Button> }
                {q5 == true ? <></> : <Button variant="outlined" onClick={onClickAnswer2} >No. It's My Lemon</Button> }
            </div>
            <div>
                {q5 == true ? <p>Well Done you passed all my questions and gave me back my lemon. The Peridot is yours if you can unlock it from this case.
                    Too bad for you, I lost the Note that contained the correct code. Give it a try though. 
                </p> : <></> }
                {q5 == true ? <Button variant="outlined" onClick={e => navigate("/maze/gem_case")}>Unlock the case</Button> : <></>}
            </div>
        </div>
    )
}