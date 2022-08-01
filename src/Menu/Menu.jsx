import "./Menu.css";
import "../Home/Home.css";
import React, { useState } from "react";
import HTML from "../Html"
import CSS from "../CSS"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function Template() {
  const [show, setShow] = React.useState(true)

  const fnbtnclick = () => {
    setShow(!show)
  }

  return (
    <div >
      <div className="Templete">
        {
          show ?
            <ul className='list'>
              <li className='ui'>UI</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>BOOTSTRAP</li>
              <li>JAVA SCRIPT</li>
              <li>JQUERY</li>
              <li>NODE JS</li>
              <li>ANGULAR</li>
              <li>REACT JS</li>
              <li>PYTHON</li>
              <li>CORE JAVA</li>
              <li>GIT</li>
              <li>DEPLOYMENT</li>
              <li className='feedback'>Feed back</li>
              <li>Feedback</li>
            </ul> : null
        }
        <button onClick={fnbtnclick}>Menu</button>

        <div className={show ? 'home' : ''}>
          <div className='code'><a href='#/HTML'>HTML</a> </div>
          <div className='code'><a href='#/CSS'>CSS</a></div>
          <div className='code'>BOOTSTRAP</div>
          <div className='code'>JAVA SCRIPT</div>
          <div className='code'>JQUERY</div>
          <div className='code'>NODE JS</div>
          <div className='code'>ANGULAR</div>
          <div className='code'>REACT JS</div>
          <div className='code'>PYTHON</div>
          <div className='code'>CORE JAVA</div>
          <div className='code'>GIT</div>
          <div className='code'>DEPLOYMENT</div>
          <HashRouter>
            <Routes>
              <Route path='/HTML' element={<HTML />} />
            </Routes>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}


export default Template;