import React from 'react';
import botimg1 from '../../assets/102220_home_bt_1.jpg';
import botimg2 from '../../assets/110620_home_bt_2.jpg';
import botimg3 from '../../assets/111420_home_bt_3.jpg';
import botimg4 from '../../assets/031020_home_bt_3.jpg';
import './style.css';

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
                <div className='radar__bot-firsts'>
                    <div className='radar__botImageContainer'>
                        <img src={botimg1} alt />
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
                        <img src={botimg2} alt />
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
                        <img src={botimg3} alt />
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
                        <img src={botimg4} alt />
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
            </div>
        </div>
    );
}

export default Radar;
