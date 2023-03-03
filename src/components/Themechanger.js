import React from 'react'
import { useDispatch } from 'react-redux' //This triggered action
// import { bluecolor,greycolor,greencolor,redcolor } from '../state/action-creator'
import * as actionCreators from '../state/action-creator' //Ek ek function ko bulane se aacha



const Themechanger = () => { 
  const dispatch = useDispatch()          //To trigger action

  return (
    <>
      <button type="button" className="btn btn-outline-primary mx-1" onClick={() => { dispatch(actionCreators.bluecolor()) }}></button>
      <button type="button" className="btn btn-outline-secondary mx-1" onClick={() => { dispatch(actionCreators.greycolor()) }}></button>
      <button type="button" className="btn btn-outline-danger mx-1" onClick={() => { dispatch(actionCreators.redcolor()) }}></button>
      <button type="button" className="btn btn-outline-success mx-1" onClick={() => { dispatch(actionCreators.greencolor()) }}></button>
    </>
  )
}

export default Themechanger
