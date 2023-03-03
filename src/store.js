import { applyMiddleware, legacy_createStore as createStore } from 'redux'   //To create store from where you can access any to any variable
import thunk from 'redux-thunk'              //Helps to use asynchronous JS functions
import Rootreducer from './state/reducer'    

const store=createStore(Rootreducer,{},applyMiddleware(thunk))
export default store