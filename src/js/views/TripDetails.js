import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../store/appContext.js";
import { Navbar2 } from "../component/Navbar2";
import PropTypes from "prop-types";

export class TripDetails extends React.Component {
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

	render() {
		console.log(this.props);
		console.log(this.state);
		console.log(this.props.match.params.id);

		return (
			<div className="wrapper">
				<Navbar2 />
				<MyContext.Consumer>
					{context => {
						let thisTrip = context.store.trips[this.props.match.params.id];
						console.log(thisTrip);
						return (
							<div className="container pb-5 pt-3">
								<div className="row my-2 d-flex justify-content-center">
									<div className="col-md-4 text-center">
										<h1 className="pageTitle text-center px-3">
											{thisTrip.name} {thisTrip.year}
										</h1>
									</div>
								</div>

								<div className="row pb-3 pt-1 my-4 d-flex bg-white shadow">
									<form className="form-inline w-100">
										<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
											<div className="col-md-4 by-2">
												<h4 className="pageEntry">Contacts</h4>
											</div>
											<div className="col d-flex justify-content-end py-2">
												<input
													type="text"
													className="textfield col-md-4"
													name="contact"
													onChange={this.handleContactName}
													placeholder="Contact name..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													name="address"
													onChange={this.handleAddress}
													placeholder="Address..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													name="phone"
													onChange={this.handlePhoneNumber}
													placeholder="Phone number..."
												/>

												<button
													className="addButton bg-white px-2 mx-2"
													onClick={() => {
														actions.addContact(this.state.trip.contacts);
													}}>
													Add
												</button>
											</div>
										</div>
									</form>

									<div className="d-block col-md-12 justify-content-end">
										{thisTrip.contacts.map((item, index) => (
											<div key={index} className="row px-3 d-flex justify-content-end">
												<div className="col-md-8 justify-content-end">
													<span type="text" className="entry text-right px-3">
														{item.contact} , {item.address} , {item.phone}
													</span>
												</div>
												<div
													className="col-md-2 x d-flex justify-content-between"
													onClick={() => {
														actions.removeContact({ index });
													}}>
													<strong>x</strong>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="row pb-3 bt-1 my-4 d-flex bg-white shadow">
									<form className="form-inline w-100">
										<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
											<div className="col-md-4 by-2">
												<h4 className="pageEntry">Places of Interest</h4>
											</div>
											<div className="col d-flex justify-content-end py-2">
												<input
													type="text"
													className="textfield col-md-4"
													name="place"
													onChange={this.handlePlace}
													placeholder="Place..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													name="url"
													onChange={this.handleURL}
													placeholder="URL..."
												/>
												<button
													className="addButton bg-white px-2 mx-2"
													onClick={() => {
														actions.addPlace(this.state.trip.places);
													}}>
													Add
												</button>
											</div>
										</div>
									</form>

									<div className="d-block col-md-12 justify-content-end">
										{thisTrip.places.map((item, index) => (
											<div key={index} className="row px-3 d-flex justify-content-end">
												<div className="col-md-8 justify-content-end">
													<span type="text" className="entry text-right px-3">
														{item.place} , {item.url}
													</span>
												</div>
												<div className="col-md-2 d-flex justify-content-between list-inline">
													<div
														className="x"
														onClick={() => {
															actions.removePlace({ index });
														}}>
														<strong>x</strong>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="row pb-3 pt-1 my-4 d-flex bg-white shadow">
									<form className="form-inline w-100">
										<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
											<div className="col-md-4 by-2">
												<h4 className="pageEntry">Itinerary</h4>
											</div>
											<div className="col d-flex justify-content-end py-2">
												<input
													type="text"
													className="textfield col-md-4"
													name="date"
													onChange={this.handleDate}
													placeholder="Date..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													name="content"
													onChange={this.handleActivity}
													placeholder="Activity details..."
												/>
												<button
													className="addButton bg-white px-2 mx-2"
													onClick={() => {
														actions.addItinerary(this.state.trip.itinerary);
													}}>
													Add
												</button>
											</div>
										</div>
									</form>

									<div className="d-block col-md-12 justify-content-end">
										{thisTrip.itinerary.map((item, index) => (
											<div key={index} className="row px-3 d-flex justify-content-end">
												<div className="col-md-8 justify-content-end">
													<span type="text" className="entry text-right px-3">
														{item.date} , {item.content}
													</span>
												</div>
												<div className="col-md-2 d-flex justify-content-between list-inline">
													<div
														className="x"
														onClick={() => {
															actions.removeItinerary({ index });
														}}>
														<strong>x</strong>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						);
					}}
				</MyContext.Consumer>
			</div>
		);
	}
}

TripDetails.propTypes = {
	match: PropTypes.object
};
