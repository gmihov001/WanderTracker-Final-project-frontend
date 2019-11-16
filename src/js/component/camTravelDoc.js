import React from "react";
import Camera from "react-html5-camera-photo";
import { Link } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
import passport from "../../img/passport.jpg";
import countries from "../constants/countries";
import "react-html5-camera-photo/build/css/index.css";
import CameraImport, { FACING_MODES } from "react-html5-camera-photo";

import { ImagePreview } from "./ImagePreview";

export class camTravelDoc extends React.Component {
	constructor() {
		super();
		this.state = { picTravelDoc: null };
	}

	onTakePhoto = picTravelDoc => {
		this.setState({ picTravelDoc });
	};

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<div className="container App mt-5">
					<div className="row my-5 d-flex justify-content-center">
						<Camera
							onTakePhoto={this.onTakePhoto}
							idealFacingMode={FACING_MODES.ENVIRONMENT}
							isImageMirror={false}
						/>
					</div>
					<div className="container d-flex justify-content-center">
						<div className="row">
							<select id="country" name="country" className="form-control">
								<option value="Select Country">Select a Country</option>
								{countries.map(({ label, value }, index) => (
									<option key={index} value={value}>
										{label}
									</option>
								))}
							</select>
						</div>
					</div>

					<div>
						{this.state.picTravelDoc ? (
							<div className="row py-4 my-4 bg-white shadow">
								<div className="col d-flex justify-content-center">
									<img
										className="stamp-prev navbar-brand mb-0 h1 img-fluid"
										src={this.state.picTravelDoc}
									/>
								</div>
								<img className="flag mr-5" src="https://www.countryflags.io/hn/flat/64.png" />
							</div>
						) : null}
					</div>

					<div className="row my-5 d-flex justify-content-center">
						<div className="col-md-4 justify-content-center">
							<Link to="/TravelDoc">
								<h2 className="xlButton glass text-center py-2 px-3 m-auto">Save</h2>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
