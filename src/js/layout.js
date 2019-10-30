import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { MainGate } from "./views/MainGate";
import { SignUp } from "./views/SignUp";
import { LogIn } from "./views/LogIn";
import { HomePage } from "./views/HomePage";
import { Stamps } from "./views/Stamps";
import { AddStamp } from "./views/AddStamp";
import { TravelDoc } from "./views/TravelDoc";
import { AddTravelDoc } from "./views/AddTravelDoc";
import { Map } from "./views/Map";
import { TripPlanner } from "./views/TripPlanner";
import { AddTrip } from "./views/AddTrip";
import { TripDetails } from "./views/TripDetails";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={MainGate} />
						<Route path="/LogIn" component={LogIn} />
						<Route path="/SignUp" component={SignUp} />
						<Route path="/HomePage" />
						<Route path="/Stamps" />
						<Route path="/AddStamp" />
						<Route path="/TravelDoc" />
						<Route path="/AddTravelDoc" />
						<Route path="/Map" />
						<Route path="/TripPlanner" component={TripPlanner} />
						<Route path="/AddTrip" component={AddTrip} />
						<Route path="/TripDetails" component={TripDetails} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
