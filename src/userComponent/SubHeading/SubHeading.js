import React from 'react';
// import img1 from '../../assets/CamdenWhiteSofaAG20_1x1.jpg';
// import img2 from '../../assets/CapriSilkPillow20X20AV2F20.jpg';
// import i1 from '../../../src/images/BACIO Sofa1.jpg';
// import i2 from '../../../src/images/CAMDEN SOFA1.jpg';
// import i3 from '../../../src/images/CANE GLASS COFFEE TABLE1.jpg';
// import i4 from '../../../src/images/CUT COFFEE TABLE1.jpg';
// import i5 from '../../../src/images/CLAREMONT DARK GREY SOFA1.jpg';
// import i6 from '../../../src/images/HORSESHOE IVORY LACQUERED RECTANGULAR COFFEE TABLE1.jpg';
// import i7 from '../../../src/images/HOXTON BLACK LEATHER SOFA1.jpg';
// import i8 from '../../../src/images/HOXTON SOFA DALE BLUSH.jpg';
// import i9 from '../../../src/images/HOXTON SOFA DEAUVILLE STONE1.jpg';
// import i10 from '../../../src/images/HOXTON SOFA FELT GREY.jpg';
// import i11 from '../../../src/images/MUSE MIRROR COFFEE TABLE1.jpg';
// import i12 from '../../../src/images/RYKER Sterling Grey SOFA1.jpg';
import './style.css';
import SubHeadingCard from './SubHeadingCard/SubHeadingCard';
import Radar from '../Radar/Radar';
import {} from '../../actions/products';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import { Data } from './data';
// const Data = [
//     {
//         id: 1,
//         name: 'ABC',
//         imageSrc: i1,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 2,
//         name: 'Furniture',
//         imageSrc: i2,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 3,
//         name: 'Furniture',
//         imageSrc: i3,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 4,
//         name: 'Furniture',
//         imageSrc: i4,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i5,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i6,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i7,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i8,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i9,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i10,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i11,
//         image2Src: img2,
//         price: '123132'
//     },
//     {
//         id: 5,
//         name: 'Furniture',
//         imageSrc: i12,
//         image2Src: img2,
//         price: '123132'
//     }
// ];

{
    /* <p>❤</p> */
}

const SubHeading = ({ pageToLoad, subHeadingName, subSubHeadingName, mainHeadingName }) => {
    return (
        <div className='subHeading__wrapper'>
            <div className='subHeading_routes'>
                <p> {`${mainHeadingName}/${subHeadingName}`} </p>
            </div>
            <div className='subHeading__heading'>
                <h2>{subHeadingName}</h2>
            </div>
            {/* <Slide left cascade>  */}
            {/* <Slide top cascade > */}
            <div className='subHeading__images'>
                {/* <Slide left cascade> */}
                {Data.map(({ id, name, im0, image2Src, price }) => {
                    return (
                        // <Slide left cascade>
                        <SubHeadingCard
                            name={name}
                            imageSrc={im0}
                            image2Src={image2Src}
                            price={price}
                            id={id}
                        />
                        //   </Slide>
                    );
                })}
            </div>
            {/* </Slide> */}
            {/* </Slide> */}
            <Radar />
        </div>
    );
};

export default SubHeading;
