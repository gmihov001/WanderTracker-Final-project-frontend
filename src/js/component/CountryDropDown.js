import React from "react";
import countries from "../constants/countries.js";

export class CountryDropDown extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div>
				<div>
					<select id="country" name="country" className="form-control">
						<option value="Select Country">Select a Country</option>
						{countries.map(({ label, value }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</select>
				</div>
			</div>
		);
	}
}
