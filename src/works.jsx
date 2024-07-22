import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';



import "./works.css";

const Works = () => {
	return (
		<div className="works">
		 
		  <div className="workHeading">
		  <FontAwesomeIcon icon={faBriefcase} />
		  <h3>Work</h3>
		  </div>
		 
					<div className="works-body">
						<div className="work">
						
							<div className="work-title">Yick Solutions</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">June 2024 - August 2024</div>
						</div>

						<div className="work">
					
							<div className="work-title">Diversiboard</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">Feb. 2021 - Nov. 2023</div>
						</div>
					</div>
				
			
		</div>
	);
};

export default Works;
