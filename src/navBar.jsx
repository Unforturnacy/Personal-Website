
import { Route, Switch, Link } from 'react-router-dom';
import "./navBarr.css";

const NavBar = (props) => {
	const { active } = props;

	return (
	
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
					
				
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								
							</li>
							<a href='mailto:tericsimons12@gmail.com'>
								Contact
							</a>
						</ul>
					</div>
				</nav>
			</div>
	
	);
};

export default NavBar;
