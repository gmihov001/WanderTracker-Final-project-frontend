import React from "react";
import Camera from "react-html5-camera-photo";
import { Link } from "react-router-dom";
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
			<div className="container App">
				{this.state.dataUri ? (
					<img src={this.state.dataUri} />
				) : (
					<Camera onTakePhotoAnimationDone={this.onTakePhotoAnimationDone} />
				)}

				<div className="row my-5 d-flex justify-content-center">
					<div className="col-md-6 text-center">
						<Link to="/TravelDoc">
							<h1 className="xlButton text-center py-2 px-3">Save</h1>
						</Link>
					</div>
				</div>
				<div>{this.state.dataUri}</div>
			</div>
		);
	}
}
