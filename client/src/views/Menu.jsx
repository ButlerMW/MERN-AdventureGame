import React, { useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import { navigate } from '@reach/router'


export default (props) => {
    const { adventure1Done } = props;
    const [ labyrinth, setLabyrinth ] = useState(false);

    const onClickLabyrinth = e => {
        setLabyrinth(true);
        // navigate("/maze");
    }
    
    return (
        <div className="Menu">
            <h1>Choose your adventure!</h1>
            
            {adventure1Done == false ? <Button m={10} onClick={() => navigate("/maze")} variant="contained" >Adventure</Button> : <Button m={10} disabled>Adventure 1</Button> }
            <Button m={10} onClick={() => navigate("/tutorial")} variant="contained" >tutorial</Button> 
            <Button m={10} onClick={() => navigate("/maze")} variant="contained" >Adventure 3</Button> 
            <Button m={10} onClick={() => navigate("/maze")} variant="contained" >Adventure 4</Button> 
            

          
        </div>
    )
}


// link first button to maze