import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
		<div>
		<section className="colorlib-work" data-section="projects">
		<div className="colorlib-narrow-content">
			<div className="row">
				<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Recent Projects (more on github)</span>
					
				</div>
			</div>
			<div className="row">
			<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
					<div className="project" style={{backgroundImage: 'url(images/clone.png'}}>
						<div className="desc">
							<div className="con">
								<h3><a href="work.html">Project 1</a></h3>
								<span>Instagram clone (CRUD app)</span>
								<p>Angular, NodeJs, Express, MongoDB</p>
								<p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1CuIscM1CL4fRIqV-IvXj02nGEK7d4n2V/view?usp=sharing" target="_blank" rel="noopener noreferrer">watch the video</a></p>

								

							
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
					<div className="project" style={{backgroundImage: 'url(images/earth1.jpg)'}}>
						<div className="desc">
							<div className="con">
								<h3><a href="work.html">Project 2</a></h3>
								<span>Earthquakes web and mobile application</span>
								<p>For web app: HTML/CSS, Javascript(ES6), Firebase</p>
								<p>For mobile app: Android studio(Java) </p>
								<p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1d1xTZKqhJ42vnk9ufJRw4Z_9gxGAbRGI/view?usp=sharing" target="_blank" rel="noopener noreferrer">watch the video(web app)</a></p>
								<p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/14ICmf-QfikRJcNua03tnoZvR60Ma1acB/view?usp=sharing" target="_blank" rel="noopener noreferrer">watch the video(mobile app)</a></p>


								<p className="icon">
									
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
					<div className="project" style={{backgroundImage: 'url(images/todo.jpg)'}}>
						<div className="desc">
							<div className="con">
								<h3><a href="work.html">Project 3</a></h3>
								<span>To Do Developer List</span>
								<p>HTML/CSS, Php, MySql</p>
								<p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1j2UY21RQSE3jNiW0OpY_4dmF6TPBDGas/view?usp=sharing" target="_blank" rel="noopener noreferrer">watch the video</a></p>
							
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
