import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Timeline</span>
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
                        <h2>Internship at Mibo komunikacije <span> February-March(2020)</span></h2>
                        <p>In 2020 I was on a short internship program at Mibo komunikacije. I was learning things for a frontend developer.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        
                      </div>
                      <div className="timeline-label">
                        <h2>Faculty of transport and communications, Sarajevo<span> 2017-2020</span></h2>
                        <p> Bachelor’s degree of Computer and Information Technology.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        
                      </div>
                      <div className="timeline-label">
                        <h2>High school of electrical engineering, Sarajevo<span> 2012-2016</span></h2>
                        <p>I finished high school in Sarajevo, majoring in Computer science and informatics. </p> 
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
