import React from "react";
import { Link } from "react-router-dom";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="logo navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<div className="ml-auto">
				<button className="btn text-secondary">Log In</button>
				<button className="btn text-secondary ml-1">Sign Up</button>
			</div>
		</nav>
	);
};
