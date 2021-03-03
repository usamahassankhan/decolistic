import React, { useState, useEffect } from 'react';
import img1 from '../../assets/NewPageImages/123120_super_new_viewall.jpg';
import img2 from '../../assets/NewPageImages/123120_super_new_furniture.jpg';
import img3 from '../../assets/NewPageImages/012821_super_new_outdoor.jpg';
import img10 from '../../assets/NewPageImages/123120_super_new_decor.jpg';
import img5 from '../../assets/NewPageImages/123120_super_new_decor.jpg';
import img6 from '../../assets/NewPageImages/123120_super_new_bestsellers.jpg';
import img7 from '../../assets/NewPageImages/123120_super_new_dining.jpg';
import img8 from '../../assets/NewPageImages/123120_super_new_lighting.jpg';
import img9 from '../../assets/NewPageImages/123120_super_new_pillows.jpg';
import img4 from '../../assets/NewPageImages/123120_super_new_rugs.jpg';

import './style.css';
import { NavLink } from 'react-router-dom';
import { Constants } from '../../Constants';
import Radar from '../Radar/Radar';
const newPage = [
    {
        id: 1,
        name: 'VIEW ALL',
        imageSrc: img1,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'OUTDOOR',
        imageSrc: img2,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'FURNITURE',
        imageSrc: img3,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'DECOR & MIRRORS',
        imageSrc: img4,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'LIGHTING',
        imageSrc: img5,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'PILLOW & THROWS',
        imageSrc: img6,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'RUGS',
        imageSrc: img7,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'KITCHEN & DINING',
        imageSrc: img8,
        navLink: Constants.newViewAll
    },
    {
        id: 1,
        name: 'BED & BATH',
        imageSrc: img9,
        navLink: Constants.newViewAll
    }
];

function MainHeading(props) {
    const [data, setData] = useState(null);
    const [getImage, setImage] = useState(newPage);
    return (
        <div className='mainHeading__wrapper'>
            <h2 className='mainHeading__heading'>NEW</h2>

            <div className='mainHeading__CardContainer' style={{ padding: 0 }}>
                {getImage.map(({ name, imageSrc, navLink }) => {
                    return (
                        <NavLink to={navLink} className='mainHeading__navClass'>
                            <div className='mainHeading__first'>
                                <div className='mainHeading__first-img'>
                                    <img src={imageSrc} alt={name} />
                                </div>
                                <div className='mainHeading__first-only'>
                                    <p>{name}</p>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
            <Radar />
        </div>
    );
}

export default MainHeading;
