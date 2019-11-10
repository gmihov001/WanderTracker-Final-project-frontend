import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const SignUp = () => {
	return (
		<div>
			<Link to="/">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<div className="container main rounded shadow p-3">
				<div className="text-cont row"></div>
				<div className="input-cont row">
					<div className="input-cont2 col-md-4 col-md-offset-3 form">
						<h2>Sign Up</h2>
						<input type="text" name="Full Name" placeholder="Full Name" />
						<br />
						<input type="text" name="Email" placeholder="Email" />
						<br />
						<input type="password" name="password" placeholder="password" />
						<br />
						<input type="password" name="Confirm password" placeholder="Confirm password" />
						<a className="btn btn-default login" href="#0">
							Submit
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
