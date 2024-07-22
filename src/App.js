import logo from './me.png';
import './App.css';

import AllProjects from './AllProjects';
import Works from "./works";
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from "./navBar";

function App() {
  return (
    <div class="App">
      <div class="page">
      <div class="page-content">
      
      <div class="content-wrapper">
      <div class="personal-info">
        <img src={logo} alt="Profile Picture" />
        <h2>Teric Simons</h2>
        <a href="https://github.com/Teric-Simons">Github</a>
        <p>Kingston, Jamaica</p>
        <p>Hire Status: <span class="green-text">Available</span></p>
        <a href="mailto:tericsimons12@gmail.com">Contact Me</a>
        <div className="homepage-works">
								<Works />
							</div>
      </div>
  
      <div class="workinfo">
      <h1>Full Stack Developer</h1>
      <p>I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.</p>
      <div class= "outer-proj" >
   
        <div class = "outer-head">
        <FontAwesomeIcon icon={faFolderOpen} />
        <h3 class="proj-title">Projects</h3>

        </div>
      <AllProjects />
      </div>
     
      </div>
      
    </div>
    
					
		
      </div>
      </div>
  </div>
  );
}

export default App;
