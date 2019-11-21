import React from "react";
import Camera from "react-html5-camera-photo";
//import { Link } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
//import passport from "../../img/passport.jpg";
import countries from "../constants/countries";
import "react-html5-camera-photo/build/css/index.css";
import CameraImport, { FACING_MODES } from "react-html5-camera-photo";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
//import { ImagePreview } from "./ImagePreview";
import firebase from "../firebase";

export class camTravelDoc extends React.Component {
	constructor() {
		super();
		this.state = {
			traveldoc: {
				photo: "",
				country_label: "",
				country_value: "",
				user_id: 1
			}
		};
	}

	onTakePhoto = photo => {
		//const newTraveldoc = Object.assign(this.state.traveldoc, photo);
		//this.setState({ traveldoc: { ...this.state.traveldoc, photo: photo } });
		const date = new Date();

		const storageRef = firebase.storage().ref();
		const uploader = storageRef
			.child("/" + date.toString() + ".jpeg")
			.putString(photo.split(",")[1], "base64", { contentType: "image/jpeg" });
		uploader.on(
			"state_changed",
			snapshot => {},
			error => console.log(error),
			() => {
				uploader.snapshot.ref.getDownloadURL().then(url => {
					console.log(url);
					this.setState({ traveldoc: { ...this.state.traveldoc, photo: url } });
				});
			}
		);
	};

	onChange = e => {
		console.dir(e.target);
		let str = e.target.options[e.target.selectedIndex].innerHTML;
		let split = str.split(" ");

		this.setState({
			traveldoc: {
				...this.state.traveldoc,
				country_label: split[0],
				country_value: split[1]
			}
		});
	};

	getImage = country => {
		return `https://www.countryflags.io/${country}/shiny/64.png`;
	};

	addDefaultSrc = ev => {
		ev.target.src =
			"https://cdn4.iconfinder.com/data/icons/navigation-43/32/18_travel_map_worldwide_planet_earth_world_grid_placeholder_maps_and_flags-512.png";
	};

	render() {
		console.log("Typeof: " + typeof this.state.traveldoc.photo);
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
							<select id="country" name="country" onChange={this.onChange} className="form-control">
								<option value="Select Country">Select a Country</option>
								{countries.map(({ label, value }, index) => (
									<option key={index} value={value}>
										{label} {value}
									</option>
								))}
							</select>
						</div>
					</div>
					<div>
						{this.state.traveldoc ? (
							<div className="row d-flex justify-content-between py-4 my-4 bg-white shadow">
								<div className="col pageEntry ml-3 px-2 h-1 mt-4">
									<h3 className="country-name align-middle">{this.state.traveldoc.country_label}</h3>
								</div>
								<div className="col">
									<img
										className="stamp-prev navbar-brand mb-0 h1 img-fluid"
										onError={this.addDefaultSrc}
										src={this.state.traveldoc.photo}
									/>
								</div>
								<div>
									<img
										className="stamp-prev navbar-brand mr-5 h-1"
										src={this.getImage(this.state.traveldoc.country_value)}
									/>
								</div>
							</div>
						) : null}
					</div>
					<Context.Consumer>
						{({ actions }) => (
							<div className="row my-5 d-flex justify-content-center">
								<div className="col-md-4 justify-content-center">
									<h2
										className="xlButton glass text-center py-2 px-3 m-auto"
										type="text"
										onMouseUp={() => {
											if (actions.addDoc(this.state.traveldoc)) {
												this.props.history.push("/TravelDoc");
											}
										}}>
										Save
									</h2>
								</div>
							</div>
						)}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

camTravelDoc.propTypes = {
	history: PropTypes.object
};
