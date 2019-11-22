import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar2 } from "./Navbar2";
import PropTypes from "prop-types";

export class TripItinerary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			content: ""
		};
	}

	handleChangeItinerary = evt => {
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
													<div className="col-sm-12 d-sm-block d-md-flex justify-content-center py-2">
														<input
															type="text"
															className="textfield my-2 col-sm-10 col-md-4"
															//value={this.state.userInput.itinerary.date}
															name="date"
															onChange={this.handleChangeItinerary}
															placeholder="Date..."
														/>
														<input
															type="text"
															className="textfield my-2 col-sm-10 col-md-6"
															//value={this.state.userInput.itinerary.content}
															name="content"
															onChange={this.handleChangeItinerary}
															placeholder="Activity details..."
														/>
														<div className="text-center my-1 col-sm-4 col-md-2">
															<button
																type="button"
																className="addButton w-50 bg-white px-2 mx-2"
																onClick={() => {
																	actions.addItinerary(thisTrip.id, {
																		...this.state
																	});
																}}>
																Add
															</button>
														</div>
													</div>
												</div>
											</form>

											<div className="d-block entry-block col-md-12 my-2 mx-0">
												{thisTrip.itinerary.map((item, index) => (
													<div
														key={index}
														className="row entry-row px-3 d-flex justify-content-center">
														<div className="col-sm-10 col-md-8 col-lg-6 px-0 d-flex justify-content-between">
															<span type="text" className="entry px-1 ">
																{item.date} , {item.content}
															</span>
															<span
																className="deleteEntry px-4 text-center"
																onClick={() => {
																	actions.removeItinerary(thisTrip.id, item.itinid);
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

TripItinerary.propTypes = {
	tripID: PropTypes.string,
	itinid: PropTypes.string
};
