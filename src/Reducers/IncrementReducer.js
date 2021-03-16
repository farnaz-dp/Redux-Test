import {NUMBER_DECREMENT, NUMBER_INCREMENT, NUMBER_SET_VALUE} from "../Constants/IncrementType";


const initState = {
    count : 0

}

const IncrementReducer = (state = initState , action) =>{

    switch (action.type) {

        case NUMBER_INCREMENT :
            return {
                ...state,
                count: state.count + 1
            }

        case NUMBER_DECREMENT :
            return {
                ...state,
                count: state.count - 1
            }

        case NUMBER_SET_VALUE :
            return {
                ...state,
                count: action.payload
            }

        default :
            return state
    }
}

export {IncrementReducer}