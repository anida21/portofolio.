import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Education</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        
                      </div>
                      <div className="timeline-label">
                        <h2>Faculty of traffic and communications, Sarajevo<span> 2020-2022</span></h2>
                        <p>Master's degree-Computer and information technologies </p> 
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        
                      </div>
                      <div className="timeline-label">
                        <h2>Faculty of traffic and communications, Sarajevo<span> 2017-2020</span></h2>
                        <p> Bachelor’s degree-Computer and information technologies</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        
                      </div>
                      <div className="timeline-label">
                        <h2>High school of electrical engineering, Sarajevo<span> 2012-2016</span></h2>
                        <p>Computer science and informatics </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
