import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar2 } from "../component/Navbar2";

export class EmergContacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			number: ""
		};
	}

	handleChangeContacts = evt => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	render() {
		return (
			<div className="wrapper">
				<Navbar2 />
				<div className="container">
					<div className="row my-5 d-flex justify-content-center">
						<div className="col-md-4 text-center">
							<h1 className="pageTitle text-center py-2 px-3">Emergency Contacts</h1>
						</div>
					</div>
					<div className="row my-5 d-flex justify-content-center">
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<div className="container ">
										<form className="  w-100">
											<div className="  w-100 col-md-12 col-lg-12 mb-2">
												<div className="col d-flex justify-content-center py-2">
													<input
														type="text"
														className="textfield col-md-4"
														name="name"
														onChange={this.handleChangeContacts}
														placeholder="Contact name..."
													/>
												</div>

												<div className="col d-flex justify-content-center py-2">
													<input
														type="text"
														className="textfield col-md-4"
														name="number"
														onChange={this.handleChangeContacts}
														placeholder="Contact number..."
													/>
												</div>
												<div className="col d-flex justify-content-center py-2">
													<button
														type="button"
														className="addButton bg-white px-2 mx-2"
														onClick={() => {
															actions.addEmergContact({ ...this.state });
														}}>
														Add
													</button>
												</div>
											</div>
										</form>

										<div className="d-block entry-block col-md-10 col-lg-8 my-2 ">
											{store.emergency_contacts.map((item, index) => (
												<div
													key={index}
													className="row entry-row px-3 d-flex justify-content-center">
													<div className="col-sm-10 col-md-8 col-lg-6 px-0 d-flex justify-content-between">
														<span type="text" className="entry px-1 ">
															{item.name} , {item.number}
														</span>
														<span
															className="deleteEntry x px-5"
															onClick={() => {
																actions.removeEmergContact(item.name);
															}}>
															<i className="far fa-calendar-times"></i>
														</span>
													</div>
												</div>
											))}
										</div>
									</div>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}

/*import React from "react";
import { Link } from "react-router-dom";
import { Navbar2 } from "../component/Navbar2";
import UserIcon from "../../img/user-03.png";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const EmergContacts = () => (
	<div className="wrapper">
		<Navbar2 />
		<div className="container">
			<div className="row my-5 d-flex justify-content-center">
				<div className="col-md-4 text-center">
					<h1 className="pageTitle text-center py-2 px-3">Emergency Contacts</h1>
				</div>
			</div>
			<div className="row my-5 d-flex justify-content-center">
				<div className="col d-flex justify-content-center mb-5">
					<input type="text" className="textfield col-md-6" placeholder="Add Contact" />
					<button className="addButton bg-white px-2 mx-2 col-md-1">Add</button>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col-md-4">
					<h4 className="pageEntry">Contact 1</h4>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col-md-4">
					<h4 className="pageEntry">Contact 2</h4>
				</div>
			</div>
			<div className="row py-4 my-4 d-flex justify-content-between bg-white shadow-sm">
				<div className="col-md-4">
					<h4 className="pageEntry">Contact 3</h4>
				</div>
			</div>
			<div className="row my-5 d-flex justify-content-center">
				<div className="col-md-4 justify-content-center">
					<Link to="/HomePage">
						<h2 className="xlButton glass text-center py-2 px-3 m-auto">Save</h2>
					</Link>
				</div>
			</div>
		</div>
	</div>
);
*/
