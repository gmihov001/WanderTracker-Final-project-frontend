import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";

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
				<div className="col text-left">
					<p className="text py-2 px-3">
						Passport Number: <strong>234987456</strong>
					</p>
					<p className="text py-2 px-3">
						Passport expiration date: <strong>20 Oct 2030</strong>
					</p>
					<Link to="/EmergContacts">
						<p className="text py-2 px-3">
							<strong className="text">Emergency Contacts</strong>
						</p>
					</Link>
				</div>
			</div>
			<Link to="/">
				<button type="button" className="logout btn ">
					Log Out
				</button>
			</Link>
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
