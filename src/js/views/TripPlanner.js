import React from "react";
import "../../styles/home.scss";
<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const TripPlanner = () => (
	<div className="container">
		<div className="row my-4 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<h1 className="pageTitle text-center py-2 px-3">Trip Planner</h1>
			</div>
		</div>
		<div className="row my-4 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<p className="text-center py-2 px-3">
					<img
						src="https://img.icons8.com/dusk/96/000000/calendar-plus.png"
						className="createTrip m-2"
						title="Create A New Trip"
					/>
				</p>
			</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col d-flex justify-content-between">
				<h4 className="pageEntry">Trip Greece 2019</h4>
			</div>
			<div>
				<button className="smallButton bg-white px-2 mx-2">Edit</button>
				<button className="smallButton bg-white px-2 mx-2">Delete</button>
			</div>
		</div>
		<div className="row py-4 my-4 d-flex justify-content-between shadow">
			<div className="col d-flex justify-content-between">
				<h4 className="pageEntry">Trip Spain 2020</h4>
			</div>
			<div>
				<button className="smallButton bg-white px-2 mx-2">Edit</button>
				<button className="smallButton bg-white px-2 mx-2">Delete</button>
			</div>
		</div>
	</div>
);
