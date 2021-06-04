import React from 'react';
import botimg1 from '../../assets/102220_home_bt_1.jpg';
import botimg2 from '../../assets/110620_home_bt_2.jpg';
import botimg3 from '../../assets/111420_home_bt_3.jpg';
import botimg4 from '../../assets/031020_home_bt_3.jpg';
import { Data } from './../../userComponent/SubHeading/data';
import './style.css';
import Slide from 'react-reveal/Slide';

function Radar() {
    return (
        <div>
            <div className='Home__radarBox'>
                <div className='rad-text'>
                    <p className='Home__radarText'>ON OUR RADAR</p>
                </div>
                <div className='Home__radarBorder'></div>
            </div>
            <div className='radar__bottom'>
                <Slide right cascade duration={3000}>
                    <div className='radar__bot-firsts'>
                        <div className='radar__botImageContainer'>
                            <img src={Data[18].im3} alt />
                        </div>
                        <div className='radar__bot-only'>
                            <p>Decolistic IN YOUR SPACE: PHOTO BY @LOGI.BERRA</p>{' '}
                        </div>
                        <div className='radar__bot-ref'>
                            <a href='#'>
                                <u className='radar__underline'>TAKE A LOOK</u>
                            </a>
                        </div>
                    </div>
                    <div className='radar__bot-firsts'>
                        <div className='radar__botImageContainer'>
                            <img src={Data[19].im1} alt />
                        </div>
                        <div className='radar__bot-only'>
                            <p>Decolistic IN YOUR SPACE: PHOTO BY @LOGI.BERRA</p>
                        </div>
                        <div className='radar__bot-ref'>
                            <a href='#'>
                                <u className='radar__underline'>TAKE A LOOK</u>
                            </a>
                        </div>
                    </div>
                    <div className='radar__bot-firsts'>
                        <div className='radar__botImageContainer'>
                            <img src={Data[1].im0} alt />
                        </div>
                        <div className='radar__bot-only'>
                            <p>Decolistic IN YOUR SPACE: PHOTO BY @LOGI.BERRA</p>{' '}
                        </div>
                        <div className='radar__bot-ref'>
                            <a href='#'>
                                <u className='radar__underline'>TAKE A LOOK</u>
                            </a>
                        </div>
                    </div>
                    <div className='radar__bot-firsts'>
                        <div className='radar__botImageContainer'>
                            <img src={Data[18].im2} alt />
                        </div>
                        <div className='radar__bot-only'>
                            <p>Decolistic IN YOUR SPACE: PHOTO BY @LOGI.BERRA</p>{' '}
                        </div>
                        <div className='radar__bot-ref'>
                            <a href='#'>
                                <u className='radar__underline'>TAKE A LOOK</u>
                            </a>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default Radar;
