import React, { Component } from 'react';
import $ from 'jquery';
import './Sidebar.css';
// import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { Constants } from '../../Constants';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.state = {
            checked: false
        };
    }
    componentDidMount() {
        $('.parent > a').click(function () {
            $('.parent > div.menu').not($(this).siblings()).hide();
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
        return (
            <>
                {/* {this.props.sidebar && ( */}
                <div className='mainsidebar'>
                    <div className={this.props.sidebar ? 'side actives' : 'side'}>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.saleOffers}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                SALES & OFFERS
                            </NavLink>

                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        {/* <div className={"parent"}> */}
                                        <li>
                                            <NavLink
                                                to='/DECORSMIRRORS'
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                                onClick={this.handleCheckBox}
                                            >
                                                DECOR & MIRRORS
                                            </NavLink>

                                            {this.state.checked ? (
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <NavLink
                                                                to='/VIEWALL'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                VIEW ALL
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to='/WALL MIRROR'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                WALL MIRROR
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to='/FLOOR MIRROR'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                FLOOR MIRROR
                                                            </NavLink>
                                                        </li>

                                                        <li>
                                                            <NavLink
                                                                to='/VANITY MIRROR'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                VANITY MIRROR
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                            {/* </div> */}
                                            {/* </div> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </>
        );
    }
}
export default Sidebar;
