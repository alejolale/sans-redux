import React from 'react';

const LightComponent = ({ light, onSwitch }) => {

    return(
        <div>
            <p>{ light }</p>
            <button onClick={onSwitch}>Switch</button>
        </div>
    )
}

export default LightComponent;