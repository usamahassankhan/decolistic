import React from 'react';
import img1 from '../../assets/CamdenWhiteSofaAG20_1x1.jpg';
import img2 from '../../assets/CapriSilkPillow20X20AV2F20.jpg';
import './style.css';
import SubHeadingCard from './SubHeadingCard/SubHeadingCard';
import Radar from '../Radar/Radar';
import {} from '../../actions/products';

const Data = [
    {
        id: 1,
        name: 'ABC',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 2,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 3,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 4,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    },
    {
        id: 5,
        name: 'Furniture',
        imageSrc: img1,
        image2Src: img2,
        price: '123132'
    }
];

const SubHeading = ({ pageToLoad, subHeadingName, subSubHeadingName, mainHeadingName }) => {
    return (
        <div className='subHeading__wrapper'>
            <div className='subHeading_routes'>
                <p> {`${mainHeadingName}/${subHeadingName}`} </p>
            </div>
            <div className='subHeading__heading'>
                <h2>{subHeadingName}</h2>
            </div>
            <div className='subHeading__images'>
                {Data.map(({ id, name, imageSrc, image2Src, price }) => {
                    return (
                        <SubHeadingCard
                            name={name}
                            imageSrc={imageSrc}
                            image2Src={image2Src}
                            price={price}
                            id={id}
                        />
                    );
                })}
            </div>
            <Radar />
        </div>
    );
};

export default SubHeading;
