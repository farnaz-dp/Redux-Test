import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {NumberIncrement , NumberDecrement , NumberSetValue} from '../Actions'

const IncrementContainer = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const setValueHandler = (e)=> {
        console.log(e)
        const value = document.getElementById('setvalue').value
        console.log('IncrementContainer , Value :' ,parseInt(value))
        dispatch(NumberSetValue(parseInt(value)))
    }

    return (
        <div>
            <h3>Count: {count} </h3>
            <button style={{margin : 5}} onClick={()=> dispatch(NumberIncrement())}>Increment</button>
            <button style={{margin : 5}} onClick={()=> dispatch(NumberDecrement())}>Decrement</button>
            <button style={{margin : 5}} onClick={setValueHandler}>Set Value</button>
            <input type="text" name="setvalue" id={'setvalue'}/>
        </div>
    )
}



export {IncrementContainer}