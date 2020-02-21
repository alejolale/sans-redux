import React from 'react';
//connecter le composant au store
import  { connect } from 'react-redux';

//definition of actions
const switchAction = { type: 'SWITCH' };

//on recuere la props de mapStateToProps & dispatch provides by connect redux
const LightComponent = ({ light, dispatch }) => {

    return(
        <div>
            <p>{ light }</p>
            {/* give the action to the dispatch function passed by props */}
            <button onClick={() => dispatch(switchAction) }>Switch</button>
        </div>
    )
}
//recuperer la valeur du state depuis le store redux
const mapStatetoProps = state => ({
    light: state
 })

//connecter redux avec le composant et le "connecter"
//une fois crée la fonction mapToStateProps il faut l'ajouter à connect
//il faut faire une distinction entre los contaires qui vont travailler avec le state et les composants qui font l'affichage
const LightContainer = connect(mapStatetoProps)(LightComponent);
export default LightContainer;