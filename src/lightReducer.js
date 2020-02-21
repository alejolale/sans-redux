// actions possibles =>
// { type: 'SWITCH' }
const lightReducer = (state = 'onnn', action) => {
    switch(action.type){
        case 'SWITCH':
            return state === 'on' ? 'off' : 'on';
        default:
            return state;

    }
};

export default lightReducer;