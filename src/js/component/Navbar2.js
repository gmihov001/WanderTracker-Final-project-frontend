import React from "react";
import { Link } from "react-router-dom";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const Navbar2 = () => {
	return (
		<nav className="navbar  navbar-light bg-white mb-3">
			<Link to="/">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<div className="ml-auto">
				<Link to="/Stamps">
					<button className="navbar-login btn text-secondary">Stamps</button>
				</Link>
				<Link to="/SignUp">
					<button className="navbar-signup btn text-secondary ml-1">Travel Docs</button>
				</Link>
				<Link to="/SignUp">
					<button className="navbar-signup btn text-secondary ml-1">Map</button>
				</Link>
				<Link to="/TripPlanner">
					<button className="navbar-signup btn text-secondary ml-1">Trip PLanner</button>
				</Link>
			</div>
		</nav>
	);
};
