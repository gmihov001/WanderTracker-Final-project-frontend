import React from "react";
import { Link } from "react-router-dom";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const TripDetails = () => (
	<div className="container">
		<div className="row my-5 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<h1 className="pageTitle text-center py-2 px-3 shadow-lg">Greece 2019</h1>
			</div>
		</div>
		<div className="row my-5 d-flex justify-content-center">
			<div className="col d-flex justify-content-center mb-5">&nbsp;</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col-md-4">
				<h4 className="pageEntry">Contacts</h4>
			</div>
			<div className="col-md-8 d-flex justify-content-end">
				<input type="text" className="textfield col-md-6" placeholder="New Contact" />
				<button className="addButton bg-white px-2 mx-2">Add</button>
			</div>
			<div className="row px-3 d-flex justify-content-between list-inline">
				<div className="col">
					<span type="text" className="entry px-3">
						Hotel Hilton, 656.7865.234, Paris
					</span>
				</div>
				<div className="col-md-1 d-flex justify-content-between list-inline">
					<button className="smallButton bg-white px-1 mx-1">Delete</button>
				</div>
			</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col-md-4">
				<h4 className="pageEntry">Places</h4>
			</div>
			<div className="col-md-8 d-flex justify-content-end">
				<input type="text" className="textfield col-md-6" placeholder="New Place of Interest" />
				<button className="addButton bg-white px-2 mx-2">Add</button>
			</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col-md-4">
				<h4 className="pageEntry">Itinerary</h4>
			</div>
			<div className="col-md-8 d-flex justify-content-end">
				<input type="text" className="textfield col-md-6" placeholder="New Activity" />
				<button className="addButton bg-white px-2 mx-2">Add</button>
			</div>
		</div>
	</div>
);
