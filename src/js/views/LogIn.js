import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const LogIn = () => {
	return (
		<div>
			<Navbar />
			<div className="container main rounded shadow p-3">
				<div className="row">
					<div className="col-md-4 col-md-offset-3  text-center title">
						<h1>Want to Connect?</h1>
						<div className="bar" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-md-offset-3 form">
						<h2>Login</h2>
						<input type="text" name="username" placeholder="username" />
						<br />
						<input type="password" name="password" placeholder="password" />
						<a className="btn btn-default login" href="#0">
							Login
						</a>
						<span className="signup-cont">
							<h4 className="signup-text">
								Dont have an account? We can fix that!
								<Link to="/SignUp">
									<span className="btn btn-default signup" href="#0">
										Signup
									</span>
								</Link>
							</h4>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
