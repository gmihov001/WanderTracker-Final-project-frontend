import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const HomePage = () => (
	<div className="wrapper">
		<div className="container-fluid">
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
		</div>
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<div className="col text-center">
					<h1 className="text-center py-2 px-3">[PHOTO] | Personal Information | Emergency Contacts</h1>
				</div>
			</div>
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<p className="text-center py-2 px-3">
						<Link to="/AddTrip">
							<img
								src="https://img.icons8.com/dusk/96/000000/calendar-plus.png"
								className="createTrip m-2"
								title="Create A New Trip"
							/>
						</Link>
					</p>
				</div>
			</div>
			<Navbar2 />
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex justify-content-between">
					<h4 className="pageEntry">Trip Greece 2019</h4>
				</div>
				<div>
					<Link to="/TripDetails">
						<button className="smallButton bg-white px-2 mx-2">Edit</button>
					</Link>
					<button className="smallButton bg-white px-2 mx-2">Delete</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex justify-content-between">
					<h4 className="pageEntry">Trip Spain 2020</h4>
				</div>
				<div>
					<button className="smallButton bg-white px-2 mx-2">Edit</button>
					<button className="smallButton bg-white px-2 mx-2">Delete</button>
				</div>
			</div>
		</div>
	</div>
);
