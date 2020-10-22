import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Anida Mujezin</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#about" data-nav-section="about">About me</a></li>
                  <li><a href="projects" data-nav-section="projects">Recent projects</a></li>

                  

                </ul>
              </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/anida.mujezin/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/_mrs.littlee_/?hl=hr" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/anida-mujezin-a6589818a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/anida21" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <center><span className="email"><i className="icon-mail"></i>anida.mujezin@outlook.com</span></center>
            <center><span className="email"><i className="icon-phone3"></i>062/553-316</span></center>


           
          </aside>
        </div>
      </div>
    )
  }
}
