import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const AddTrip = () => (
	<div className="container">
		<div className="row my-4 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<h1 className="pageTitle text-center py-2 px-3">Trip Planner</h1>
			</div>
		</div>
		<div className="row my-4 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<p className="text-center py-2 px-3">&nbsp;</p>
			</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col d-flex justify-content-between">
				<h4 className="pageEntry">Contacts</h4>
			</div>
			<div>
				<button className="smallButton bg-white px-2 mx-2">Edit</button>
				<button className="smallButton bg-white px-2 mx-2">Delete</button>
			</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col d-flex justify-content-between">
				<h4 className="pageEntry">Places</h4>
			</div>
			<div>
				<button className="smallButton bg-white px-2 mx-2">Edit</button>
				<button className="smallButton bg-white px-2 mx-2">Delete</button>
			</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col d-flex justify-content-between">
				<h4 className="pageEntry">Itinerary</h4>
			</div>
			<div>
				<button className="smallButton bg-white px-2 mx-2">Edit</button>
				<button className="smallButton bg-white px-2 mx-2">Delete</button>
			</div>
		</div>
	</div>
);
