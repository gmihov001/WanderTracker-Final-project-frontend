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
			<nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-center ">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse  " id="navbarSupportedContent">
					<div className="container navbar-nav mr-auto d-flex justify-content-between text-center">
						<Link to="/Stamps">
							<div>
								<img className="icons-navbar navbar-brand mb-0 h1" title="Go Stamps" src={StampsIcon} />

								<p>Stamps</p>
							</div>
						</Link>
						<Link to="/TravelDoc">
							<div>
								<img
									className="icons-navbar navbar-brand mb-0 h1"
									title="Go To Travel Documets"
									src={DocIcon}
								/>
								<p>Travel Documents</p>
							</div>
						</Link>
						<Link to="/Map">
							<div>
								<img className="icons-navbar navbar-brand mb-0 h1" title="Go To Maps" src={MapIcon} />
								<p>Map</p>
							</div>
						</Link>
						<Link to="/TripPlanner">
							<div>
								<img
									className="icons-navbar navbar-brand mb-0 h1 "
									title="Go To Travel Planner"
									src={CalIcon}
								/>
								<p>Trip Planner</p>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};
