import React from "react";
import { Link } from "react-router-dom";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const Navbar2 = () => {
	return (
		<div>
			<hr />
			<nav className="navbar  navbar-light bg-white  d-flex justify-content-center">
				<div className="">
					<Link to="/Stamps">
						<button className="navbar-login btn text-secondary">Stamps</button>
					</Link>
					<Link to="/TravelDoc">
						<button className="navbar-signup btn text-secondary ml-1">Travel Docs</button>
					</Link>
					<Link to="/SignUp">
						<button className="navbar-signup btn text-secondary ml-1">Map</button>
					</Link>
					<Link to="/TripPlanner">
						<button className="navbar-signup btn text-secondary ml-1">Trip PLanner</button>
					</Link>
					<Link to="/">
						<button className="navbar-signup btn text-danger ml-1">Sign Out</button>
					</Link>
				</div>
			</nav>
			<hr />
		</div>
	);
};
