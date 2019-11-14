import React from "react";
import Camera from "react-html5-camera-photo";
import { Link } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
import passport from "../../img/passport.jpg";
import countries from "../constants/countries";
import "react-html5-camera-photo/build/css/index.css";

import ImagePreview from "./ImagePreview"; // source code : ./src/demo/AppWithImagePreview/ImagePreview

export class Cam extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { dataUri: null };
	}

	onTakePhotoAnimationDone = dataUri => {
		console.log("takePhoto");
		this.setState({ dataUri });
	};

	render() {
		console.log(this.state.dataUri);
		return (
			<div className="wrapper">
				<Navbar2 />
				<div className="container App mt-5">
					<div className="row my-5 d-flex justify-content-center">
						<Camera onTakePhotoAnimationDone={this.onTakePhotoAnimationDone} />
					</div>
					<div className="container d-flex justify-content-center">
						<div className="row">
							<select id="country" name="country" className="form-control">
								<option value="Select Country">Select a Country</option>
								{countries.map(({ label, value }) => (
									<option key={value} value={value}>
										{label}
									</option>
								))}
							</select>
						</div>
					</div>

					<div>
						{this.state.dataUri ? (
							<div className="row py-4 my-4 bg-white shadow">
								<div className="col d-flex justify-content-center">
									<img
										className="stamp-prev navbar-brand mb-0 h1 img-fluid"
										src={this.state.dataUri}
									/>
								</div>
							</div>
						) : null}
					</div>

					<div className="row my-5 d-flex justify-content-center">
						<div className="col-md-4 justify-content-center">
							<Link to="/Stamps">
								<h2 className="xlButton glass text-center py-2 px-3 m-auto">Save</h2>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
