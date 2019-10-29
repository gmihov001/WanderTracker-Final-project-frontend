import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<div className="container main ">
			<div className="text-cont row">
				<div className="col-md-4 col-md-offset-3 align-center text-center title">
					<h1>Want to Connect?</h1>
					<div className="bar" />
				</div>
			</div>
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
	);
};
