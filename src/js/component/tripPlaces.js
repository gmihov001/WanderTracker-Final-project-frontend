import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar2 } from "./Navbar2";
import PropTypes from "prop-types";

export class TripPlaces extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			place: "",
			url: ""
		};
	}

	handleChangePlaces = evt => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container pb-5 pt-3">
							{store.trips.map((thisTrip, index) => {
								if (thisTrip.id === this.props.tripID) {
									return (
										<div key={index} className="container d-block">
											<form className="form-inline d-flex justify-content-between w-100">
												<div className="form-group w-100 col-md-12 col-lg-12 d-flex justify-content-between mb-2">
													<div className="col d-sm-block d-md-flex justify-content-center py-2">
														<input
															type="text"
															className="textfield col-sm-8 col-md-4"
															//value={this.state.userInput.places.place}
															name="place"
															onChange={this.handleChangePlaces}
															placeholder="Place..."
														/>
														<input
															type="text"
															className="textfield col-sm-8 col-md-6"
															name="url"
															placeholder="URL..."
															//value={this.state.userInput.places.url}
															onChange={this.handleChangePlaces}
														/>
														<div className="text-center my-1 col-sm-4 col-md-2">
															<button
																type="button"
																className="addButton w-50 bg-white px-2 mx-2"
																onClick={() => {
																	actions.addPlace(thisTrip.id, { ...this.state });
																}}>
																Add
															</button>
														</div>
													</div>
												</div>
											</form>

											<div className="d-block entry-block col-sm-12">
												{thisTrip.places.map((item, index) => (
													<div
														key={index}
														className="row entry-row px-3 d-flex justify-content-center">
														<div className="col-sm-10 col-md-8 col-lg-6 px-0 d-flex justify-content-between">
															<span type="text" className="entry px-1 ">
																{item.place} , {item.url}
															</span>
															<span
																className="deleteEntry px-4 text-center"
																onClick={() => {
																	actions.removePlace(thisTrip.id, item.placeid);
																}}>
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

TripPlaces.propTypes = {
	tripID: PropTypes.string,
	placeid: PropTypes.string
};
