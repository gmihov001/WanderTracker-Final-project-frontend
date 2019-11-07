import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../store/appContext.js";
import { Navbar2 } from "../component/Navbar2";
import PropTypes from "prop-types";

export class TripDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: {}
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
						let trip = context.store.trip[this.props.match.params.id];
						return (
							<div className="container py-5">
								<div className="row my-5 d-flex justify-content-center">
									<div className="col-md-4 text-center">
										<h1 className="pageTitle text-center px-3">
											{trip.name} {trip.year}
										</h1>
									</div>
								</div>

								<div className="row py-4 my-4 d-flex bg-white shadow">
									<div className="col-md-4 ">
										<h4 className="pageEntry">Contacts</h4>
									</div>
									<div className="col-md-8 d-flex justify-content-end">
										<input type="text" className="textfield col-md-6" placeholder="New Contact" />
										<button className="addButton bg-white px-2 mx-2">Add</button>
									</div>

									<div className="d-block col-md-12 justify-content-end">
										{Object.keys(trip.contacts).map((item, index) => (
											<div key={index} className="row px-3 d-flex justify-content-end">
												<div className="col-md-8 justify-content-end">
													<span type="text" className="entry text-right px-3">
														{trip.contacts[index].contact} , {trip.contacts[index].address}{" "}
														, {trip.contacts[index].phone}
													</span>
												</div>
												<div className="col-md-1 d-flex justify-content-between list-inline">
													<div className="x">
														<strong>x</strong>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="row py-4 my-4 d-flex bg-white shadow">
									<div className="col-md-4 ">
										<h4 className="pageEntry">Places of Interest</h4>
									</div>
									<div className="col-md-8 d-flex justify-content-end">
										<input type="text" className="textfield col-md-6" placeholder="New Contact" />
										<button className="addButton bg-white px-2 mx-2">Add</button>
									</div>

									<div className="d-block col-md-12 justify-content-end">
										{Object.keys(trip.places).map((item, index) => (
											<div key={index} className="row px-3 d-flex justify-content-end">
												<div className="col-md-8 justify-content-end">
													<span type="text" className="entry text-right px-3">
														{trip.places[index].place} , {trip.places[index].url}
													</span>
												</div>
												<div className="col-md-1 d-flex justify-content-between list-inline">
													<div className="x">
														<strong>x</strong>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="row py-4 my-4 d-flex bg-white shadow">
									<div className="col-md-4 ">
										<h4 className="pageEntry">Itineraries</h4>
									</div>
									<div className="col-md-8 d-flex justify-content-end">
										<input type="text" className="textfield col-md-6" placeholder="New Contact" />
										<button className="addButton bg-white px-2 mx-2">Add</button>
									</div>

									<div className="d-block col-md-12 justify-content-end">
										{Object.keys(trip.itinerary).map((item, index) => (
											<div key={index} className="row px-3 d-flex justify-content-end">
												<div className="col-md-8 justify-content-end">
													<span type="text" className="entry text-right px-3">
														{trip.itinerary[index].date} , {trip.itinerary[index].content}
													</span>
												</div>
												<div className="col-md-1 d-flex justify-content-between list-inline">
													<div className="x">
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
