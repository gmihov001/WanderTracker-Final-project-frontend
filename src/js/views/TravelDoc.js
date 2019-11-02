import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import passport from "../../img/passport.jpg";
import BoardingPass from "../../img/BoardingPass.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const TravelDoc = () => (
	<div className="wrapper">
		<div className="container-fluid d-flex justify-content-between">
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<Link to="/">
				<button className="navbar-signup btn text-danger ">Sign Out</button>
			</Link>
		</div>
		<div className="container">
			<Navbar2 />
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Documents</h1>
				</div>
			</div>
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<p className="text-center py-2 px-3">
						<Link to="/AddTravelDoc">
							<img
								src="https://img.icons8.com/cotton/64/000000/plus--v3.png"
								className="createTrip m-2"
								title="Save New Document"
							/>
						</Link>
					</p>
				</div>
			</div>

			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex ">
					<img className=" navbar-brand mb-0 h1" src={passport} />
				</div>
				<div>
					<Link to="/TripDetails">
						<button className="smallButton bg-white px-2 mx-2">Delete</button>
					</Link>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex">
					<img className="travel-doc navbar-brand mb-0 h1 " src={BoardingPass} />
				</div>
				<div>
					<button className="smallButton bg-white px-2 mx-2">Delete</button>
				</div>
			</div>
		</div>
	</div>
);
