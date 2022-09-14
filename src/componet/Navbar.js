import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li><Link className="nav-link active" aria-current="page" to="/">{props.home}</Link></li>
          <li> <Link className="nav-link" to="/about">{props.about}</Link></li>
         
        </ul>  
      </div>
    </div>
    <div className="form-check mx-2">
  <input className="form-check-input" onClick={props.defaultmode} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  <label className={`form-check-label text-${props.text}`} htmlFor="exampleRadios1" >
    Default
  </label>
</div>

<div className="form-check mx-2">
  <input className="form-check-input" onClick={props.darkmode} type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className={`form-check-label text-${props.text}`} htmlFor="exampleRadios2" >
    Dark
  </label>
</div>
<div className="form-check mx-2">
  <input className="form-check-input" onClick={props.greenmode} type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className={`form-check-label text-${props.text}`} htmlFor="exampleRadios2" >
    Green
  </label>
</div>
<div className="form-check mx-2">
  <input className="form-check-input" onClick={props.bluemode} type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className={`form-check-label text-${props.text}`} htmlFor="exampleRadios2" >
    Blue
  </label>
</div>
<div className="form-check mx-2">
  <input className="form-check-input" onClick={props.yellowmode} type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className={`form-check-label text-${props.text}`} htmlFor="exampleRadios2" >
    Yellow
  </label>
</div>
  </nav>
    </>
    
  )
}

Navbar.propTypes={

    title:PropTypes.string.isRequired,
    home:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired

};

Navbar.defaultProps={
    title:'textUtilts',
    home:"home",
    about:"About"
};