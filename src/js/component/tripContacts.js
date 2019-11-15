import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar2 } from "./Navbar2";
import PropTypes from "prop-types";

export class TripContacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			trip: {}
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container pb-5 pt-3">
							{store.trips.map(thisTrip => {
								if (thisTrip.id === this.props.tripID) {
									return (
										<div className="container d-block">
											<form className="form-inline d-flex justify-content-between w-100">
												<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
													<div className="col d-flex justify-content-center py-2">
														<input
															type="text"
															className="textfield col-md-4"
															//value={this.state.userInput.contacts.contact}
															name="contact"
															//onChange={this.handleChangeContacts}
															placeholder="Contact name..."
														/>
														<input
															type="text"
															className="textfield col-md-4"
															//value={this.state.userInput.contacts.address}
															name="address"
															//onChange={this.handleChangeContacts}
															placeholder="Address..."
														/>
														<input
															type="text"
															className="textfield col-md-4"
															//value={this.state.userInput.contacts.phone}
															name="phone"
															//onChange={this.handleChangeContacts}
															placeholder="Phone number..."
														/>
														<button
															className="addButton bg-white px-2 mx-2"
															//onClick={this.addToContacts}
														>
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
																actions.removeContact(thisTrip.id, item.contid);
															}}>
															<span className="deleteEntry d-flex justify-content-center">
																<i className="far fa-calendar-times"></i>
															</span>
														</div>
													</div>
												))}
											</div>
										</div>
									);
								}
							})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

TripContacts.propTypes = {
	tripID: PropTypes.number,
	contid: PropTypes.number
};
