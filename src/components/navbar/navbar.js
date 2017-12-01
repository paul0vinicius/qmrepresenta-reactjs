import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render(){
    return(
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Deputados</li>
            <li>Cálculo</li>
            <li>QMR na mídia</li>
            <li>House of Cunha</li>
            <li>Sobre</li>
            <li>Facebook</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
