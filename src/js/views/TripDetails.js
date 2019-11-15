import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Navbar2 } from "../component/Navbar2";
import PropTypes from "prop-types";

export class TripDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: {
				contacts: {
					contact: "",
					address: "",
					phone: ""
				},
				places: {
					place: "",
					url: ""
				},
				itinerary: {
					date: "",
					content: ""
				}
			},
			trip: []
		};
	}

	assignState = array => {
		this.setState({ trip: array });
	};

	/*
	handleChangeContacts = evt => {
		this.setState({
			userInput: {
				...this.state.userInput,
				contacts: { ...this.state.userInput.contacts, [evt.target.name]: evt.target.value }
			}
		});
	};

	handleChangePlaces = evt => {
		this.setState({
			userInput: {
				...this.state.userInput,
				places: { ...this.state.userInput.places, [evt.target.name]: evt.target.value }
			}
		});
	};

	handleChangeItinerary = evt => {
		this.setState({
			userInput: {
				...this.state.userInput,
				itinerary: { ...this.state.userInput.itinerary, [evt.target.name]: evt.target.value }
			}
		});
	};

	addToContacts = e => {
		e.preventDefault();
		const newContacts = this.state.trip.contacts.concat(this.state.userInput.contacts);
		this.setState({
			trip: { ...this.state.trip, contacts: newContacts },
			userInput: { ...this.state.userInput, contacts: { contact: "", address: "", phone: "" } }
		});
	};

	addToPlaces = e => {
		e.preventDefault();
		const newPlaces = this.state.trip.places.concat(this.state.userInput.places);
		this.setState({
			trip: { ...this.state.trip, places: newPlaces },
			userInput: { ...this.state.userInput, places: { place: "", url: "" } }
		});
	};

	addToItinerary = e => {
		e.preventDefault();
		const newItinerary = this.state.trip.itinerary.concat(this.state.userInput.itinerary);
		this.setState({
			trip: { ...this.state.trip, itinerary: newItinerary },
			userInput: { ...this.state.userInput, itinerary: { date: "", content: "" } }
		});
    };
    */

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<Navbar2 />
					<Context.Consumer>
						{({ store, actions }) => {
							let thisTrip = store.trips.map(aTrip => {
								if (aTrip.id == this.props.match.params.id) {
									return aTrip;
								}
							});
							console.log(thisTrip);
							assignState(thisTrip);

							console.log(this.state.trip);
							return (
								<div className="container">
									<div>Hello!</div>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</React.Fragment>
		);
	}
}

TripDetails.propTypes = {
	match: PropTypes.object
};
