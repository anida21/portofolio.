import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <center><div className="desc">
                          <h1>Hi! <br />I am Anida Mujezin</h1>
                        </div></center>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <center><div className="desc">
                          <h1>I love <br /> web development!</h1>
                          <p>Projects on github:</p>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/anida21" target="_blank" rel="noopener noreferrer">View</a></p>
                        </div></center>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
