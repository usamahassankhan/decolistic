import React from 'react';
import './index.css';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialTumbler } from 'react-icons/ti';
import { TiSocialPinterest } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';

const index = () => {
    return (
        <div className='footer-container' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='footermain'>
                <div className='column1'>
                    <div>
                        <p>Read our Privacy Policy</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <FaFacebookF className='fbicon' />

                        <TiSocialTumbler className='tweeticon' />

                        <TiSocialPinterest className='printicon' />

                        <TiSocialInstagram className='instabicon' />

                        <TiSocialYoutube className='ytubeicon' />
                    </div>
                </div>
                <div className='column2'>
                    <div className='heading'>CONTACT US</div>
                    <div>CUSTOMER SERVICE</div>
                    <div>STORE</div>
                    <div>PHONE630.388.4555</div>
                </div>
                <div className='column3'>
                    <div className='heading'> ORDER TRACKING</div>
                    <div>TRACK YOUR ORDER</div>
                    <br />

                    <div className='heading'>OUR COMPANY </div>
                    <div>ABOUT US</div>
                    <div> CAREERS</div>
                </div>

                <div className='column4'>
                    <div className='heading'> RESOURCES</div>
                    <div>CATALOGS</div>
                    <div>Decolistic INTERIORS</div>
                    <div>PRODUCT RECALLS</div>
                    <div>ACCESSIBILITY STATEMENT</div>
                </div>

                <div className='column5'>
                    <div className='heading'>OUR BRANDS</div>
                    <div>CREATE&BARREL</div>
                    <div>CREATE&KIDS</div>
                    <div>HUDSON|GRACE</div>
                    <div>SHIP TO</div>
                </div>
            </div>
            <div className='lastrow'>
                <p>
                    <p>©2021 Decolistic TERMS OF USE PRIVACY POLICY SITE INDEX AD CHOICES</p>
                </p>
                <span> |</span>
                <p className='paralast'>
                    If you are using a screen reader and are having problems using this website,
                    please call 630.388.4555 for assistance.
                </p>
            </div>
        </div>
    );
};

export default index;
