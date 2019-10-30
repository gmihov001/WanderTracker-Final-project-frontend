import React from "react";
import { Link } from "react-router-dom";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const AddTrip = () => (
	<div className="container">
		<div className="row my-5 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<h1 className="pageTitle text-center py-2 px-3 shadow-lg">New Trip</h1>
			</div>
		</div>
		<div className="row my-5 d-flex justify-content-center">
			<div className="col d-flex justify-content-center mb-5">
				<input type="text" className="textfield col-md-6 rounded" placeholder="Trip Name" />
				<button className="smallButton bg-white px-2 mx-2 col-md-1">Add</button>
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
