import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">WanderTracker</span>
			</Link>
			<div className="ml-auto">
				<button className="btn text-light">Log In</button>
				<button className="btn text-light ml-1">Sign Up</button>
			</div>
		</nav>
	);
};
