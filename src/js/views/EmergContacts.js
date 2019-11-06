import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import UserIcon from "../../img/user-03.png";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const EmergContacts = () => (
	<div className="wrapper">
		<div className="container-fluid d-flex justify-content-between">
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={UserIcon} />
			</Link>
		</div>
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
				<div className="col-md-4 text-center">
					<h1 className="xlButton text-center py-2 px-3">Save</h1>
				</div>
			</div>
		</div>
	</div>
);
