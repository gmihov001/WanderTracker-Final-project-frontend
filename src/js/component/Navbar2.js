import React from "react";
import { Link } from "react-router-dom";
import wtLogo from "../../img/wanderTrackerLogo.png";
import CalIcon from "../../img/Calendar.png";
import DocIcon from "../../img/Documents.png";
import StampsIcon from "../../img/Stamps.png";
import MapIcon from "../../img/MapLocation.png";

export const Navbar2 = () => {
	return (
		<div className="wrapper">
			<nav className="navbar  navbar-light d-flex justify-content-center">
				<div className="container text-center">
					<Link to="/Stamps">
						<img className="icons-navbar navbar-brand mb-0 h1" title="Go Stamps" src={StampsIcon} />
						<p>Stamps</p>
					</Link>
					<Link to="/TravelDoc">
						<img
							className="icons-navbar navbar-brand mb-0 h1"
							title="Go To Travel Documets"
							src={DocIcon}
						/>
						<p>Travel Documents</p>
					</Link>
					<Link to="/Map">
						<img className="icons-navbar navbar-brand mb-0 h1" title="Go To Maps" src={MapIcon} />
						<p>Map</p>
					</Link>
					<Link to="/TripPlanner">
						<img
							className="icons-navbar navbar-brand mb-0 h1 "
							title="Go To Travel Planner"
							src={CalIcon}
						/>
						<p>Trip Planner</p>
					</Link>
				</div>
			</nav>
		</div>
	);
};
