import React from "react";
import PropTypes from "prop-types";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import DetailCard from "./detailcard";
import MapIcons from "./mapicons";
export default class MapView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconsClicked: false,
			iconClickName: '',
			mapList: [{
				Designation: "Product Manager",
				Company: "Internshala",
				Location: "Gurugram, Haryana",
				Salary: "25,0000/month",
				Pasted: "Posted 2 days ago",
				Duration: "6 months",
				Star: '5',
			}, {
				Designation: "Graphic Designer",
				Company: "IGoogle",
				Location: "Gurugram, Haryana",
				Salary: "25,0000/month",
				Pasted: "Posted 2 days ago",
				Duration: "6 months",
				Star: '5'
			}, {
				Designation: "UI Designer",
				Company: "Lollipop Designs Private Ltd",
				Location: "Hawz khas, New delhi",
				Salary: "25,0000/month",
				Pasted: "Posted 15 days ago",
				Duration: "6 months",
				Star: '4'
			}, {
				Designation: "Visual Designer",
				Company: "Alcon",
				Location: "Gurugram, Haryana",
				Salary: "25,0000/month",
				Pasted: "Posted 2 days ago",
				Duration: "6 months",
				Star: '5'
			}]
		};
	}

	componentDidMount() {
	}

	iconClicked = (company) => {
		this.setState({
			iconsClicked: true,
			iconClickName: company
		})
	}

	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-0"
				style={{ maxWidth: 1200 }}
			>
				<div className="row" style={{ marginTop: 1.5 + "rem", marginBottom: 1.5 + "rem" }}>
					<div className="col-lg">
						<SimpleBarReact style={{ maxHeight: 730, maxWidth: "100%" }}>
							<DetailCard mapList={this.state.mapList} iconsClicked={this.state.iconsClicked} iconClickName={this.state.iconClickName} />
						</SimpleBarReact>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-8 " +
							this.props.tada
						}>
						<MapIcons iconClicked={this.iconClicked} />
					</div>
				</div>
			</div>
		);
	}
}

MapView.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
