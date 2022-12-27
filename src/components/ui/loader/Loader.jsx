import React from 'react';
import "./loader.css"

const Loader = () => {
    return (
        <div className="loader_wrapper">
        <div className="ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
    );
}

export default Loader;
