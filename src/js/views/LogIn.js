import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { HomePage } from "./HomePage";
import { withRouter } from "react-router-dom";
import wtLogo from "../../img/wanderTrackerLogo.png";
import { Consumer } from "../store/appContext.js";

export class LogIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			loggedIn: false
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log("The form was submitted");
		console.log(this.state);
	};

	handleChange = e => {
		let target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		let name = target.name;

		this.setState({ [name]: value });
	};

	loginHandle = () => {
		this.setState({ loggedIn: true });
	};

	render() {
		if (this.state.loggedIn === true) {
			return <Redirect to="/HomePage" />;
		}
		//console.log(this.state.loggedIn);

		return (
			<div>
				<Link to="/">
					<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
				</Link>
				<div className="container main rounded shadow p-3">
					<form className="form-fields row" onSubmit={this.handleSubmit}>
						<div className="col-md-4 col-md-offset-3 form">
							<h2>Login</h2>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
							<br />
							<input
								type="password"
								name="password"
								placeholder="Enter your password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<button
								type="button"
								className="btn btn-default login"
								href="#0 "
								onClick={this.loginHandle}>
								Login
							</button>
							<span className="signup-cont">
								<h4 className="signup-text">
									Dont have an account? We can fix that!
									<Link to="/SignUp">
										<button className="btn btn-default signup" href="#0">
											Signup
										</button>
									</Link>
								</h4>
							</span>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
