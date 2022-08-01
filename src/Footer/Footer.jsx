import "./Footer.css";
import React from "react";

function template() {
  return (
    <div className="footer">
      <span className="copy"> &copy;rights belongs to</span>
      <a className='vision' href=' http://www.visiontechnos.com/#/'> http://www.visiontechnos.com</a>
      <span className="copy">@2019 </span>
      <span className="devby">
        <span className="copy">Developed by</span>
        <span className="dev"> Srinivasarao Chenchala</span>
      </span>
    </div>
  );
};

export default template;
