import React from 'react';
import img1 from '../../../assets/CamdenWhiteSofaAG20_1x1.jpg';
import img2 from '../../../assets/CapriSilkPillow20X20AV2F20.jpg';
import { Link } from 'react-router-dom';
import './style.css';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function SubHeadingCard({ id, name, imageSrc, image2Src, price }) {
    return (
        <Link
            className='subHeadingCard__link'
            to={{
                pathname: `/Product/${id}`
                // search: `?query=${id}`,
                // state: { id: id }
            }}
        >
            <Slide top cascade>
                <div className=' subHeadingCard__second'>
                    <div className='subHeadingCard__second-img'>
                        <img
                            src={imageSrc}
                            onMouseOver={(e) => (e.currentTarget.src = img2)}
                            onMouseOut={(e) => (e.currentTarget.src = imageSrc)}
                            alt={name}
                        />
                    </div>
                    <div className='subHeadingCard__second-only'>
                        <p style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <span className='subHeadingCard__boldText'> NEW </span>
                            {name}
                            {/* <p>{price}</p> */}
                        </p>
                    </div>
                    <div></div>
                </div>
            </Slide>
        </Link>
    );
}

export default SubHeadingCard;
