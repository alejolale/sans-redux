// actions possibles =>
// { type: 'SWITCH' }
<<<<<<< HEAD
const lightReducer = (state = 'onnn', action) => {
=======
const lightReducer = (state = 'on', action) => {
>>>>>>> 958a3b856da5a536d75d3113155abb93bb67b3b5
    switch(action.type){
        case 'SWITCH':
            return state === 'on' ? 'off' : 'on';
        default:
            return state;

    }
};

export default lightReducer;