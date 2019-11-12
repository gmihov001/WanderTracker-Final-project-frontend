import React from "react";
import { Link } from "react-router-dom";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const Navbar = () => {
	return (
		<div className="wrapper">
			<div className="wrapper">
				<nav className="navbar navbar-light  bg-white mb-3">
					<Link to="/">
						<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
					</Link>
					<div className="ml-auto">
						<Link to="/LogIn">
							<button className="navbar-login btn text-secondary">LOGIN</button>
						</Link>
						<Link to="/SignUp">
							<button className="navbar-signup btn text-secondary ml-1">SIGN UP</button>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
};
