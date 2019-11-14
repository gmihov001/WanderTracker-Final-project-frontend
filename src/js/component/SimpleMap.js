import React from "react";
//import "./App.css";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import PropTypes from "prop-types";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const SimpleMap = ({ markers }) => {
	return (
		<div>
			<ComposableMap>
				<Geographies geography={geoUrl}>
					{({ geographies }) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)}
				</Geographies>
				{markers.map((marker, index) => (
					<Marker key={index} coordinates={[marker[1], marker[0]]}>
						<circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
						<text textAnchor="middle" style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>
							{index}
						</text>
					</Marker>
				))}
			</ComposableMap>
		</div>
	);
};

SimpleMap.propTypes = {
	markers: PropTypes.array
};
