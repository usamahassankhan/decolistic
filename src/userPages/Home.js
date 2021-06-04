import React from 'react';
import './Home.css';
import img1 from '../assets/im2.jfif';
import im1 from '../assets/im1.jfif';
import celeb from '../assets/102220_home_holiday.jpg';
import Jello from 'react-reveal/Jello';
// import im2 from "../Assets/im2.jfif";
// import img2 from "../Assets/102320_home_trees.jpg";
// import img3 from "../Assets/111420_home_clearance.jpg";
import botimg1 from '../assets/102220_home_bt_1.jpg';
import botimg2 from '../assets/110620_home_bt_2.jpg';
import botimg3 from '../assets/111420_home_bt_3.jpg';
import botimg4 from '../assets/031020_home_bt_3.jpg';
import imageback from '../assets/imageback.jfif';
import { Link } from 'react-router-dom';
import Radar from '../userComponent/Radar/Radar';
import HomeMainImage from './HomeMainImage/HomeMainImage';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Spin from 'react-reveal/Spin';
import Pulse from 'react-reveal/Pulse';
import d1 from './../images/Decolistic.png';
import d2 from './../images/d2.png';
import d3 from './../images/d3.png';
import d4 from './../images/d4.png';
import { Data } from './../../src/userComponent/SubHeading/data';
function Home() {
    return (
        <div className='wrapperHome'>
            <div className='home' style={{ paddingLeft: '28px' }}>
                <div className='top' style={{ paddingLeft: '0px' }}>
                    <div className='innerTopText aa1'>
                        <a style={{ color: ' gray', fontWeight: '800' }}>SHOP SAFELY </a>
                    </div>
                    <div className='innerTopText'>
                        <a href='#' className='aTagRightBorder'>
                            BUY ONLINE
                        </a>
                    </div>
                    <div className='innerTopText'>
                        <a href='#'>VIRTUAL STORE SERVICES</a>
                    </div>
                </div>
                <div className='mainback'>
                    <div className='back'>
                        {/* <HomeMainImage /> */}
                        {/* <Spin> */}
                        <img src={Data[1].im0} />
                        {/* </Spin> */}
                    </div>

                    {/* </Bounce> */}

                    <div className='rightContent'>
                        <Fade right cascade>
                            <div className='rightInnerBox'>
                                <img className='image1' src={Data[18].im1} alt='image1' />
                                <p>A NEW COLLECTION THAT WILL SET YOUR HEART FLUTTER</p>
                                <Link to='/new/viewall'>
                                    <u>SHOP NOW</u>
                                </Link>
                            </div>
                            <div className='rightInnerBox'>
                                <img className='image1' src={Data[18].im2} alt='image2' />
                                <p>A NEW COLLECTION THAT WILL SET YOUR HEART FLUTTER</p>
                                <Link to='/new/viewall'>
                                    <u>SHOP NOW</u>
                                </Link>
                            </div>
                        </Fade>
                    </div>
                    {/* <div className="backmaincolumn">
            <div className="backcolumn2row1">
              <img className="image1" src={im1} />
              <p>A NEW COLLECTION THAT WILL SET YOUR HEART FLUTTER</p>
              <Link>shop now</Link>
            </div>
            <br />
            <div className="backcolumn2row2">
              <img className="image2" src={im2} />
              <p>MEET THE DESIGNER BEHIND AND IONIC AN IONIC HOME OFFICE</p>
              <Link>shop now</Link>
            </div>
          </div> */}
                </div>
                {/* <div className="images">
        <div className="first">
          <div className="first-img">
            <img src={img1} alt="Bedding" />
          </div>
          <div className="first-only">Today Only:</div>
          <div className="first-off">20% OFF All Beddings</div>
          <div className="first-ref">
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className="first">
          <div className="first-img">
            <img src={img2} alt="Bedding" />
          </div>
          <div className="first-off">Upto 30% OFF Holiday Trees</div>
          <div className="first-ref">
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className="first">
          <div className="first-img">
            <img src={img3} alt="Bedding" />
          </div>
          <div className="first-off">Upto 30% OFF Clearance</div>
          <div className="first-ref">
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div> */}
                <Fade top cascade>
                    <Zoom cascade>
                        <div className='chic'>
                            <div className='chic-text'>Chic Retreat</div>
                            <div className='ref-text'>
                                <a href='/new/viewall'>Shop Furniture</a>
                            </div>
                        </div>
                    </Zoom>
                </Fade>
                <Pulse>
                    {/* <div className='gift'>
                        <div className='gift-text'>Gift Guide</div>
                        <div className='gift-ref'>
                            <a href='#'>Shop Gifts</a>
                        </div>
                    </div> */}
                    <div className='celeb1'>
                        <img src={Data[19].im1} />
                        {/* <p className='celeb-text'>Let's Decorate</p> */}
                        <p className='celeb-ref'>{/* <a href='#'>Shop Holiday</a> */}</p>
                    </div>
                </Pulse>
                {/* <Fade top cascade> */}
                {/* <Flip cascade> */}
                <div className='imagebackd'>
                    <img className='imageback' src={imageback} />
                    <div className='imagebackcontent'>
                        <p>
                            <b>WE ARE TAKING THE 50% PLEDGE</b>
                        </p>

                        <p>
                            We believe that diverse perspectives make life beautiful.
                            <br />
                            <Link>LEARN MORES</Link>
                        </p>
                    </div>
                </div>
                {/* </Flip> */}
                {/* </Fade> */}
                {/* <Flip bottom duration={2000}> */}
                <div className='celeb'>
                    <img src={Data[18].im3} />
                    {/* <p className='celeb-text'>Let's Decorate</p> */}
                    <p className='celeb-ref'>
                        <a
                            href='
                        /new/viewall'
                        >
                            Shop Holiday
                        </a>
                    </p>
                </div>
                {/* </Flip> */}

                <Radar />
                <div className='branding'>
                    <img src={d1} />
                    <img src={d2} />
                    <img src={d3} />
                    <img src={d4} />
                </div>
            </div>
        </div>
    );
}

export default Home;
