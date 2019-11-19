import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import { SimpleMap } from "../component/SimpleMap";
import StampPic from "../../img/stamp.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/addbutton.png";
import countries from "../constants/countries";
import Coor from "../constants/Coor.json";
import { Context } from "../store/appContext.js";

export class Map extends React.Component {
	constructor() {
		super();

		this.state = {
			country: {}
		};
	}

	onChange = e => {
		console.dir(e.target);
		this.setState({
			country: {
				label: e.target.options[e.target.selectedIndex].innerHTML,
				coordinates: Coor[e.target.value]
			}
		});
	};
	render() {
		console.log();
		return (
			<Context.Consumer>
				{({ store, actions }) => (
					<div className="wrapper">
						<Navbar2 />
						<div className="container">
							<div className="row mt-4 mb-0 d-flex justify-content-center">
								<div className="col-md-4 text-center">
									<h1 className="pageTitle text-center py-2 px-3">Map</h1>
								</div>
							</div>

							<SimpleMap markers={store.countries} />
						</div>
						<div className="row my-2 d-flex justify-content-center">
							<div className="col-md-4 text-center">
								<select onChange={this.onChange} id="country" name="country" className="form-control">
									<option value="Select Country">Select a Country</option>
									{countries.map(({ label, value }, index) => (
										<option key={index} value={value}>
											{label}
										</option>
									))}
								</select>
							</div>
							<div className="container">
								<div className="row my-5 d-flex justify-content-center">
									<div className="col-md-4 justify-content-center">
										<h2
											className="xlButton glass text-center py-2 px-3 m-auto"
											type="text"
											onClick={() => {
												actions.addCountry(this.state.country);
											}}>
											Save
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}
