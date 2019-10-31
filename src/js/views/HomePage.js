import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const HomePage = () => (
	<div className="wrapper">
		<Navbar2 />
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-3 px-0">
					<img
						src="https://cdn2.vectorstock.com/i/1000x1000/72/96/emotion-avatar-man-happy-successful-face-vector-13577296.jpg"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col text-center">
					<h3 className="text-center py-2 px-3">Personal Information | Emergency Contacts</h3>
				</div>
			</div>
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<p className="text-center py-2 px-3">&nbsp;</p>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex justify-content-between">
					<h4 className="pageEntry">Travel Tip 1</h4>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
				<div className="col d-flex justify-content-between">
					<h4 className="pageEntry">Travel Tip 2</h4>
				</div>
			</div>
		</div>
	</div>
);
