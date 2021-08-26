import React from "react";
import PropTypes from 'prop-types'
import {

  Link
} from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
         
        </div>
        <button className="btn btn-primary mx-2" onClick={props.changeTheme.blue} style={{border: '1px solid black'}} />
        <button className="btn btn-success mx-2" onClick={props.changeTheme.green} style={{border: '1px solid black'}}/>
        <button className="btn btn-warning mx-2" onClick={props.changeTheme.yellow} style={{border: '1px solid black'}}/>
        <button className="btn btn-danger mx-2" onClick={props.changeTheme.red} style={{border: '1px solid black'}}/>

        <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'} `}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick= {props.toggleMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable dark mode</label>
      </div>
      </div>
    </nav>
    
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
}
Navbar.defaultProps = {
    title: "Title",
    about: "About" 
}