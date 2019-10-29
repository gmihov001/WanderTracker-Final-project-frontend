import React, { Component } from "react";
import wtLogo from "../../img/wanderTrackerLogo.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center footer-light bg-light ">
		<div className="row justify-content-center">
			<div className="col-md-5 text-center text-secondary">
				<img className="logo-footer" src={wtLogo} />

				<p>
					<strong>Contact Info</strong>
					<br />
					(888) 888-8888
					<br />
					email@wandertracker.com
					<br />
					Made with <i className="fa fa-heart text-danger" /> by Georgi and Fernando
				</p>
				<a href="#" target="_blank">
					<i className="fab fa-facebook-square" />
				</a>
				<a href="#" target="_blank">
					<i className="fab fa-twitter-square" />
				</a>
				<a href="#" target="_blank">
					<i className="fab fa-instagram" />
				</a>
			</div>
		</div>
	</footer>
);
