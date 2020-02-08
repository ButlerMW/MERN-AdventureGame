import React, { useState } from 'react'

export default () => {

    const [ time, setTime ] = useState(3);

    return (
        <div>
            {time}
        </div>
    )

}

//setInterval(() => setState({time-=1}),1000)

//work on this later