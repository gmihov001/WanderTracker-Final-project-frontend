import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/addbutton.png";
import { Context } from "../store/appContext.js";

export const TripPlanner = props => (
	<div className="wrapper">
		<Navbar2 />
		<Context.Consumer>
			{({ store }) => (
				<div className="container">
					<div className="row my-4 d-flex justify-content-center">
						<div className="col-md-4 text-center">
							<h1 className="pageTitle text-center py-2 px-3">Trip Planner</h1>
						</div>
					</div>

					<div className="row mt-4 mb-1 pl-0 d-flex flex-row">
						<div className="col-md-4 text-left pl-0">
							<h1 className="underTitle text-left pl-0 pt-2">Trips</h1>
						</div>
					</div>

					{store.trips.map((item, index) => (
						<div key={index} className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
							<div className="col d-flex justify-content-between">
								<h4 className="pageEntry">
									{item.name} {item.year}
								</h4>
							</div>
							<div className="pr-3">
								<Link to={`/TripDetails/${item.id}`}>
									<button className="smallView bg-white px-2 mx-2">View/Edit</button>
								</Link>
								<button className="smallDelete bg-white px-2 mx-2">Delete</button>
							</div>
						</div>
					))}
					<div className="row my-4 d-flex justify-content-center">
						<div className="col-md-4 text-center">
							<p className="text-center py-2 px-3">
								<Link to="/AddTrip">
									<img src={AddIcon} className="createTrip m-2" title="Create A New Trip" />
								</Link>
							</p>
						</div>
					</div>
				</div>
			)}
		</Context.Consumer>
	</div>
);
