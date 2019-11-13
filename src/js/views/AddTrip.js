import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import UserIcon from "../../img/user-03.png";
import wtLogo from "../../img/wanderTrackerLogo.png";
import { MyContext } from "../store/appContext.js";

export class AddTrip extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			trip: {
				name: "",
				month: "",
				year: "",
				id: "",
				contacts: [],
				places: [],
				itinerary: []
			}
		};
	}

	handleName = evt => {
		this.setState({ trip: { ...this.state.trip, name: evt.target.value } });
	};

	handleMonth = evt => {
		this.setState({ trip: { ...this.state.trip, month: evt.target.value } });
	};

	handleYear = evt => {
		this.setState({ trip: { ...this.state.trip, year: evt.target.value } });
	};

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<div className="container addWindow bg-white shadow-lg py-4 mt-5">
					<form>
						<div className="row py-4 my-4 d-flex justify-content-center">
							<div className="col-md-4 d-block">
								<h1 className="pageTitle text-center py-2 px-3">Add New Trip</h1>
								<h3 className="text-secondary text-center rounded shadow">
									{this.state.trip.name} {this.state.trip.month} {this.state.trip.year}
								</h3>
							</div>
						</div>
						<div className="row mb-5 mt-3 d-block">
							<div className="col d-flex justify-content-center mb-5">
								<input
									type="text"
									className="textfield col-md-6"
									value={this.state.trip.name}
									name="name"
									onChange={this.handleName}
									placeholder="Destination..."
								/>
							</div>

							<div className="col d-flex justify-content-center mb-5">
								<input
									type="text"
									className="textfield col-md-6"
									value={this.state.trip.month}
									name="month"
									onChange={this.handleMonth}
									placeholder="Month of Travel..."
								/>
							</div>

							<div className="col d-flex justify-content-center mb-5">
								<input
									type="text"
									className="textfield col-md-6"
									value={this.state.trip.year}
									name="year"
									onChange={this.handleYear}
									placeholder="Year of Travel"
								/>
							</div>
						</div>
					</form>
				</div>
				<MyContext.Consumer>
					{({ actions }) => (
						<div className="row my-5 d-flex justify-content-center">
							<div className="col-md-4 justify-content-center">
								<h2
									className="xlButton glass text-center py-2 px-3 m-auto"
									onClick={() => {
										actions.addTrip(this.state.trip);
									}}>
									Save
								</h2>
							</div>
						</div>
					)}
				</MyContext.Consumer>
			</div>
		);
	}
}
