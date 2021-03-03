// import React from "react";

// const Sidebarcustomerservices = () => {
//   return <div></div>;
// };

// export default Sidebarcustomerservices;

import React, { Component } from 'react';
import $ from 'jquery';
import './Sidebarcustomerservices.css';
// import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
// import { Constants } from "../../Constants";
class Sidebarcustomerservices extends Component {
    constructor(props) {
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.state = {
            checked: false
        };
    }
    componentDidMount() {
        $('.parents > a').click(function () {
            $('.parents > div.menu').not($(this).siblings()).hide();
            $(this).siblings('div.menu').slideToggle();
        });
    }
    changer = () => {
        this.props.toggler();
    };
    handleCheckBox(e) {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        console.log('siedd', this.props.sidebar);
        return (
            <>
                {/* {this.props.sidebar && ( */}
                <div className='mainsidebarss'>
                    <div className={this.props.sidebar ? 'sides activess' : 'sides'}>
                        <div className='parents'>
                            <NavLink
                                to='/customer/overview'
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px'
                                }}
                                className='link'
                            >
                                OVERVIEW
                            </NavLink>
                            {/* <div className={"menu hidden"}>
                <div>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        VIEW ALL
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        FURNITURE
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        OUTDOOR
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        DECOR & MIRRORS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        LIGHTING
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        PILLOW & THROWS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        RUGS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        KITCHEN & DINING
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        BEDDING & BATH
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        OUR FAVORITES
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div> */}
                        </div>

                        <div className={'parents'}>
                            <NavLink
                                to='/customer/help'
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                HELP(FAQS)
                            </NavLink>
                        </div>

                        <div className={'parents'}>
                            <NavLink
                                to='./pillow'
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                ORDER TRACKING
                            </NavLink>
                        </div>
                        <div className={'parents'}>
                            <NavLink
                                to='/customer/return'
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                RETURNS/ EXCHNAGES
                            </NavLink>
                        </div>
                        <div className={'parents'}>
                            <NavLink
                                to='/customer/oversized'
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                OVERSIZED ITEM QUOTE FORM
                            </NavLink>
                        </div>

                        <div className={'parents'}>
                            <NavLink
                                to='/customer/feedback'
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                FEEDBACK
                            </NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Sidebarcustomerservices;
