import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../store/appContext.js";
import { Navbar2 } from "../component/Navbar2";
import PropTypes from "prop-types";

export class TripDetails2 extends React.Component {
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
							<div className="container">
								<div className="row my-5 d-flex justify-content-center">
									<div className="col-md-4 text-center">
										<h1 className="pageTitle text-center py-2 px-3">
											{trip.name} {trip.year}
										</h1>
									</div>
								</div>
								<div className="row my-5 d-flex justify-content-center">
									<div className="col d-flex justify-content-center mb-5">&nbsp;</div>
								</div>
								<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
									<div className="col-md-4">
										<h4 className="pageEntry">Contacts</h4>
									</div>
									<div className="col-md-8 d-flex justify-content-end">
										<input type="text" className="textfield col-md-6" placeholder="New Contact" />
										<button className="addButton bg-white px-2 mx-2">Add</button>
									</div>
									<div className="row px-3 d-flex justify-content-between list-inline">
										<div className="col">
											<span type="text" className="entry px-3">
												{trip.contacts[0].address}
											</span>
										</div>
										<div className="col-md-1 d-flex justify-content-between list-inline">
											<button className="smallButton bg-white px-1 mx-1">Delete</button>
										</div>
									</div>
								</div>
								<div className="row py-4 my-4 d-flex justify-content-between shadow bg-white">
									<div className="col-md-4">
										<h4 className="pageEntry">Places</h4>
									</div>
									<div className="col-md-8 d-flex justify-content-end">
										<input
											type="text"
											className="textfield col-md-6"
											placeholder="New Place of Interest"
										/>
										<button className="addButton bg-white px-2 mx-2">Add</button>
									</div>
								</div>
								<div className="row py-4 my-4 d-flex justify-content-between shadow bg-white">
									<div className="col-md-4">
										<h4 className="pageEntry">Itinerary</h4>
									</div>
									<div className="col-md-8 d-flex justify-content-end">
										<input type="text" className="textfield col-md-6" placeholder="New Activity" />
										<button className="addButton bg-white px-2 mx-2">Add</button>
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

TripDetails2.propTypes = {
	match: PropTypes.object
};
