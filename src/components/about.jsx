import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <p>I am currently enrolled at my bachelor studies at Faculty of traffic and communications in Sarajevo, department of Computer and information technology. Throughout my education I have gained a lot of theoretical and practical knowledge about software engineering.  </p>
                    <p>I have learnt and used a lot of programming techniques in C++, JavaScript, Java, Python. Python and Java courses was stricty based on Object Oriented Programming. During C++ course I have learnt about memory management, algorithms and data structures. I understand basic network protocols. Most of all I like to work with HTML, CSS, Javascript (react.js, node.js) and PHP. I wish to work on larger projects and I'd really like to enhance that knowledge, actually, to enrich my experience. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I know?</span>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience with web development using HTML, CSS, JavaScript, React.js, Php.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                
                <div className="desc">
                    <h3>Database</h3>
                    <p>Knowledge of working with My Sql database and Firebase.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                
                <div className="desc">
                     <h3>Mobile applications</h3>
                    <p>I have experience with mobile application development using Java in Android studio. </p>
                </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Certifications</span>
            </div>
            </div>
            <center>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                
                <div className="desc">
                     <h3>Microsoft</h3>
                    <p>MTA: Introduction to Programming Using JavaScript. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                
                <div className="desc">
                     <h3>Hackhaton</h3>
                    <p>"Just Code It", EESTEC LC </p>
                </div>
                </div>
            </div>
            </center>
            </div>
            
        </div>
        
        </section>
      </div>
    )
  }
}
