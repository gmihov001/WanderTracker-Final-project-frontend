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
				<div className="map-landing  img-fluid mt-0 mb-0">
					<img id="worldMap" src={Map_Landing} />
				</div>

				<div className="main-landing text-white mx-auto shadow mx-5  ">
					<h2 className="text-center p-2 h3 font-weight-light">Plan Travel | Save Memories</h2>
				</div>

				<div className="d-flex justify-content-between m-1 text-secondary mx-auto">
					<div className="row justify-content-center mx-auto">
						<span className="icon m-2 p-4">
							<center>
								<img src={CalIcon} className="icon-main m-2 " />
								<h4>Plan</h4>
								<br />
								Plan and organize your trips, <br />
								from initial ideas to final itinerary
							</center>
						</span>
						<span className="icon m-2 p-4">
							<center>
								<img src={DocIcon} className="icon-main m-2 " />
								<h4>Save</h4>
								<br />
								Scan and store all your travel documents. <br /> Have quick access in the event of an
								emergency.
							</center>
						</span>
						<span className="icon m-2 p-4">
							<center>
								<img src={SaveIcon} className="icon-main m-2 " />
								<h4>Keep</h4>
								<br />
								Save and share map locations, <br />
								passport stamps and other memories
							</center>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
);
