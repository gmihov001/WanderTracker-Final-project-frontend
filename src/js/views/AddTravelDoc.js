import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import CamIcon from "../../img/Image.png";
import wtLogo from "../../img/wanderTrackerLogo.png";
import passport from "../../img/passport.jpg";
import UserIcon from "../../img/user-03.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const AddTravelDoc = () => (
	<div className="wrapper ">
		<Navbar2 />
		<div className="container">
			<div className="row my-5 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Get Travel Doc</h1>
				</div>
			</div>
			<div className="row my-5 d-flex justify-content-center">
				<div className="col d-flex justify-content-center mb-5">
					<Link to="/TravelDoc">
						<img
							className="take-pic navbar-brand mb-0 h1"
							title="Take a picture of your stamp"
							src={CamIcon}
						/>
					</Link>
				</div>
			</div>
			<div className="row py-4 my-4 bg-white shadow">
				<div className="col d-flex justify-content-center">
					<img className=" navbar-brand mb-0 h1 img-fluid" src={passport} />
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
