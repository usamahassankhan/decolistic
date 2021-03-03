import React, { Component } from 'react';
import { BsSearch, BsBoundingBoxCircles, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import './Header.css';
import { FiShoppingCart } from 'react-icons/fi';
import cb2logo from './../../assets/cb2logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import './Header.css';

import { VscLocation } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            search: false
            // sidebarhider: false,
        };
    }
    render() {
        console.log(this.props);
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
                    <div className='mainsearchdiv'>
                        <div
                            onClick={() => {
                                this.props.sidebar();
                            }}
                        >
                            <AiOutlineMenu
                                className='drawericon'
                                // onClick={() => {
                                //   this.props.sidebar();
                                // }}
                            />
                        </div>
                        <div className='searchHeader'>
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
                    <NavLink className='logo' to='/'>
                        <img className='logoimg' src={cb2logo} alt='cb2Logo' />
                    </NavLink>
                    <div classname='righticon' style={{ display: 'flex' }}>
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
