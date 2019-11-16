import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";

export class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			name: ""
		};
	}

	alertSubmit = e => {
		return alert("Form Submited");
	};
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

	render() {
		return (
			<div className="wrapper">
				<Link to="/">
					<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
				</Link>
				<form className="container main rounded shadow-lg p-3 my-3" onSubmit={this.handleSubmit}>
					<div className="text-cont row"></div>
					<div className="input-cont row">
						<div className="input-cont2 col-md-4 col-md-offset-3 form">
							<h2>Sign Up</h2>
							<input
								type="text"
								name="name"
								placeholder="Enter your full name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
							<br />
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
							<br />

							<button
								onClick={() => this.alertSubmit()}
								className="btn btn-default shadow login"
								href="#0">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
