import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../store/appContext.js";
import { Navbar2 } from "../component/Navbar2";
import PropTypes from "prop-types";

export class TripDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: {
				contacts: {
					contact: "",
					address: "",
					phone: ""
				},
				places: {
					place: "",
					url: ""
				},
				itinerary: {
					date: "",
					content: ""
				}
			},
			trip: {
				contacts: [],
				places: [],
				itinerary: []
			}
		};
	}

	handleChangeContacts = evt => {
		this.setState({
			userInput: {
				...this.state.userInput,
				contacts: { ...this.state.userInput.contacts, [evt.target.name]: evt.target.value }
			}
		});
	};

	handleChangePlaces = evt => {
		this.setState({
			userInput: {
				...this.state.userInput,
				places: { ...this.state.userInput.places, [evt.target.name]: evt.target.value }
			}
		});
	};

	handleChangeItinerary = evt => {
		this.setState({
			userInput: {
				...this.state.userInput,
				itinerary: { ...this.state.userInput.itinerary, [evt.target.name]: evt.target.value }
			}
		});
	};

	addToContacts = e => {
		e.preventDefault();
		const newContacts = this.state.trip.contacts.concat(this.state.userInput.contacts);
		this.setState({
			trip: { ...this.state.trip, contacts: newContacts },
			userInput: { ...this.state.userInput, contacts: { contact: "", address: "", phone: "" } }
		});
	};

	addToPlaces = e => {
		e.preventDefault();
		const newPlaces = this.state.trip.places.concat(this.state.userInput.places);
		this.setState({
			trip: { ...this.state.trip, places: newPlaces },
			userInput: { ...this.state.userInput, places: { place: "", url: "" } }
		});
	};

	addToItinerary = e => {
		e.preventDefault();
		const newItinerary = this.state.trip.itinerary.concat(this.state.userInput.itinerary);
		this.setState({
			trip: { ...this.state.trip, itinerary: newItinerary },
			userInput: { ...this.state.userInput, itinerary: { date: "", content: "" } }
		});
	};

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<MyContext.Consumer>
					{({ store, actions }) => {
						let thisTrip = store.trips[this.props.match.params.id];
						return (
							<div className="container pb-5 pt-3">
								<div className="row py-2 my-4 d-flex justify-content-center">
									<div className="col-md-4 text-center">
										<h1 className="pageTitle text-center px-1">
											{thisTrip.name} {thisTrip.year}
										</h1>
										<p>Trip ID: {thisTrip.id}</p>
									</div>
								</div>

								<div className="row pb-3 pt-2 my-4 d-flex bg-white shadow">
									<form className="form-inline w-100">
										<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
											<div className="col-md-4 by-2">
												<h4 className="pageEntry">Contacts</h4>
											</div>
											<div className="col d-flex justify-content-end py-2">
												<input
													type="text"
													className="textfield col-md-4"
													value={this.state.userInput.contacts.contact}
													name="contact"
													onChange={this.handleChangeContacts}
													placeholder="Contact name..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													value={this.state.userInput.contacts.address}
													name="address"
													onChange={this.handleChangeContacts}
													placeholder="Address..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													value={this.state.userInput.contacts.phone}
													name="phone"
													onChange={this.handleChangeContacts}
													placeholder="Phone number..."
												/>
												<button
													className="addButton bg-white px-2 mx-2"
													onClick={this.addToContacts}>
													Add
												</button>
											</div>
										</div>
									</form>
									<div className="d-block entry-block col-md-12 justify-content-end">
										{thisTrip.contacts.map((item, index) => (
											<div
												key={index}
												className="row entry-row px-3 d-flex justify-content-center">
												<div className="col-md-5 px-0 d-flex justify-content-left">
													<span type="text" className="entry px-1 ">
														{item.contact} , {item.address} , {item.phone}
													</span>
												</div>
												<div
													className="col-md-2 col-lg-1 x pt-1 w-100 d-flex justify-content-center text-center"
													onClick={() => {
														actions.removeContact(thisTrip.id, thisTrip.contacts);
													}}>
													<span className="deleteEntry d-flex justify-content-center">
														<i className="far fa-calendar-times"></i>
													</span>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="row pb-3 pt-2 my-4 d-flex bg-white shadow">
									<form className="form-inline w-100">
										<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
											<div className="col-md-4 by-2">
												<h4 className="pageEntry">Places of Interest</h4>
											</div>
											<div className="col d-flex justify-content-end py-2">
												<input
													type="text"
													className="textfield col-md-4"
													value={this.state.userInput.places.place}
													name="place"
													onChange={this.handleChangePlaces}
													placeholder="Place..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													name="url"
													placeholder="URL..."
													value={this.state.userInput.places.url}
													onChange={this.handleChangePlaces}
												/>
												<button
													className="addButton bg-white px-2 mx-2"
													onClick={this.addToPlaces}>
													Add
												</button>
											</div>
										</div>
									</form>

									<div className="d-block entry-block col-md-12 justify-content-end">
										{thisTrip.places.map((item, index) => (
											<div
												key={index}
												className="row entry-row px-3 d-flex justify-content-center">
												<div className="col-md-5 px-0 d-flex justify-content-left">
													<span type="text" className="entry px-1">
														{item.place} , {item.url}
													</span>
												</div>
												<div
													className="col-md-2 col-lg-1 x pt-1 w-100 d-flex justify-content-center text-center"
													onClick={() => {
														actions.removePlace({ index });
													}}>
													<span className="deleteEntry d-flex justify-content-center">
														<i className="far fa-calendar-times"></i>
													</span>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="row pb-3 pt-2 my-4 d-flex bg-white shadow">
									<form className="form-inline w-100">
										<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
											<div className="col-md-4 by-2">
												<h4 className="pageEntry">Itinerary</h4>
											</div>
											<div className="col d-flex justify-content-end py-2">
												<input
													type="text"
													className="textfield col-md-4"
													value={this.state.userInput.itinerary.date}
													name="date"
													onChange={this.handleChangeItinerary}
													placeholder="Date..."
												/>
												<input
													type="text"
													className="textfield col-md-4"
													value={this.state.userInput.itinerary.content}
													name="content"
													onChange={this.handleChangeItinerary}
													placeholder="Activity details..."
												/>
												<button
													className="addButton bg-white px-2 mx-2"
													onClick={this.addToItinerary}>
													Add
												</button>
											</div>
										</div>
									</form>

									<div className="d-block entry-block col-md-12 justify-content-end">
										{thisTrip.itinerary.map((item, index) => (
											<div
												key={index}
												className="row entry-row px-3 d-flex justify-content-center">
												<div className="col-md-5 px-0 d-flex justify-content-left">
													<span type="text" className="entry px-1">
														{item.date} , {item.content}
													</span>
												</div>
												<div
													className="col-md-2 col-lg-1 x pt-1 w-100 d-flex justify-content-center text-center"
													onClick={() => {
														actions.removeItinerary(thisTrip.id, thisTrip.contacts);
													}}>
													<span className="deleteEntry d-flex justify-content-center">
														<i className="far fa-calendar-times"></i>
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className="row my-5 d-flex justify-content-center">
									<div className="col-md-4 justify-content-center">
										<h2
											className="xlButton glass text-center py-2 px-3 m-auto"
											onClick={() => {
												actions.editTrip(thisTrip.id, this.state.trip);
											}}>
											Save
										</h2>
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
