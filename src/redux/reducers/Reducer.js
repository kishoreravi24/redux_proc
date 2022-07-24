import { decrement, increment } from "../action/Action";

const reducer = (state,{type,payload}) => {
    switch(type){
        case 'Increment':
            state = payload+1;
            return state;
        case 'Decrement':
            state = payload;
            return state-1;
        default:
            state = 0
            return state;
    }
}

export default reducer;