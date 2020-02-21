import React from 'react';
//connecter le composant au store
import  { connect } from 'react-redux';

const LightComponent = ({ light, onSwitch }) => {

    return(
        <div>
            <p>{ light }</p>
            <button onClick={onSwitch}>Switch</button>
        </div>
    )
}

export default LightComponent;