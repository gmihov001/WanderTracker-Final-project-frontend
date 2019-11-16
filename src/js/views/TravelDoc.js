import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import passport from "../../img/passport.jpg";
import BoardingPass from "../../img/BoardingPass.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/addbutton.png";
import CamIcon from "../../img/Image.png";
import camTravelDoc from "../component/camTravelDoc";

export class TravelDoc extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

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

					<div className="row my-5 d-flex justify-content-center">
						<div className="col d-flex justify-content-center mb-5">
							<Link to="/camTravelDoc">
								<img
									className="take-pic navbar-brand mb-0 h1"
									title="Take a picture of your travel document"
									src={CamIcon}
								/>
							</Link>
						</div>
					</div>

					<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
						<div className="col">
							<img className="travel-doc navbar-brand mb-0 h1 img-fluid" src={passport} height="100" />
						</div>
						<div className="mx-2">
							<Link to="/TripDetails">
								<button className="smallButton bg-white px-2 mx-2">Delete</button>
							</Link>
						</div>
					</div>
					<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow">
						<div className="col">
							<img
								className="travel-doc navbar-brand mb-0 h1 img-fluid"
								height="100"
								src="https://i.huffpost.com/gen/1936992/thumbs/o-TICKET-570.jpg?16"
							/>
						</div>
						<div className="mx-2">
							<button className="smallButton bg-white px-2 mx-2">Delete</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
