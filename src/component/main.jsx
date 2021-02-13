import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/src/jquery'; //for bootstrap.min.js
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import Background from "./background.jsx";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import mySearch from "../img/Logos/Search.svg";
import myFilter from "../img/Logos/filter.svg";
import X from "../img/Logos/X.svg";
import MapView from "./mapview.jsx";
import "simplebar/src/simplebar.css";
import { Col, Row, Form, ButtonGroup } from "react-bootstrap";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			// var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			// if (domRect.y <= -domRect.height) {
			// 	navBar.classList.add("fade-in-nav");
			// }
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					bounceIn={"wow bounceIn"}
				/>

				{/* Filter Modal */}
				<div className="page-content page-container" id="page-content">
					<div className="padding">
						<div className="row container d-flex justify-content-center">
							<div className="col-sm-6">
								<div id="modal-right" className="modal fade" data-backdrop="true">
									<div className="modal-dialog modal-right w-auto">
										<div className="modal-content h-100 no-radius">
											<div className="modal-header">
												<div className="modal-title text-md"><h5><b>Filters</b></h5></div> <button className="close" data-dismiss="modal">&times;</button>
											</div>
											<div className="modal-body">
												<div className="pl-2 pr-2 text-center">
													<Form>
														<b className="d-flex mb-4">Locations</b>
														<Row className="mb-4">
															<Col>
																<ButtonGroup className="d-flex mb-2">
																	<Button variant="link" style={{ border: '1px solid #e0ebeb' }}>5km</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>20km</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>50km</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>100km</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>300km</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>All</Button>
																</ButtonGroup>
															</Col>
														</Row>
														<b className="d-flex mb-4">Type of internship</b>
														<Row className="mb-4">
															<Col>
																<ButtonGroup className="d-flex mb-2">
																	<Button variant="link" style={{ border: '1px solid #e0ebeb' }}>All</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>In office</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>Remote</Button>
																	<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>Part time</Button>
																</ButtonGroup>
															</Col>
														</Row>

														<b className="d-flex mb-4">Fields of Interest</b>
														<Row className="mb-2">
															<Col>
																<div className="dropdown" style={{ width: 500 }} >
																	<InputGroup className="mb-0">
																		<FormControl size="lg" defaultValue="Graphic Design" placeholder="Graphic Design"
																			aria-label="Type location"
																			aria-describedby="basic-addon2" />
																		<InputGroup.Append>
																			<Button variant="link" style={{ border: '1px solid grey' }}><img
																				// className={"img-fluid " + this.props.fadeIn}
																				src={X}
																				alt=""
																				style={{
																					borderRadius: 10 + "%",
																					height: 28 + "px",
																					width: 28 + "px",
																					marginBottom: 2,
																					// border: '1px solid #e0ebeb'
																				}}
																			/></Button>

																		</InputGroup.Append>
																	</InputGroup>
																	<div className="dropdown-menu" style={{ width: 500 }} aria-labelledby="dropdownMenuButton">
																		<a className="dropdown-item" href="#" aria-disabled>Architecture</a>
																		<a className="dropdown-item" href="#" aria-disabled>Commerce</a>
																		<a className="dropdown-item" href="#" aria-disabled>Graphic Design</a>
																		<a className="dropdown-item" href="#" aria-disabled>Engineering</a>
																		<a className="dropdown-item" href="#" aria-disabled>Game Development</a>
																		<a className="dropdown-item" href="#" aria-disabled>Mobile App Development</a>
																		<a className="dropdown-item" href="#" aria-disabled>Digital Marketing</a>
																		<a className="dropdown-item" href="#" aria-disabled>Media</a>
																		<a className="dropdown-item" href="#" aria-disabled>Journalism</a>
																		<a className="dropdown-item" href="#" aria-disabled>Others</a>
																	</div>
																</div>
															</Col>
														</Row>
														<Row className="mb-2">
															<Col>
																<Form.Control size="lg" placeholder="Choose your second preference" />
															</Col>
														</Row>
														<Row className="mb-4">
															<Col>
																<Form.Control size="lg" placeholder="Choose your third preference" />
															</Col>
														</Row>
														<b className="d-flex mb-4">Highlights</b>
														<Row className="mb-4">
															<Col>	<ButtonGroup className="d-flex mb-2">
																<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>To Rated</Button>
																<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>Startups office</Button>
																<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>High stipened</Button>
																<Button variant="default" style={{ border: '1px solid #e0ebeb' }}>Dream</Button>
															</ButtonGroup>
															</Col>
														</Row>
													</Form>
												</div>
											</div>
											<div className="modal-footer"><button type="button" className="btn btn-light" data-dismiss="modal">Clear all</button> <button type="button" className="btn btn-primary" data-dismiss="modal">Apply filters</button></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <select className="selectpicker" data-live-search="true">
					<option data-tokens="">Type</option>
					<option data-tokens="Bangalore">Bangalore</option>
					<option data-tokens="Chennai">Chennai</option>
					<option data-tokens="Delhi">Delhi</option>
					<option data-tokens="Mumbai">Mumbai</option>
				</select> */}

				<nav className="navbar navbar-expand-lg static-top navbar-light bg-light">
					<div className="container">
						<div className="navbar-brand">
							<div className="dropdown">
								<InputGroup className="mb-0">
									<FormControl size="lg" placeholder="Type location"
										aria-label="Type location"
										aria-describedby="basic-addon2" className="dropdown-toggle"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true" />
									<InputGroup.Append>
										<Button variant="primary"><img
											className={"img-fluid " + this.props.fadeIn}
											src={mySearch}
											alt=""
											style={{
												borderRadius: 50 + "%",
												height: 18 + "px",
												width: 20 + "px",
												marginBottom: 2
											}}
										/></Button>

									</InputGroup.Append>
								</InputGroup>
								<div className="dropdown-menu" style={{ width: 250 }} aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="#" aria-disabled>Bangalore</a>
									<a className="dropdown-item" href="#" aria-disabled>Chennai</a>
									<a className="dropdown-item" href="#" aria-disabled>Delhi</a>
									<a className="dropdown-item" href="#" aria-disabled>Mumbai</a>
								</div>
							</div>
						</div>

						<button type="button" className="navbar-toggler btn btn-default" style={{ border: '1px solid #e0ebeb' }} data-toggle="modal" data-target="#modal-right" data-toggle-className="modal-open-aside" aria-controls="navbarResponsive" aria-expanded="false"><img
							className={"img-fluid " + this.props.fadeIn}
							src={myFilter}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 18 + "px",
								width: 20 + "px",
								marginBottom: 2
							}}
						/><b>Filters</b></button>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#"><button type="button" className="btn btn-default" style={{ border: '1px solid #e0ebeb' }} data-toggle="modal" data-target="#modal-right" data-toggle-className="modal-open-aside"><img
										className={"img-fluid " + this.props.fadeIn}
										src={myFilter}
										alt=""
										style={{
											borderRadius: 50 + "%",
											height: 18 + "px",
											width: 20 + "px",
											marginBottom: 2
										}}
									/><b>Filters</b></button>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<MapView
					ref={this.about}
					id="about-container"
					bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"}
				/>

			</div>
		);
	}
}

export default Main;
