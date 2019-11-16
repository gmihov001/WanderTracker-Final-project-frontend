import React from "react";
import { Context } from "../store/appContext.js";
import { Navbar2 } from "../component/Navbar2";
import PropTypes from "prop-types";
import { TripContacts } from "../component/tripContacts.js";
import { TripPlaces } from "../component/tripPlaces.js";
import { TripItinerary } from "../component/tripItinerary.js";
import { TriPlanner } from "./TripPlanner";

export class TripDetailsBeta extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<Context.Consumer>
					{({ store }) => {
						return (
							<div className="container pb-5 pt-3">
								{store.trips.map((thisTrip, index) => {
									if (thisTrip.id === this.props.match.params.id) {
										return (
											<div key={index}>
												<div className="row py-2 my-4 d-flex justify-content-center">
													<div className="col-md-4 text-center">
														<h1 className="pageTitle text-center px-1">
															{thisTrip.name} {thisTrip.year}
														</h1>
														<p>Trip ID: {thisTrip.id}</p>
													</div>
												</div>
												<div className="row pb-3 pt-2 my-4 d-flex justify-content-end bg-white shadow">
													<div className="col-md-11 minititle">
														<h4 className="pageEntry">Contacts</h4>
													</div>
													<TripContacts
														tripID={thisTrip.id}
														contid={thisTrip.contacts.contid}
													/>
												</div>

												<div className="row pb-3 pt-2 my-4 d-flex bg-white shadow">
													<div className="col-md-4 by-2">
														<h4 className="pageEntry">Places of Interest</h4>
													</div>
													<TripPlaces
														tripID={thisTrip.id}
														placeid={thisTrip.places.placeid}
													/>
												</div>

												<div className="row pb-3 pt-2 my-4 d-flex bg-white shadow">
													<div className="col-md-4 by-2">
														<h4 className="pageEntry">Itinerary</h4>
													</div>
													<TripItinerary
														tripID={thisTrip.id}
														itinid={thisTrip.itinerary.itinid}
													/>
												</div>
											</div>
										);
									}
								})}
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

TripDetailsBeta.propTypes = {
	match: PropTypes.object
};
