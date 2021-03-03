import React from 'react';
import './Home.css';
// import img1 from "../Assets/111420_home_bedding.jpg";
import im1 from '../assets/im1.jfif';
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
function Home() {
    return (
        <div className='wrapperHome'>
            <div className='home' style={{ paddingLeft: '0px' }}>
                <div className='top' style={{ paddingLeft: '0px' }}>
                    <div className='innerTopText'>
                        <a style={{ color: 'black', fontWeight: '500' }}>SHOP SAFELY </a>
                    </div>
                    <div className='innerTopText'>
                        <a href='#' className='aTagRightBorder'>
                            BUY ONLINE, PICKUP IN-STORE OR CURBSIDE
                        </a>
                    </div>
                    <div className='innerTopText'>
                        <a href='#'>VIRTUAL STORE SERVICES</a>
                    </div>
                </div>
                <div className='mainback'>
                    <div className='back'>
                        <HomeMainImage />
                    </div>

                    <div className='rightContent'>
                        <div className='rightInnerBox'>
                            <img className='image1' src={im1} alt='image1' />
                            <p>A NEW COLLECTION THAT WILL SET YOUR HEART FLUTTER</p>
                            <Link>
                                <u>SHOP NOW</u>
                            </Link>
                        </div>
                        <div className='rightInnerBox'>
                            <img className='image1' src={im1} alt='image1' />
                            <p>A NEW COLLECTION THAT WILL SET YOUR HEART FLUTTER</p>
                            <Link>
                                <u>SHOP NOW</u>
                            </Link>
                        </div>
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
                <div className='chic'>
                    <div className='chic-text'>Chic Retreat</div>
                    <div className='ref-text'>
                        <a href='#'>Shop Furniture</a>
                    </div>
                </div>

                <div className='gift'>
                    <div className='gift-text'>Gift Guide</div>
                    <div className='gift-ref'>
                        <a href='#'>Shop Gifts</a>
                    </div>
                </div>
                <div className='imagebackd'>
                    <img className='imageback' src={imageback} />
                    <div className='imagebackcontent'>
                        <p>
                            <b>WE ARE TAKING THE 50% PLEDGE</b>
                        </p>

                        <p>
                            We believe that diverse perspectives make life beautiful. To further
                            support the pledge, we’re taking these steps toward a more equitable and
                            inclusive culture.
                            <br />
                            <Link>LEARN MORES</Link>
                        </p>
                    </div>
                </div>

                <div className='celeb'>
                    <div className='celeb-text'>Let's Decorate</div>
                    <div className='celeb-ref'>
                        <a href='#'>Shop Holiday</a>
                    </div>
                </div>
                <Radar />
            </div>
        </div>
    );
}

export default Home;
