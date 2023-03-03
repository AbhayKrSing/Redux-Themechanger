import React from 'react'
import { useSelector } from 'react-redux'    //Take out state variable from store
import Themechanger from './Themechanger'    

const Navbar = () => {
  const state=useSelector((state)=>state.change)      //Store se state variable variable nikal rhe hai.
  document.body.style.backgroundColor=state

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/link">Link</a>
        </li>
      </ul>
    </div>
  </div>
  <div className='d-flex mx-3'>
  <Themechanger/>
  </div>

</nav>
    </div>
  )
}

export default Navbar
