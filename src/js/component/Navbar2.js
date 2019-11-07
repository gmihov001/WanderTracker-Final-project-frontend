import React from "react";
import { Link } from "react-router-dom";
import wtLogo from "../../img/wanderTrackerLogo.png";
import CalIcon from "../../img/Calendar.png";
import DocIcon from "../../img/Documents.png";
import StampsIcon from "../../img/Stamps.png";
import MapIcon from "../../img/MapLocation.png";
import UserIcon from "../../img/user-03.png";
import PropTypes from "prop-types"; //on top of the page

export const Navbar2 = () => {
	return (
		<div className="wrapper bg-white">
			<nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center ">
				<Link to="/HomePage">
					<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
				</Link>
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

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="container navbar-nav mr-5 pr-5 d-flex justify-content-end text-center">
						<Link to="/Stamps">
							<div className="navicon-cont p-1 pl-5 flex-fill bd-highlight">
								<img className="icons-navbar navbar-brand mb-0 h1" title="Go Stamps" src={StampsIcon} />
							</div>
						</Link>
						<Link to="/TravelDoc">
							<div className="p-1 pl-5 flex-fill bd-highlight ">
								<img
									className="icons-navbar navbar-brand mb-0 h1"
									title="Go To Travel Documets"
									src={DocIcon}
								/>
							</div>
						</Link>
						<Link to="/Map">
							<div className="p-1 pl-5 flex-fill bd-highlight ">
								<img className="icons-navbar navbar-brand mb-0 h1" title="Go To Maps" src={MapIcon} />
							</div>
						</Link>
						<Link to="/TripPlanner">
							<div className="p-1 pl-5 flex-fill bd-highlight ">
								<img
									className="icons-navbar navbar-brand mb-0 h1 "
									title="Go To Travel Planner"
									src={CalIcon}
								/>
							</div>
						</Link>
						<Link to="/HomePage">
							<div className="p-2 pl-5 flex-fill bd-highlight ">
								<img className="icons-navbar navbar-brand mb-0 h1" src={UserIcon} />
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};
