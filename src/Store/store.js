
import {createStore , applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import {IncrementReducer} from '../Reducers/IncrementReducer'


// const store = createStore(IncrementReducer)
const store = createStore(
    IncrementReducer,
    composeWithDevTools(
        applyMiddleware(

             logger
        )
    )
)

export {store}