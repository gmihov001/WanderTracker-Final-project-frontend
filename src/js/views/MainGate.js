import React from "react";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import Map_Landing from "../../img/Map_Landing.png";
import SaveIcon from "../../img/Save.png";
import CalIcon from "../../img/Calendar.png";
import DocIcon from "../../img/Documents.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const MainGate = () => (
	<div>
		<Navbar />

		<div className="container">
			<div className="row">
				<div className="map-landing  img-fluid ">
					<img id="worldMap" src={Map_Landing} />
				</div>
				<div className="main rounded text-white mx-auto shadow  w-75">
					<h2 className="text-center p-3">Plan Trips. Make Memories. Save Memories</h2>
				</div>
				<div className="d-flex justify-content-around m-5 text-secondary mx-auto">
					<span className="icon mx-auto">
						<center>
							<img src={CalIcon} className="icon-main m-2" />
							<h4>Plan</h4>
							<br />
							Plan your trip <br />
							from initial ideas to final itinerary
						</center>
					</span>
					<span className="icon mx-auto">
						<center>
							<img src={DocIcon} className="icon-main m-2" />
							<h4>Keep</h4>
							<br />
							Scan and keep all your travel documents <br /> to access from anywhere if lost
						</center>
					</span>
					<span className="icon mx-auto">
						<center>
							<img src={SaveIcon} className="icon-main m-2" />
							<h4>Save</h4>
							<br />
							Save and share map locations, <br />
							passport stamps and other memories
						</center>
					</span>
				</div>
			</div>
		</div>
	</div>
);
