import React from "react";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import Map_Landing from "../../img/Map_Landing.png";
import SaveIcon from "../../img/Save.png";
import CalIcon from "../../img/Calendar.png";
import DocIcon from "../../img/Documents.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const MainGate = () => (
	<div className="wrapper bg-white">
		<Navbar />
		<div className="container">
			<div className="row">
				<div className="map-landing  img-fluid ">
					<img id="worldMap" src={Map_Landing} />
				</div>
				<div className="main text-white mx-auto shadow  w-75">
					<h2 className="text-center p-3">Plan, Save and Make Memories</h2>
				</div>
				<div className="d-flex justify-content-between m-1 text-secondary mx-auto">
					<span className="icon m-2 p-4">
						<center>
							<img src={CalIcon} className="icon-main m-2" />
							<h4>Plan</h4>
							<br />
							Plan your trip <br />
							from initial ideas to final itinerary
						</center>
					</span>
					<span className="icon m-2 p-4">
						<center>
							<img src={DocIcon} className="icon-main m-2" />
							<h4>Keep</h4>
							<br />
							Scan and keep all your travel documents <br /> to access from anywhere if lost
						</center>
					</span>
					<span className="icon m-2 p-4">
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
