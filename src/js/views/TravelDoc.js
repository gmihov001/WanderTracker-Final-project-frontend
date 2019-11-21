import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import passport from "../../img/passport.jpg";
import BoardingPass from "../../img/BoardingPass.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/addbutton.png";
import CamIcon from "../../img/Image.png";
import { Context } from "../store/appContext.js";

export class TravelDoc extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	getImage = country => {
		return `https://www.countryflags.io/${country}/shiny/64.png`;
	};

	addDefaultSrc = ev => {
		ev.target.src =
			"https://cdn4.iconfinder.com/data/icons/navigation-43/32/18_travel_map_worldwide_planet_earth_world_grid_placeholder_maps_and_flags-512.png";
	};

	render() {
		return (
			<div className="wrapper ">
				<Navbar2 />
				<div className="container">
					<div className="row my-4 d-flex justify-content-center">
						<div className="col-md-4 text-center">
							<h1 className="pageTitle text-center py-2 px-3">Travel Documents</h1>
						</div>
					</div>
					<div className="row my-3 d-flex justify-content-center">
						<div className="col d-flex justify-content-center mb-2">
							<Link to="/camTravelDoc">
								<img
									className="take-pic navbar-brand mb-0 h1"
									title="Take a picture of your travel document"
									src={CamIcon}
								/>
							</Link>
						</div>
					</div>

					<div className="row my-5 d-flex justify-content-center">
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<div className="container d-block">
										{store.users[0] &&
											store.users[0].documents.map((item, index) => (
												<div
													key={index}
													className="row py-2 my-4 d-flex justify-content-between bg-white shadow">
													<div className="col-sm-2 col-md-2 pageEntry ml-3 px-2 h-1 mt-4">
														<h4 className="align-middle">{item.country_label}</h4>
													</div>

													<div className="col-sm-2 col-md-4 d-flex justify-content-center">
														<img
															className="stamp-prev navbar-brand mb-0 h1 img-fluid"
															onError={this.addDefaultSrc}
															src={item.photo}
														/>
													</div>

													<div className="col-sm-2 col-md-2 mt-3 text-center">
														<img
															className="flag mr-0"
															onError="this.style.display='none'"
															src={this.getImage(item.country_value)}
														/>
													</div>

													<div className="col-sm-1 col-md-1 mr-2">
														<button
															className="smallDelete mt-4 px-2 mx-1"
															type="button"
															onClick={() => {
																actions.removeDoc(item.id);
															}}>
															Delete
														</button>
													</div>
												</div>
											))}
									</div>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
