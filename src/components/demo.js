import React, { useState } from "react";


function Demo(props) {

    const [remember, setRemember] = useState(false);

    return ( 
    <>
        <h3>Demo</h3>
        <input type="checkbox" onChange={e => setRemember(e.target.checked)}/> Remember
        <button onClick={() => console.log(remember)}>submit</button>
    </>
    );
}

export default Demo;
