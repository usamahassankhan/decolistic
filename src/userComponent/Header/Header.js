import React, { Component } from 'react';
import { BsSearch, BsBoundingBoxCircles, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import './Header.css';
import { FiShoppingCart } from 'react-icons/fi';
// import cb2logo from './../../assets/cb2logo.png';
// import cb2logo from './../../assets/homePage/decolistic-removebg-preview.png';
// import cb2logo from './../../assets/homePage/decolistic2.jpeg';
import cb2logo from './../../images/Decolistic.png';
import { AiOutlineMenu } from 'react-icons/ai';
import './Header.css';
import Spin from 'react-reveal/Spin';
import { VscLocation } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            search: false,
            width: 0,
            height: 0,
            searchshow: false
            // sidebarhider: false,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight, searchshow: '' });
    }
    render() {
        console.log(this.props);
        console.log(this.state.height, this.state.width);
        console.log(this.state);
        return (
            <div className='wrapperHeader'>
                <div className='head'>
                    {/* <div className="sidebar">
            <BsReverseLayoutTextSidebarReverse
              onClick={() => {
                this.props.sidebar();
              }}
            />
          </div> */}
                    <div
                        className='mainsearchdiv'
                        style={
                            this.state.searchshow == true && this.state.width < 400
                                ? { gap: '90px' }
                                : { gap: '0px' }
                        }
                    >
                        <div
                            onClick={() => {
                                this.props.sidebar();
                            }}
                        >
                            <AiOutlineMenu
                                className='drawericon'
                                // onClick={() => {
                                //     this.props.sidebar();
                                // }}
                            />
                        </div>
                        <div
                            className='searchHeader'
                            onClick={() => this.setState({ searchshow: !this.state.searchshow })}
                        >
                            <div className=''>
                                <BsSearch size={'16px'} />
                            </div>
                            <div className='innerSearchText'>
                                <input
                                    className={'input1'}
                                    type={'text'}
                                    style={{ border: 'none' }}
                                />
                            </div>
                        </div>
                    </div>
                    {this.state.searchshow == true && this.state.width < 400 ? (
                        ''
                    ) : (
                        <NavLink className='logo' to='/'>
                            <Bounce top duration={2000}>
                                <img className='logoimg' src={cb2logo} alt='DecolisticLogo' />
                            </Bounce>
                        </NavLink>
                    )}
                    <div
                        classname='righticon'
                        style={
                            this.state.searchshow == true && this.state.width < 400
                                ? { display: 'none' }
                                : { display: 'flex' }
                        }
                    >
                        <div>
                            <VscLocation className='locationicon' />
                        </div>
                        <div>
                            <FiShoppingCart className='carticon' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
