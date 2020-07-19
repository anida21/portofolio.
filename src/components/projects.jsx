import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Recent Projects</span>
								
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/todo.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Project 1</a></h3>
											<span>To Do Developer List</span>
										
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/earth1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Project 2</a></h3>
											<span>Earthquakes web application</span>
											<p className="icon">
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/earth22.jpg'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Project 3</a></h3>
											<span>Earthquakes mobile application</span>
										
										</div>
									</div>
								</div>
							</div>
							
						</div>
						
					</div>
				</section>
      </div>
    )
  }
}
