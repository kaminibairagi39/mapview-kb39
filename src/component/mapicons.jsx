import React from "react";
import PropTypes from "prop-types";
import myMap from "../img/ImagesPNG/map.png";
import BlueZone from "../img/Logos/Bluezone.svg";
import Relocate from "../img/Logos/relocate.svg";
import Lollypopstudio from "../img/ImagesPNG/Lollypopstudio.png";
import Location from "../img/Logos/location.svg";
import Plus from "../img/Logos/plus.svg";
import Minus from "../img/Logos/Minus.svg";
import Redpin from "../img/Logos/Redpin.svg";
import Alcon from "../img/ImagesPNG/Alcon.png";
import Google from "../img/ImagesPNG/Google.png";
import map from "../img/ImagesPNG/map.png";
import Salary from "../img/Logos/salary.svg";
import PostedOn from "../img/Logos/postedon.svg";
import ActiveStar from "../img/Logos/activestar.svg";
import Disabledstar from "../img/Logos/Disabledstar.svg";
import chevron_right from "../img/Logos/chevron-right.svg";
import duration from "../img/Logos/duration.svg";
import Internshala_favicon_radius_3px from "../img/ImagesPNG/Internshala_favicon_radius_3px.png";
import Save from "../img/Logos/Save.svg";
import Share from "../img/Logos/Share.svg";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'

