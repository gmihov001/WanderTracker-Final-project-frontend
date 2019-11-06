import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import { MyContext } from "../store/appContext";

export const TripPlanner2 = props => (
	<div className="wrapper">
		<div className="container-fluid d-flex bg-white justify-content-between">
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={UserIcon} />
			</Link>
		</div>
		<div className="container">
			<Navbar2 />
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Trip Planner 2</h1>
				</div>
			</div>
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<p className="text-center py-2 px-3">
						<Link to="/AddTrip">
							<img
								src="https://img.icons8.com/cotton/64/000000/plus--v3.png"
								className="createTrip m-2"
								title="Create A New Trip"
							/>
						</Link>
					</p>
				</div>
			</div>
			<MyContext.Consumer>
				{context => (
					<React.Fragment>
						{Object.keys(context.store.trip).map((item, index) => (
							<div
								key={index}
								className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
								<div className="col d-flex justify-content-between">
									<h4 className="pageEntry">
										Trip {context.store.trip[index].name} {context.store.trip[index].year}
									</h4>
								</div>
								<div>
									<Link to={`/TripDetails2/${index}`}>
										<button className="smallButton bg-white px-2 mx-2">View/Edit</button>
									</Link>
									<button className="smallButton bg-white px-2 mx-2">Delete</button>
								</div>
							</div>
						))}
					</React.Fragment>
				)}
			</MyContext.Consumer>
		</div>
	</div>
);
