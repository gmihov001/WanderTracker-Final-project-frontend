import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import wtLogo from "../../img/wanderTrackerLogo.png";
import { Context } from "../store/appContext.js";

export class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
	}

	handleChange = event => {
		event.preventDefault();
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<div className="container">
					<div className="row my-4 d-sm-block d-md-flex justify-content-between text-center">
						<div className="col-lg-3 col-md-3 col-sm-6 px-0 mx-3">
							<img
								src="https://images.unsplash.com/photo-1549986432-5060067864b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
								className="profile-pic mx-auto d-block img-fluid"
							/>
							<p className="profile-name text py-2 px-3 mb-5">
								<strong>John Smith</strong>
							</p>
						</div>
						<Context.Consumer>
							{({ store, actions }) => (
								<div className="col-sm-6 col-md-6 mt-3 m-3 d-flex justify-content-center">
									<div className="row d-block text-left">
										<form
											onSubmit={() => {
												actions.addPasNum(this.state.value);
											}}>
											<div className="w-100 mx-0">
												<div className="md-form d-flex justify-content-between mt-0">
													<label htmlFor="passportNum">Passport Number:</label>
													<input
														type="text"
														className="form-control"
														//value={this.state.value}
														name="passportNum"
														id="passportNum"
														placeholder={store.passport_number}
														onChange={this.handleChange}
													/>
												</div>
											</div>
										</form>
										<form
											onSubmit={() => {
												actions.addPasExp(this.state.value);
											}}>
											<div className="w-100 mx-0">
												<div className="md-form mt-0 d-flex justify-content-between">
													<label htmlFor="passportExp">Passport Expiry:</label>
													<input
														type="text"
														className="form-control"
														//value="12.10.2029"
														name="passportExp"
														id="passportExp"
														placeholder={store.passport_expiry}
														onChange={this.handleChange}
													/>
												</div>
											</div>
										</form>
										<span className="w-100 py-0 mx-0 px-0 d-flex justify-content-center">
											<Link to="/EmergContacts">
												<strong className="emergCont p-2">Emergency Contacts + </strong>
											</Link>
										</span>
									</div>
								</div>
							)}
						</Context.Consumer>
						<div className="col-sm-6 col-md-2 text-center">
							<Link to="/">
								<button type="button" className="logout btn px-4 py-2">
									Log Out
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="container mb-5">
					<div className="row mt-4 mb-0 d-flex flex-row">
						<div className="col-md-4 text-center">
							<h1 className="underTitle text-left pl-0 pt-2 pr-4">Travel Tips</h1>
						</div>
					</div>

					<div className="card-deck mb-5">
						<div className="card">
							<img
								src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
								className="card-img-top img-fluid"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									<strong>Visit the touristy stuff in a city</strong>
								</h5>
								<p className="card-text">
									The main tourist attractions are popular for a reason. While getting off the beaten
									track can be fun, the things you’ll see are rarely as impressive as the popular
									sights. Don’t be a travel snob — hit up the famous stops as well as the
									lesser-visited stuff.
								</p>
							</div>
							<div className="card-footer">
								<p>Check the rest of this article on:</p>
								<a
									className="link"
									href="https://www.neverendingfootsteps.com/100-best-travel-tips/"
									target="_blank"
									rel="noopener noreferrer">
									neverendingfootsteps.com...
								</a>
							</div>
						</div>
						<div className="card">
							<img
								src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
								className="card-img-top img-fluid"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									<strong>The Ultimate Packing Guide for Travel Photographers</strong>
								</h5>
								<p className="card-text">
									Working as professional photographer for the past 12 years, I’ve come up with the
									ultimate kit for travel photography. This travel photography packing list includes
									all of the gear you’ll need and the best camera backpacks for travel photographers.
									Here’s how to pack like a pro!
								</p>
							</div>
							<div className="card-footer">
								<p>Check the rest of this article on:</p>
								<a
									href="https://ordinarytraveler.com/travel-photographer-packing-list"
									target="_blank"
									rel="noopener noreferrer"
									className="link">
									ordinarytraveler.com...
								</a>
							</div>
						</div>
						<div className="card">
							<img
								src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
								className="card-img-top img-fluid"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									<strong>10 Best Tips for Traveling Europe (Everything You Need To Know)</strong>
								</h5>
								<p className="card-text">
									After traveling to Europe for the past 20 years, I’ve learned all of the best tips
									and tricks. These Europe travel tips cover everything you NEED to know!
								</p>
							</div>
							<div className="card-footer">
								<p>Check the rest of this article on:</p>
								<a
									className="link"
									href="https://ordinarytraveler.com/europe-travel-tips"
									target="_blank"
									rel="noopener noreferrer">
									ordinarytraveler.com
								</a>
							</div>
						</div>
					</div>

					<div className="row mt-4 mb-0 d-flex flex-row">
						<div className="col-md-8 col-md-6 text-center">
							<h1 className="underTitle text-left pl-0 pt-2 pr-4">Important Links</h1>
						</div>
					</div>

					<div className="card-deck mb-5">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">
									<strong>Cureent Local Times Around the World:</strong>
								</h5>
								<p className="card-text"></p>
							</div>
							<div className="card-footer">
								<a
									className="link"
									href="https://www.timeanddate.com/worldclock/"
									target="_blank"
									rel="noopener noreferrer">
									timeanddate.com/worldclock/
								</a>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<h5 className="card-title">
									<strong>State Department Travel Information: </strong>
								</h5>
								<p className="card-text"></p>
							</div>
							<div className="card-footer">
								<a
									href="https://travel.state.gov/content/travel/en/international-travel.html"
									target="_blank"
									rel="noopener noreferrer"
									className="link">
									travel.state.gov/content/travel/
								</a>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">
									<strong>Flight Tracker Around the World</strong>
								</h5>
								<p className="card-text"></p>
							</div>
							<div className="card-footer">
								<a
									className="link"
									href="https://www.flightstats.com/v2/flight-tracker/search"
									target="_blank"
									rel="noopener noreferrer">
									www.flightstats.com/v2/flight-tracker/
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
