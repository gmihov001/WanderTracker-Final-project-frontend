import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import UserIcon from "../../img/user-03.png";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const EmergContacts = () => (
	<div className="wrapper">
		<Navbar2 />
		<div className="container">
			<div className="row my-5 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Emergency Contacts</h1>
				</div>
			</div>
			<div className="row my-5 d-flex justify-content-center">
				<div className="col d-flex justify-content-center mb-5">
					<input type="text" className="textfield col-md-6" placeholder="Add Contact" />
					<button className="addButton bg-white px-2 mx-2 col-md-1">Add</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col-md-4">
					<h4 className="pageEntry">Contact 1</h4>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col-md-4">
					<h4 className="pageEntry">Contact 2</h4>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col-md-4">
					<h4 className="pageEntry">Contact 3</h4>
				</div>
			</div>
			<div className="row my-5 d-flex justify-content-center">
				<div className="col-md-4 justify-content-center">
					<Link to="/HomePage">
						<h2 className="xlButton glass text-center py-2 px-3 m-auto">Save</h2>
					</Link>
				</div>
			</div>
		</div>
	</div>
);
