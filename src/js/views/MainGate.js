import React from "react";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const MainGate = () => (
	<div>
		<Navbar />

		<div className="container">
			<div className="mx-auto">
				<img
					id="worldMap"
					src="https://previews.123rf.com/images/itan1409/itan14091504/itan1409150400035/39074407-world-map-gray-with-pins.jpg"
					height="500px"
				/>
			</div>
			<div className="bg-warning text-white mx-auto shadow-lg w-75">
				<h2 className="text-center p-3">Plan Trips. Make Memories. Save Memories</h2>
			</div>
			<div className="d-flex justify-content-around m-5 text-secondary">
				<span className="icon mx-auto">
					<center>
						<img src="https://img.icons8.com/dusk/96/000000/calendar-plus.png" className="m-2" />
						<h4>Plan</h4>
						<br />
						Plan your trip <br />
						from initial ideas to final itinerary
					</center>
				</span>
				<span className="icon mx-auto">
					<center>
						<img src="https://img.icons8.com/dusk/96/000000/passport.png" className="m-2" />
						<h4>Keep</h4>
						<br />
						Scan and keep all your travel documents <br /> to access from anywhere if lost
					</center>
				</span>
				<span className="icon mx-auto">
					<center>
						<img src="https://img.icons8.com/color/96/000000/postcard.png" className="m-2" />
						<h4>Save</h4>
						<br />
						Save and share map locations, <br />
						passport stamps and other memories
					</center>
				</span>
			</div>
		</div>
	</div>
);
