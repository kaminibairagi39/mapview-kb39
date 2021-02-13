import React from "react";
import PropTypes from "prop-types";

export default class Background extends React.Component {
	componentDidMount() {
	}

	render() {
		return (
			<div id="my-background" >

			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
