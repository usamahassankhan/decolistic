import React from 'react';
import img1 from '../../../assets/CamdenWhiteSofaAG20_1x1.jpg';
import img2 from '../../../assets/CapriSilkPillow20X20AV2F20.jpg';
import { Link } from 'react-router-dom';
import './style.css';

function SubHeadingCard({ id, name, imageSrc, image2Src, price }) {
    return (
        <Link
            className='subHeadingCard__link'
            to={{
                pathname: '/Product',
                search: `?query=${id}`,
                state: { id: id }
            }}
        >
            <div className=' subHeadingCard__second'>
                <div className='subHeadingCard__second-img'>
                    <img
                        src={img1}
                        onMouseOver={(e) => (e.currentTarget.src = img2)}
                        onMouseOut={(e) => (e.currentTarget.src = img1)}
                        alt={name}
                    />
                </div>
                <div className='subHeadingCard__second-only'>
                    <p>
                        <span className='subHeadingCard__boldText'> NEW </span>
                        BOZZI MONGOLIAN SHEEPSKIN CHAIR
                        <p>PKR 427601.39</p>
                    </p>
                </div>
                <div></div>
            </div>
        </Link>
    );
}

export default SubHeadingCard;
