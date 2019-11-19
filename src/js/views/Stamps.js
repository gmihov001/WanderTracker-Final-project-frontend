import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import StampPic from "../../img/stamp.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/addbutton.png";
import CamIcon from "../../img/Image.png";
import countries from "../constants/countries";
import { Context } from "../store/appContext.js";

export class Stamps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getImage = country => {
		return `https://www.countryflags.io/${country}/shiny/64.png`;
	};

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<div className="container">
					<div className="row my-4 d-flex justify-content-center">
						<div className="col-md-4 text-center">
							<h1 className="pageTitle text-center py-2 px-3">Stamps</h1>
						</div>
					</div>
					<div className="row my-5 d-flex justify-content-center">
						<div className="col d-flex justify-content-center mb-5">
							<Link to="/camStamps">
								<img
									className="take-pic navbar-brand mb-0 h1"
									title="Take a picture of your stamp"
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
										{store.stamps.map((item, index) => (
											<div
												key={index}
												className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
												<div className="pageEntry ml-3 px-2 h-1 mt-4">
													<h3 className="country-name align-middle">{item.label}</h3>
												</div>

												<div className="col d-flex justify-content-center">
													<img
														className="stamp-prev navbar-brand mb-0 h1 img-fluid"
														src={item.photo}
													/>
												</div>

												<div>
													<img
														className="col mr-5 stamp-prev navbar-brand img-fluid"
														src={this.getImage(item.value)}
													/>
												</div>
												<div className="mr-2">
													<button className="smallView px-2 mx-2">Share</button>
													<button
														className="smallDelete px-2 mx-2"
														type="button"
														onClick={() => {
															actions.removeStamp(item.id);
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
