import { combineReducers } from "redux";      //Wrap all reducer function into one object
import changetheme from "./reducers";

const Rootreducer=combineReducers({
    change:changetheme,     //change act as state variable(Just understand the whole code to understand it how it act as state variable)
})

export default Rootreducer