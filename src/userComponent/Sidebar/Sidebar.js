import React, { Component } from 'react';
import $ from 'jquery';
import './Sidebar.css';

import { useDispatch, useSelector } from 'react-redux';
// import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { Constants } from '../../Constants';
import { getMainHeading } from '../../actions/mainHeading.js';
import { getOnlySubHeading } from '../../actions/subHeading.js';
import { getSubSubHeading } from '../../actions/subSubHeading.js';
import { connect } from 'react-redux';

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
        this.props.getMainHeading();
        this.props.getOnlySubHeading();
        this.props.getSubSubHeading();
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
        const { mainHeadings } = this.props.mainHeadings;
        const { subHeadings } = this.props.subHeadings;
        const { subSubHeadings } = this.props.subSubHeadings;
        console.log('main heading' + this.props.mainHeadings[0].mainHeadingName);
        return (
            <>
                <div className='mainsidebar'>
                    <div className={this.props.sidebar ? 'side actives' : 'side'}>
                        {this.props.mainHeadings?.map((mainH) => (
                            <div className={'parent'}>
                                <NavLink
                                    to={`/${mainH.mainHeadingName}`}
                                    activeStyle={{
                                        borderBottom: '1px solid gray',
                                        padding: '0px',
                                        color: 'black'
                                    }}
                                >
                                    {mainH.mainHeadingName}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
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
const mapDispatchToProps = {
    getMainHeading,
    getOnlySubHeading,
    getSubSubHeading
};
const mapStateToProps = (state) => ({
    mainHeadings: state.mainHeading,
    subHeadings: state.subHeadingOnly,
    subSubHeadings: state.subSubHeading
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
