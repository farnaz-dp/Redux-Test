
import {NUMBER_INCREMENT} from '../Constants/IncrementType'
import {NUMBER_DECREMENT} from '../Constants/IncrementType'
import {NUMBER_SET_VALUE} from '../Constants/IncrementType'

export const NumberIncrement = ()=> {

    return {
    type : NUMBER_INCREMENT
    }
}

export const NumberDecrement = ()=> {
    return {
        type : NUMBER_DECREMENT
    }
}

export const NumberSetValue = (value)=> {
    return {
        type : NUMBER_SET_VALUE,
        payload : value
    }
}
