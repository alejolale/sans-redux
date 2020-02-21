// actions possibles =>
// { type: 'SWITCH' }
const lightReducer = (state = 'on', action) => {
    switch(action.type){
        case 'SWITCH':
            return state === 'on' ? 'off' : 'on';
        default:
            return state;

    }
};

export default lightReducer;