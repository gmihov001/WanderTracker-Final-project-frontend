import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import StampPic from "../../img/stamp.jpg";
import wtLogo from "../../img/wanderTrackerLogo.png";
import UserIcon from "../../img/user-03.png";
import AddIcon from "../../img/add.png";

<a href="https://icons8.com/icon/22917/postcard">Postcard icon by Icons8</a>;

export const Stamps = () => (
	<div className="wrapper">
		<div className="container-fluid d-flex justify-content-between">
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={wtLogo} />
			</Link>
			<Link to="/HomePage">
				<img className="logo-navbar navbar-brand mb-0 h1" src={UserIcon} />
			</Link>
		</div>

		<div className="container">
			<Navbar2 />
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Stamps</h1>
				</div>
			</div>
			<div className="row my-4 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<p className="text-center py-2 px-3">
						<Link to="/AddStamp">
							<img
								src="https://img.icons8.com/cotton/64/000000/plus--v3.png"
								className="createTrip m-2"
								title="Save New Stamp"
							/>
						</Link>
					</p>
				</div>
			</div>

			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col d-flex ">
					<img
						className="logo-navbar navbar-brand mb-0 h1"
						src="http://icons.veryicon.com/png/Flag/Rounded%20World%20Flags/Tokelau%20Flag.png"
					/>
					<img className="logo-navbar navbar-brand mb-0 h1" src={StampPic} />
					<img className="logo-navbar navbar-brand mb-0 h1" src={StampPic} />
				</div>
				<div>
					<Link to="/TripDetails">
						<button className="smallButton bg-white px-2 mx-2">Delete</button>
					</Link>
					<button className="smallButton bg-white px-2 mx-2">Share</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col d-flex">
					<img
						className="logo-navbar navbar-brand mb-0 h1"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iLhj7Hy5blSwlkxPeJ2wS5zcplAQkEUYuXTBJcBG3_SEJM1_&s"
					/>

					<img className="logo-navbar navbar-brand mb-0 h1 " src={StampPic} />
					<img className="logo-navbar navbar-brand mb-0 h1" src={StampPic} />
				</div>
				<div>
					<button className="smallButton bg-white px-2 mx-2">Delete</button>
					<button className="smallButton bg-white px-2 mx-2">Share</button>
				</div>
			</div>
		</div>
	</div>
);