export default class MapIcons extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div>
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={myMap}
                        alt=""
                        style={{
                            // borderRadius: 50 + "%",
                            height: "100%",
                            width: "100%",
                            position: 'relative',
                            display: 'block',
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={BlueZone}
                        alt=""
                        style={{
                            height: "63%",
                            width: "53%",
                            left: '33%',
                            top: '30%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -10,
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Plus}
                        alt=""
                        style={{
                            height: 24 + "px",
                            width: 24 + "px",
                            left: '95%',
                            top: '5%',
                            position: 'absolute',
                            marginTop: -22,
                            marginLeft: -25,
                            zIndex: 2
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Minus}
                        alt=""
                        style={{
                            height: 24 + "px",
                            width: 24 + "px",
                            left: '95%',
                            top: '8%',
                            position: 'absolute',
                            marginTop: -22,
                            marginLeft: -25,
                            zIndex: 2
                        }}
                    />
                    <div style={{
                        height: 50 + "px",
                        width: 25 + "px",
                        background: 'white',
                        left: '95%',
                        top: '5%',
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -25,
                        borderRadius: "10%",
                        zIndex: 1
                    }}></div>
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Relocate}
                        alt=""
                        style={{
                            height: 36 + "px",
                            width: 36 + "px",
                            left: '93%',
                            top: '92%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -26,
                            zIndex: 2
                        }}
                    />
                    <div style={{
                        height: 50 + "px",
                        width: 50 + "px",
                        background: 'white',
                        left: '92%',
                        top: '91%',
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -25,
                        borderRadius: "50%",
                        zIndex: 1
                    }}></div>
                    <button style={{
                        background: 'none',
                        boxShadow: '0px 0px 0px transparent',
                        border: '0px solid transparent',
                        textShadow: '0px 0px 0px transparent',
                    }} onClick={() => {
                        this.props.iconClicked('Lollipop Designs Private Ltd')
                    }}>
                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={Lollypopstudio}
                            alt=""
                            style={{
                                height: 28 + "px",
                                width: 28 + "px",
                                left: '70%',
                                top: '60%',
                                position: 'absolute',
                                marginTop: -17,
                                marginLeft: -25,
                                zIndex: 2
                            }}
                        /></button>
                    <div style={{
                        height: 28 + "px",
                        width: 200 + "px",
                        left: '76%',
                        top: '59%',
                        position: 'absolute',
                        marginTop: -13,
                        marginLeft: -25,
                        zIndex: 2
                    }}>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 12 }}>Lollypop Designs Private Ltd</div>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 10 }}>UI Designer</div>
                        <div className="d-flex">
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                        </div>
                    </div>
                    <button style={{
                        background: 'none',
                        boxShadow: '0px 0px 0px transparent',
                        border: '0px solid transparent',
                        textShadow: '0px 0px 0px transparent',
                    }} onClick={() => {
                        this.props.iconClicked('Alcon')
                    }}>
                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={Redpin}
                            alt=""
                            style={{
                                height: 58 + "px",
                                width: 59 + "px",
                                left: '68%',
                                top: '60%',
                                position: 'absolute',
                                marginTop: -25,
                                marginLeft: -25,
                                zIndex: 1
                            }}
                        />

                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={Alcon}
                            alt=""
                            style={{
                                height: 21 + "px",
                                width: 21 + "px",
                                left: '73%',
                                top: '74%',
                                position: 'absolute',
                                marginTop: -19,
                                marginLeft: -21,
                                zIndex: 2
                            }}
                        /></button>
                    <div style={{
                        height: 28 + "px",
                        width: 200 + "px",
                        left: '79%',
                        top: '74%',
                        position: 'absolute',
                        marginTop: -13,
                        marginLeft: -25,
                        zIndex: 2
                    }}>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 12 }}>Alcon</div>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 10 }}>Visual Designer</div>
                        <div className="d-flex">
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                        </div>
                    </div>
                    <button style={{
                        background: 'none',
                        boxShadow: '0px 0px 0px transparent',
                        border: '0px solid transparent',
                        textShadow: '0px 0px 0px transparent',
                    }} onClick={() => {
                        this.props.iconClicked('IGoogle')
                    }}>
                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={Redpin}
                            alt=""
                            style={{
                                height: 45 + "px",
                                width: 45 + "px",
                                left: '72%',
                                top: '74%',
                                position: 'absolute',
                                marginTop: -25,
                                marginLeft: -25,
                                zIndex: 1
                            }}
                        />
                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={Google}
                            alt=""
                            style={{
                                height: 28 + "px",
                                width: 28 + "px",
                                left: '50%',
                                top: '34%',
                                position: 'absolute',
                                marginTop: -12,
                                marginLeft: -25,
                                zIndex: 2
                            }}
                        /></button>
                    <div style={{
                        height: 28 + "px",
                        width: 200 + "px",
                        left: '56%',
                        top: '33%',
                        position: 'absolute',
                        marginTop: -13,
                        marginLeft: -25,
                        zIndex: 2
                    }}>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 12 }}>Google,Inc</div>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 10 }}>Graphic Designer</div>
                        <div className="d-flex">
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                        </div>
                    </div>
                    <button style={{
                        background: 'none',
                        boxShadow: '0px 0px 0px transparent',
                        border: '0px solid transparent',
                        textShadow: '0px 0px 0px transparent',
                    }} onClick={() => {
                        this.props.iconClicked('Internshala')
                    }}>
                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={Redpin}
                            alt=""
                            style={{
                                height: 58 + "px",
                                width: 59 + "px",
                                left: '48%',
                                top: '34%',
                                position: 'absolute',
                                marginTop: -20,
                                marginLeft: -25,
                                zIndex: 1
                            }}
                        />

                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={Internshala_favicon_radius_3px}
                            alt=""
                            style={{
                                height: 21 + "px",
                                width: 21 + "px",
                                left: '37%',
                                top: '57%',
                                position: 'absolute',
                                marginTop: -18,
                                marginLeft: -21,
                                zIndex: 2
                            }}
                        /></button>
                    <div style={{
                        height: 28 + "px",
                        width: 200 + "px",
                        left: '43%',
                        top: '54%',
                        position: 'absolute',
                        marginTop: -13,
                        marginLeft: -25,
                        zIndex: 2
                    }}>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 12 }}>Internshala</div>
                        <div className="d-flex" style={{ color: '#007bff', fontSize: 10 }}>Product Manager</div>
                        <div className="d-flex">
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                        </div>
                    </div>

                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Redpin}
                        alt=""
                        style={{
                            height: 46 + "px",
                            width: 45 + "px",
                            left: '36%',
                            top: '57%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -25,
                            zIndex: 1
                        }}
                    />

                    {/* Loction */}
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Location}
                        alt=""
                        style={{
                            height: 55 + "px",
                            width: 40 + "px",
                            left: '35%',
                            top: '6%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -25,
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Location}
                        alt=""
                        style={{
                            height: 40 + "px",
                            width: 28 + "px",
                            left: '23%',
                            top: '24%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -25,
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Location}
                        alt=""
                        style={{
                            height: 35 + "px",
                            width: 30 + "px",
                            left: '36%',
                            top: '33%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -25,
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Location}
                        alt=""
                        style={{
                            height: 35 + "px",
                            width: 24 + "px",
                            left: '64%',
                            top: '13%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -26,
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Location}
                        alt=""
                        style={{
                            height: 35 + "px",
                            width: 25 + "px",
                            left: '83%',
                            top: '22%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -26,
                        }}
                    />
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Location}
                        alt=""
                        style={{
                            height: 35 + "px",
                            width: 26 + "px",
                            left: '25%',
                            top: '89%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -26,
                        }}
                    />
                    <div style={{
                        height: 28 + "px",
                        width: 200 + "px",
                        left: '29%',
                        top: '87%',
                        position: 'absolute',
                        marginTop: -13,
                        marginLeft: -25,
                        zIndex: 2
                    }}>
                        <div className="d-flex" style={{ color: 'grey', fontSize: 12 }}>Squadstack</div>
                        <div className="d-flex" style={{ color: 'grey', fontSize: 10 }}>Product Designer</div>
                        <div className="d-flex">
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                        </div>
                    </div>
                    <img
                        className={"img-fluid " + this.props.fadeIn}
                        src={Location}
                        alt=""
                        style={{
                            height: 35 + "px",
                            width: 26 + "px",
                            left: '73%',
                            top: '93%',
                            position: 'absolute',
                            marginTop: -25,
                            marginLeft: -26,
                        }}
                    />
                    <div style={{
                        height: 28 + "px",
                        width: 200 + "px",
                        left: '77%',
                        top: '91%',
                        position: 'absolute',
                        marginTop: -13,
                        marginLeft: -25,
                        zIndex: 2
                    }}>
                        <div className="d-flex" style={{ color: 'grey', fontSize: 12 }}>Vacations Labs</div>
                        <div className="d-flex" style={{ color: 'grey', fontSize: 10 }}>UI/UX Designer</div>
                        <div className="d-flex">
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={ActiveStar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                            <img
                                src={Disabledstar}
                                alt=""
                                style={{
                                    height: 12 + "px",
                                    width: 12 + "px",
                                    marginRight: 1
                                }}
                            />
                        </div>
                    </div>
                    <div style={{
                        height: 20 + "px",
                        width: 60 + "px",
                        left: '29%',
                        top: '18%',
                        fontSize: 12,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}>Green park</div>
                    <div style={{
                        height: 20 + "px",
                        width: 60 + "px",
                        left: '76%',
                        top: '33%',
                        fontSize: 12,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}>Rohini</div>
                    <div style={{
                        height: 20 + "px",
                        width: 60 + "px",
                        left: '30%',
                        top: '68%',
                        fontSize: 12,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}>Saket</div>
                    <div style={{
                        height: 20 + "px",
                        width: 80 + "px",
                        left: '52%',
                        top: '45%',
                        fontSize: 12,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}>Malviya nagar</div>
                    <div style={{
                        height: 20 + "px",
                        width: 60 + "px",
                        left: '56%',
                        top: '63%',
                        fontSize: 12,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}>Hauz khas</div>
                    <div style={{
                        height: 20 + "px",
                        width: 70 + "px",
                        left: '47%',
                        top: '77%',
                        fontSize: 14,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}><b>New Delhi</b></div>
                    <div style={{
                        height: 20 + "px",
                        width: 70 + "px",
                        left: '63%',
                        top: '89%',
                        fontSize: 12,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}>Laxmi nagar</div>
                    <div style={{
                        height: 20 + "px",
                        width: 70 + "px",
                        left: '40%',
                        top: '97%',
                        fontSize: 12,
                        position: 'absolute',
                        marginTop: -25,
                        marginLeft: -26,
                    }}>Nirman vihar</div>
                </div>

            </div>
        );
    }
}

MapIcons.propTypes = {
    aboutRef: PropTypes.object,
    bounceIn: PropTypes.string
};
