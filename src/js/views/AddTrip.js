import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import UserIcon from "../../img/user-03.png";
import wtLogo from "../../img/wanderTrackerLogo.png";

export class AddTrip extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			month: "",
			year: "",
			id: 0
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		// check it out: we get the evt.target.name (which will be either "email" or "password")
		// and use it to target the key on our `state` object with the same name, using bracket syntax
		this.setState({ [evt.target.name]: evt.target.value }, () => {
			console.log(evt, this.state);
		});
	}

	/*updateName(input) {
		this.setState({ name: input, newItem: "" });
		console.log(this.state.name);
	}*/

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<div className="container bg-white shadow-lg py-4 mt-5">
					<form>
						<div className="row py-4 my-4 d-flex justify-content-center">
							<div className="col-md-4 d-block">
								<h1 className="pageTitle text-center py-2 px-3">Add New Trip</h1>
								<h3 className="text-secondary text-center rounded shadow">
									{this.state.name} {this.state.month} {this.state.year}
								</h3>
							</div>
						</div>
						<div className="row mb-5 mt-3 d-block">
							<div className="col d-flex justify-content-center mb-5">
								<input
									type="text"
									className="textfield col-md-6"
									//value={this.state.trip.name}
									name="name"
									onChange={this.handleChange}
									placeholder="Destination..."
								/>
							</div>

							<div className="col d-flex justify-content-center mb-5">
								<input
									type="text"
									className="textfield col-md-6"
									//value={this.state.trip.name}
									name="month"
									onChange={this.handleChange}
									placeholder="Month of Travel..."
								/>
							</div>

							<div className="col d-flex justify-content-center mb-5">
								<input
									type="text"
									className="textfield col-md-6"
									//value={this.state.trip.name}
									name="year"
									onChange={this.handleChange}
									placeholder="Year of Travel"
								/>
							</div>
						</div>
					</form>
				</div>

				<div className="row my-5 d-flex justify-content-center">
					<div className="col-md-4 text-center">
						<h1 className="xlButton text-center py-2 px-3">Save</h1>
					</div>
				</div>
			</div>
		);
	}
}
