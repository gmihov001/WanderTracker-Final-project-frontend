import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import { SimpleMap } from "../component/SimpleMap";
import StampPic from "../../img/stamp.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/addbutton.png";
import countries from "../constants/countries";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const Map = () => (
	<div className="wrapper ">
		<Navbar2 />
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">MAP</h1>
				</div>
			</div>

			<SimpleMap />
		</div>
		<div className="row my-4 d-flex justify-content-center">
			<div className="col-md-4 text-center">
				<select id="country" name="country" className="form-control">
					<option value="Select Country">Select a Country</option>
					{countries.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
		</div>
	</div>
);
