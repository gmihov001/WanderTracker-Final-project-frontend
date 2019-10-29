import React from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {
return (
		<div className="container main ">
			<div className="row">
				<div className="col-md-8 col-md-offset-3 align-center text-center title">
					<h1>Want to Connect?</h1>
					<div className="bar" />
				</div>
			</div>
			<div className="row">
				<div className="col-md-8 col-md-offset-3 form">
					<h2>Login</h2>
					<input type="text" name="username" placeholder="username" />
					<br />
					<input type="password" name="password" placeholder="password" />
					<a className="btn btn-default login" href="#0">
						login
					</a>
					<span className="signup-cont">
						<h4 className="signup-text">
							Dont have an account? We can fix that!
							<a className="btn btn-default signup" href="#0">
								Signup
							</a>
						</h4>
					</span>
				</div>
			</div>
		</div>
	);
};
