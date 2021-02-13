import React from "react";
import PropTypes from "prop-types";
import Location from "../img/Logos/location.svg";
import Salary from "../img/Logos/salary.svg";
import PostedOn from "../img/Logos/postedon.svg";
import ActiveStar from "../img/Logos/activestar.svg";
import Disabledstar from "../img/Logos/Disabledstar.svg";
import chevron_right from "../img/Logos/chevron-right.svg";
import duration from "../img/Logos/duration.svg";
import Internshala_favicon_radius_3px from "../img/ImagesPNG/Internshala_favicon_radius_3px.png";
import Save from "../img/Logos/Save.svg";
import Share from "../img/Logos/Share.svg";
import "simplebar/src/simplebar.css";
import Card from 'react-bootstrap/Card'
// import { Modal } from "bootstrap";
import { Button, Modal } from 'react-bootstrap';
import Alcon from "../img/ImagesPNG/Alcon.png";
import Google from "../img/ImagesPNG/Google.png";
import Lollypopstudio from "../img/ImagesPNG/Lollypopstudio.png";
// import Modal from 'react-bootstrap/lib/Modal'
// import Button from 'react-bootstrap/Button'

export default class DetailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            show: false,
            testList: {}
        }

        this.handleClick = this.handleClick.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleClick = (event) => {
        event.preventDefault()
        console.log("algo");
        this.setState({
            modalShow: true
        })
        // this.props.findPokemon('eevee');
        //console.log(this.refs.name);
    }

    render() {
        return (
            this.props.mapList.map((x, i) => (
                <div className="container" key={i}>

                    <div className="row" >
                        <div className="card" style={(this.props.iconClickName == x.Company && this.props.iconsClicked) ? { borderColor: '#007bff', borderWidth: 'medium', width: 22 + "rem", marginBottom: 10 } : { width: 22 + "rem", marginBottom: 10 }}>
                            {/* <Button onClick={this.handleClick}>Find</Button> */}
                            <div className="card-body">
                                <div className="buy d-flex justify-content-between align-items-center">
                                    <div className="d-flex"><h6><b>{x.Designation}</b></h6></div>
                                    {x.Company == 'Internshala' ? (<img
                                        src={Internshala_favicon_radius_3px}
                                        alt=""
                                        style={{
                                            height: 30 + "px",
                                            width: 30 + "px",
                                            marginRight: 1
                                        }}
                                    />) : x.Company == 'IGoogle' ? (
                                        <img
                                            src={Google}
                                            alt=""
                                            style={{
                                                height: 30 + "px",
                                                width: 30 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                    ) : x.Company == 'Lollipop Designs Private Ltd' ? (
                                        <img
                                            src={Alcon}
                                            alt=""
                                            style={{
                                                height: 30 + "px",
                                                width: 30 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                    ) : (
                                                    <img
                                                        src={Lollypopstudio}
                                                        alt=""
                                                        style={{
                                                            height: 30 + "px",
                                                            width: 30 + "px",
                                                            marginRight: 1
                                                        }}
                                                    />
                                                )}

                                </div>
                                <div className="card-subtitle d-flex">{x.Company}</div>
                                <div className="buy d-flex justify-content-between align-items-center">
                                    {x.Star == '5' ? (<div>
                                        <img
                                            src={ActiveStar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={ActiveStar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={ActiveStar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={ActiveStar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={ActiveStar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                    </div>) : (<div>
                                        <img
                                            src={ActiveStar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={ActiveStar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={Disabledstar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={Disabledstar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                        <img
                                            src={Disabledstar}
                                            alt=""
                                            style={{
                                                height: 16 + "px",
                                                width: 16 + "px",
                                                marginRight: 1
                                            }}
                                        />
                                    </div>
                                        )}
                                </div>
                                <div className="d-flex mt-2" style={{ fontSize: 14, color: 'grey' }}><img
                                    className={"img-fluid " + this.props.fadeIn}
                                    src={Location}
                                    alt=""
                                    style={{
                                        height: 18 + "px",
                                        width: 18 + "px",
                                        marginTop: 3,
                                        marginRight: 4
                                    }}
                                />{x.Location}</div>
                                <div className="d-flex" style={{ fontSize: 14, color: 'grey' }}><img
                                    className={"img-fluid " + this.props.fadeIn}
                                    src={Salary}
                                    alt=""
                                    style={{
                                        height: 16 + "px",
                                        width: 16 + "px",
                                        marginTop: 3,
                                        marginRight: 5
                                    }}
                                />{x.Salary}{'     '}
                                    <img
                                        src={duration}
                                        alt=""
                                        style={{
                                            height: 16 + "px",
                                            width: 16 + "px",
                                            marginTop: 3,
                                            marginLeft: 20,
                                            marginRight: 5
                                        }}
                                    />{x.Duration}</div>
                                <div className="d-flex" style={{ fontSize: 14, color: 'grey' }}><img
                                    className={"img-fluid " + this.props.fadeIn}
                                    src={PostedOn}
                                    alt=""
                                    style={{
                                        height: 16 + "px",
                                        width: 16 + "px",
                                        marginTop: 3,
                                        marginRight: 5
                                    }}
                                />{x.Pasted}</div>
                                <div className="buy d-flex justify-content-between align-items-center">
                                    <div>
                                        <img
                                            src={Save}
                                            alt=""
                                            style={{
                                                height: 20 + "px",
                                                width: 20 + "px",
                                                marginTop: 10,
                                                marginRight: 20
                                            }}
                                        />
                                        <img
                                            src={Share}
                                            alt=""
                                            style={{
                                                height: 20 + "px",
                                                width: 20 + "px",
                                                marginTop: 10,
                                            }}
                                        />
                                    </div>
                                    <Card.Link href="#" className="mt-2 ml-2">
                                        <Button variant="light" style={{
                                            background: 'none',
                                            boxShadow: '0px 0px 0px transparent',
                                            border: '0px solid transparent',
                                            textShadow: '0px 0px 0px transparent',
                                            color: '#007bff',
                                        }} onClick={() => {
                                            this.setState({ show: true, testList: x })
                                        }}>
                                            View details<img
                                                src={chevron_right}
                                                alt=""
                                                style={{
                                                    height: 16 + "px",
                                                    width: 16 + "px",
                                                    marginBottom: 5,
                                                }}
                                            />
                                        </Button>
                                    </Card.Link>



                                    <Modal size="lg" show={this.state.show} onHide={() => {
                                        this.setState({ show: false })
                                    }}>
                                        <Modal.Header closeButton>
                                            <Modal.Body><div className="buy d-flex justify-content-between align-items-center">
                                                <div className="d-flex"><h6><b>{this.state.testList.Designation}</b></h6></div>
                                                {this.state.testList.Company == 'Internshala' ? (<img
                                                    src={Internshala_favicon_radius_3px}
                                                    alt=""
                                                    style={{
                                                        height: 30 + "px",
                                                        width: 30 + "px",
                                                        marginRight: 1
                                                    }}
                                                />) : this.state.testList.Company == 'IGoogle' ? (
                                                    <img
                                                        src={Google}
                                                        alt=""
                                                        style={{
                                                            height: 30 + "px",
                                                            width: 30 + "px",
                                                            marginRight: 1
                                                        }}
                                                    />
                                                ) : this.state.testList.Company == 'Lollipop Designs Private Ltd' ? (
                                                    <img
                                                        src={Alcon}
                                                        alt=""
                                                        style={{
                                                            height: 30 + "px",
                                                            width: 30 + "px",
                                                            marginRight: 1
                                                        }}
                                                    />
                                                ) : (
                                                                <img
                                                                    src={Lollypopstudio}
                                                                    alt=""
                                                                    style={{
                                                                        height: 30 + "px",
                                                                        width: 30 + "px",
                                                                        marginRight: 1
                                                                    }}
                                                                />
                                                            )}

                                            </div>
                                                <div className="card-subtitle d-flex">{this.state.testList.Company}</div>
                                                <div className="buy d-flex justify-content-between align-items-center">
                                                    {this.state.testList.Star == '5' ? (<div>
                                                        <img
                                                            src={ActiveStar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={ActiveStar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={ActiveStar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={ActiveStar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={ActiveStar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                    </div>) : (<div>
                                                        <img
                                                            src={ActiveStar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={ActiveStar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={Disabledstar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={Disabledstar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                        <img
                                                            src={Disabledstar}
                                                            alt=""
                                                            style={{
                                                                height: 16 + "px",
                                                                width: 16 + "px",
                                                                marginRight: 1
                                                            }}
                                                        />
                                                    </div>
                                                        )}
                                                </div>
                                                <div className="d-flex mt-2" style={{ fontSize: 14, color: 'grey' }}><img
                                                    className={"img-fluid " + this.props.fadeIn}
                                                    src={Location}
                                                    alt=""
                                                    style={{
                                                        height: 18 + "px",
                                                        width: 18 + "px",
                                                        marginTop: 3,
                                                        marginRight: 4
                                                    }}
                                                />{this.state.testList.Location}</div>
                                                <div className="d-flex" style={{ fontSize: 14, color: 'grey' }}><img
                                                    className={"img-fluid " + this.props.fadeIn}
                                                    src={Salary}
                                                    alt=""
                                                    style={{
                                                        height: 16 + "px",
                                                        width: 16 + "px",
                                                        marginTop: 3,
                                                        marginRight: 5
                                                    }}
                                                />{this.state.testList.Salary}{'     '}
                                                    <img
                                                        src={duration}
                                                        alt=""
                                                        style={{
                                                            height: 16 + "px",
                                                            width: 16 + "px",
                                                            marginTop: 3,
                                                            marginLeft: 20,
                                                            marginRight: 5
                                                        }}
                                                    />{this.state.testList.Duration}{'     '}<img
                                                        className={"img-fluid " + this.props.fadeIn}
                                                        src={PostedOn}
                                                        alt=""
                                                        style={{
                                                            height: 16 + "px",
                                                            width: 16 + "px",
                                                            marginTop: 3,
                                                            marginLeft: 20,
                                                            marginRight: 5
                                                        }}
                                                    />{this.state.testList.Pasted}</div></Modal.Body>
                                        </Modal.Header>
                                        <Modal.Body style={{ marginLeft: 10 }}>
                                            <b>About the company</b>
                                            <div className="d-flex mt-2" style={{ fontSize: 14, color: 'grey' }}>{this.state.testList.Company}, LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Five technology companies in the U.S. information technology industry, alongside Amazon, Facebook, Apple, and Microsoft.</div>
                                            <br />
                                            <b>About the internship</b>
                                            <div className="d-flex mt-2" style={{ fontSize: 14, color: 'grey' }}>• As a User Interface Designer, you will be required to work closely with Product Managers, Developers, Consultants & other key stakeh olders. <br />
• Your primary task as hand would be to design mockups & create prototypes basis the signed-off wireframes & userflows.
</div>
                                            <br />
                                            <b>Skip required</b>
                                            <div className="row">

                                                <div className="rounded" style={{ margin: 10, paddingLeft: 10, width: 150, height: 30, borderRadius: "40%", border: '1px solid grey' }}>
                                                    Adobe photoshop
                                        </div>
                                                <div className="rounded" style={{ margin: 10, paddingLeft: 10, width: 150, height: 30, borderRadius: "40%", border: '1px solid grey' }}>
                                                    Adobe illustrator
                                        </div>
                                                <div className="rounded" style={{ margin: 10, paddingLeft: 10, width: 80, height: 30, borderRadius: "40%", border: '1px solid grey' }}>
                                                    HTML
                                        </div>
                                                <div className="rounded" style={{ margin: 10, paddingLeft: 10, width: 180, height: 30, borderRadius: "40%", border: '1px solid grey' }}>
                                                    Adobe After Effects
                                        </div>
                                                <div className="rounded" style={{ margin: 10, paddingLeft: 10, width: 80, height: 30, borderRadius: "40%", border: '1px solid grey' }}>
                                                    Figma
                                        </div>
                                            </div>
                                            <br />
                                            <b>Who can apply</b>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => {
                                                this.setState({ show: false })
                                            }}>
                                                Close
          </Button>
                                            <Button variant="primary" onClick={() => {
                                                this.setState({ show: false })
                                            }}>
                                                Apply Now
          </Button>
                                        </Modal.Footer>
                                    </Modal>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        );
    }
}

DetailCard.propTypes = {
    aboutRef: PropTypes.object,
    bounceIn: PropTypes.string
};
