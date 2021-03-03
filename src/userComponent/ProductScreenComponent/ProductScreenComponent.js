import React from 'react';
import './style.css';
import tickImage from '../../assets/ProductPageImages/tick.png';
import starRating from '../../assets/starRating.png';
import color1 from '../../assets/ProductPageImages/choice_663zm0.jpg';
import color2 from '../../assets/ProductPageImages/choice_1221zm0.jpg';
import color3 from '../../assets/ProductPageImages/choice_1624zm.jpg';
import color4 from '../../assets/ProductPageImages/choice_1898zm0.jpg';
import color5 from '../../assets/ProductPageImages/choice_2005zm0.jpg';

import colorPicker from '../../assets/ProductPageImages/colorPicker.png';
import productImage from '../../assets/ProductPageImages/bozzi-mongolian-sheepskin-chair.jpg';
import productImage1 from '../../assets/ProductPageImages/BozziMnglnShpsknChair3QBSSS21.jpg';
import productImage2 from '../../assets/ProductPageImages/BozziMnglnShpsknChair3QBSSS210.jpg';
import productImage3 from '../../assets/ProductPageImages/BozziMnglnShpsknChair3QSSS21.jpg';
import productImage4 from '../../assets/ProductPageImages/BozziMnglnShpsknChairAVSSS21.jpg';
import productImage5 from '../../assets/ProductPageImages/BozziMnglnShpsknChairSDSSS21.jpg';
import productImage6 from '../../assets/ProductPageImages/mainfurnitureImage.jpeg';

const pageData = {
    nameOfProduct: 'KST SOFA',
    priceOfProduct: '393625',
    companyName: 'CB2 exclusive',
    review: '0.0',
    model: 'SKU:14544',
    color: [
        {
            name: 'Verity, Sand',
            image: color1
        },
        {
            name: 'Verity, Sand',
            image: color2
        },
        {
            name: 'Verity, Sand',
            image: color3
        },
        {
            name: 'Verity, Sand',
            image: color4
        },
        {
            name: 'Verity, Sand',
            image: color5
        }
    ],
    productImage: {
        color: [
            {
                name: 'Verity,Sand',
                images: []
            }
        ]
    }
};

function ProductHeader() {
    return (
        <div style={{ marginTop: '4%' }} className='product__wrapper'>
            <div className='bodyBack'>
                <div style={{ padding: '0px' }}>
                    <div className='product_routes'>
                        <pre>
                            FURNITURE / LIVING ROOM FURNITURE / ACCENT CHAIRS / BOZZI MONGOLIAN
                            SHEEPSKIN CHAIR{' '}
                        </pre>
                    </div>
                    {/* first line */}
                    <div className='productTitle'>
                        <div
                            className='leftProductTitle product__boldText'
                            style={{ marginBottom: '0px' }}
                        >
                            <p style={{ padding: 0, margin: 0 }}>{pageData.nameOfProduct}</p>{' '}
                        </div>
                        <div className='rightProductTitle product__boldText'>
                            {' '}
                            <p
                                style={{ padding: 0, margin: 0 }}
                            >{`PKR ${pageData.priceOfProduct}`}</p>{' '}
                        </div>
                    </div>
                    {/* second line */}
                    <div className='productTitle'>
                        <div className='leftProductTitle product__smallText '>
                            <p style={{ padding: 0, margin: 0, marginTop: '2px' }}>
                                {pageData.companyName}
                            </p>{' '}
                        </div>
                        <div
                            className='productTitle'
                            style={{ paddingTop: '0px', alignItems: 'center' }}
                        >
                            <img
                                style={{ padding: '0px', paddingRight: '10px', height: '30px' }}
                                src={starRating}
                                alt='stars'
                            />
                            <div
                                className='rightBorder product__smallText '
                                style={{ marginRight: '10px', marginTop: '0px' }}
                            >
                                <u style={{ padding: 0, margin: 0 }}>({pageData.review}) Reviews</u>
                            </div>
                            <div className='product__smallText'>
                                <p style={{ padding: 0, margin: 0 }}> {pageData.model}</p>
                            </div>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='product__smallTitle'>
                            <p> International Customers</p>
                        </div>
                        <div className='product__smallText'>
                            <p>
                                To order this item, please call (00+1) 630-369-4464 , or fax (00+1)
                                630-527-1448
                            </p>
                        </div>
                        <div className='product__underlineSmallText'>
                            <u style={{ paddingLeft: '0px' }}>
                                View International Availability Details
                            </u>
                        </div>
                    </div>
                </div>
                <div className='colorLine productTitle'>
                    <div className='leftImages productTitle '>
                        <div className='imageColorController' style={{ paddingLeft: '0px' }}>
                            <img
                                style={{ paddingLeft: '0px' }}
                                src={pageData.color[0].image}
                                alt={pageData.color[0].name}
                            />
                            <img
                                style={{ paddingLeft: '0px' }}
                                src={pageData.color[1].image}
                                alt={pageData.color[0].name}
                            />
                            <img
                                style={{ paddingLeft: '0px' }}
                                src={pageData.color[2].image}
                                alt={pageData.color[0].name}
                            />
                            <img
                                style={{ paddingLeft: '0px' }}
                                src={pageData.color[3].image}
                                alt={pageData.color[0].name}
                            />
                            <img
                                style={{ paddingLeft: '0px' }}
                                src={pageData.color[4].image}
                                alt={pageData.color[0].name}
                            />
                        </div>
                        <div className='seeColorBorder productTitle '>
                            <img
                                style={{ padding: '0px' }}
                                src={colorPicker}
                                alt='colorPicker'
                                width='30px'
                                height='30px'
                            />
                            <div style={{ padding: '0px' }} className='textController'>
                                SEE ALL COLORS
                            </div>
                        </div>
                    </div>
                    <div className='rightButtonContainer productTitle'>
                        <div className='product__button '>
                            <p
                                style={{
                                    color: 'white',
                                    alignSelf: 'center',
                                    marginBottom: '10px',
                                    marginTop: '10px'
                                }}
                            >
                                REQUEST A QUOTE
                            </p>
                        </div>
                    </div>
                </div>
                <div className='productTitle' style={{ paddingTop: '0px' }}>
                    <div className='productTitle' style={{ paddingTop: '15px' }}>
                        <img
                            style={{ paddingLeft: '0px' }}
                            src={pageData.color[0].image}
                            width='30px'
                            height='15px'
                            alt='colorSelected'
                        />
                        <div className='product_fabricColor'>
                            <p style={{ marginTop: '0', marginLeft: '5px' }}>
                                <span style={{ fontWeight: 'bold' }}>Fabric:</span>{' '}
                                {pageData.color[0].name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mainImageSlider'>
                    <img src={productImage} alt='productImage' width='100%' />
                </div>
                <div className='miniImageSetter' style={{ padding: 0 }}>
                    <div className='miniImages' style={{ padding: 0 }}>
                        <img src={productImage} alt='miniImages' width='60px' height='60px' />
                        <img src={productImage1} alt='miniImages' width='60px' height='60px' />
                        <img src={productImage2} alt='miniImages' width='60px' height='60px' />
                        <img src={productImage3} alt='miniImages' width='60px' height='60px' />
                        <img src={productImage4} alt='miniImages' width='60px' height='60px' />
                        <img src={productImage5} alt='miniImages' width='60px' height='60px' />
                    </div>
                </div>

                <div className='product__centerBody' style={{ padding: 0, marginTop: '10px' }}>
                    <div style={{ padding: 0 }} className='product__centerTitle'>
                        <p>CREATE YOUR CUSTOM DESIGN</p>{' '}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='leftBody' style={{ flex: 1, padding: '20px' }}>
                            <img
                                src={productImage6}
                                alt='productImage'
                                width='100%'
                                height='100%'
                                style={{ objectFit: 'fill' }}
                            />
                        </div>
                        <div
                            className='rightBody'
                            style={{
                                flex: 1,
                                padding: 10,
                                paddingTop: 10,
                                paddingBottom: 20
                            }}
                        >
                            <div
                                style={{
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{ textAlign: 'start' }}>
                                    <div className='product_boldSmall'>
                                        <p>SELECT FABRIC</p>
                                    </div>
                                    <div className='product__smallerText' style={{ margin: 0 }}>
                                        <p>Verity, Green</p>
                                    </div>
                                </div>
                                <div style={{ padding: '0' }}>
                                    <img
                                        src={pageData.color[0].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                </div>
                            </div>
                            <div
                                className='topBorder'
                                style={{
                                    marginTop: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start'
                                }}
                            >
                                <div className='product__smallerText' style={{ marginTop: 20 }}>
                                    <p>
                                        <span style={{ fontWeight: '400' }}>STOCK FABRIC:</span>{' '}
                                        (1-2) Weeks Expected Delivery
                                    </p>
                                </div>
                                <div
                                    style={{ padding: 0, marginTop: 10 }}
                                    className='product__colorImageContainer'
                                >
                                    <img
                                        src={pageData.color[0].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                    <img
                                        src={pageData.color[1].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                </div>
                                <div
                                    style={{ textAlign: 'start', marginTop: 20 }}
                                    className='product__smallerText'
                                >
                                    <p>
                                        <span style={{ fontWeight: '400' }}>
                                            CUSTOM ORDER FABRICS:
                                        </span>{' '}
                                        (20 to 24 weeks expected delivery)
                                    </p>
                                    <p>Prices vary by group</p>
                                </div>
                                <div className='product_boldSmall'>
                                    <p>PRICE GROUP 1</p>
                                </div>
                                <div
                                    style={{ padding: 0 }}
                                    className='product__colorImageContainer'
                                >
                                    <img
                                        src={pageData.color[2].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                    <img
                                        src={pageData.color[3].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                </div>
                                <div className='product_boldSmall'>
                                    <p>PRICE GROUP 2</p>
                                </div>
                                <div
                                    style={{ padding: 0 }}
                                    className='product__colorImageContainer'
                                >
                                    <img
                                        src={pageData.color[4].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                    <img
                                        src={pageData.color[0].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                </div>

                                <div className='product_boldSmall'>
                                    <p>PRICE GROUP 3</p>
                                </div>
                                <div
                                    style={{ padding: 0 }}
                                    className='product__colorImageContainer'
                                >
                                    <img
                                        src={pageData.color[0].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                    <img
                                        src={pageData.color[3].image}
                                        alt='productImage'
                                        width='60px'
                                        height='60px'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='borderTopBottom'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <div className='product_middleHeading'>
                        <p>DIMENSIONS</p>
                    </div>
                    <div className='product_middleHeading'>
                        <p>REVIEWS</p>
                    </div>
                    <div className='product_middleHeading'>
                        <p>CARE</p>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ textAlign: 'start' }} className='product__smallerMiddleText'>
                    <p>
                        Sand velvet sofa designed by Ross Cassidy gives a contemporary update to a
                        traditional '60s-inspired rolled-arm design, with elegance reminiscent of an
                        old-world English film set. Monochromatic welts along the edges finish
                        things off, while down-feather cushions keep it cozy. Outfitted in a
                        FSC-certified wood frame. CB2 exclusive.
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <ul className='product__tableText'>
                        <li>Designed by Ross Cassidy</li>
                        <li>Designed by Ross Cassidy</li>
                        <li>Designed by Ross Cassidy</li>
                    </ul>
                    <ul className='product__tableText'>
                        <li>Designed by Ross Cassidy</li>
                        <li>Designed by Ross Cassidy</li>
                        <li>Designed by Ross Cassidy</li>
                    </ul>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginLeft: '8px'
                }}
            >
                <div className='borderLeft'>
                    <u>PRINT</u>
                </div>
                <div className='borderLeft'>
                    <u>EMAIL</u>
                </div>
            </div>
            <div style={{ marginTop: '80px' }}>
                <div className='product__centerDimensionTitle'>
                    <p>DIMENSIONS</p>
                </div>
                <div>
                    <h3 style={{ fontWeight: '300', fontSize: '16px', color: ' #4a4947' }}>
                        BOZZI MONGOLIAN SHEEPSKIN CHAIR
                    </h3>
                </div>
            </div>
            <div className='dimensionTable'>
                <div className='dimensionTable_heading'>
                    <h3>Overall Dimensions</h3>
                    <p>Width:" "89.26"</p>
                    <p>Depth: "89.26"</p>
                    <p>Height: "89.26"</p>
                </div>
                <div className='dimensionTable_heading'>
                    <h3>Seat Dimensions</h3>
                    <p>Width: "89.26"</p>
                    <p>Depth: "89.26"</p>
                    <p>Height: "89.26"</p>
                </div>
            </div>
            <div
                style={{ marginTop: '200px', marginBottom: '20px' }}
                className='product__centerTitle'
            >
                <p>PART OF A COLLECTION</p>
            </div>
            <div>
                <img src={productImage} alt='productImage' width=' 250px' height='250px' />
            </div>
            <div className='product__centerTitle' style={{ marginBottom: '10px' }}>
                <p> REVIEWS</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'initial'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={tickImage} alt='tickImage' width='20px' height='20px' />
                    <div className='product_reviewText'>
                        <p>
                            Our reviews are verified for authenticity.<u> Learn More.</u>
                        </p>
                    </div>
                </div>
                <div
                    className='productTitle  product_reviewText'
                    style={{ paddingTop: '0px', display: 'flex', alignItems: 'center' }}
                >
                    <img style={{ padding: '0px' }} src={starRating} alt='stars' height='30px' />
                    <p>{` (${pageData.review}) Reviews`}</p>
                </div>

                <div className='product__button'>
                    <p
                        style={{
                            color: 'white',
                            alignSelf: 'center',
                            marginBottom: '10px',
                            marginTop: '10px'
                        }}
                    >
                        BE THE FIRST TO REVIEW
                    </p>
                </div>
            </div>
            <div
                style={{ marginTop: '200px', marginBottom: '20px' }}
                className='product__centerTitle'
            >
                <p>CARE</p>
            </div>
            <div style={{ display: 'flex', textAlign: 'start' }}>
                <div style={{ flex: '1' }} className='product__careText'>
                    <p>
                        You've put a lot of care into choosing your furnishings. And with continued
                        care at home, they
                    </p>
                </div>
                <div style={{ flex: '1' }} className='product__careText'>
                    <p>
                        should share your address for many years to come. Now for your owner's
                        manual...
                    </p>
                </div>
                <div style={{ flex: '1' }} className='product__careText'>
                    <h4>Fabric Care Instructions</h4>
                    <p>
                        Spot clean with mild, water-free cleaning solvents only. Do not use water or
                        dry clean. Always test a small inconspicuous area first. Blot spills
                        immediately with a clean, absorbent white cloth. Rotate cushions and pillows
                        weekly. Vacuum regularly. Professional upholstery cleaning recommended
                        annually. Avoid direct sunlight. Fabric fresheners and protectors are not
                        recommended.
                    </p>
                </div>
            </div>
            <div
                style={{ marginTop: '150px', marginBottom: '20px' }}
                className='product__centerTitle'
            >
                <p> RETURN/EXCHANGE POLICY</p>
            </div>
            <div
                style={{ textAlign: 'start', margin: 0, padding: 0 }}
                className='product__careText'
            >
                <p>
                    At CB2, we stand behind the quality of our products and want every purchase to
                    be a positive experience. We will do our best to make things right if you are
                    not satisfied.
                </p>
            </div>
            <div style={{ display: 'flex', textAlign: 'start', marginTop: '20px' }}>
                <div style={{ flex: '1' }}>
                    <div className='product_boldReturn'>
                        <p>Fabric Care Instructions</p>
                    </div>
                    <div className='product__smallerReturn' style={{ margin: 0 }}>
                        <p>
                            Spot clean with mild, water-free cleaning solvents only. Do not use
                            water or dry clean. Always test a small inconspicuous area first. Blot
                            spills immediately with a clean, absorbent white cloth. Rotate cushions
                            and pillows weekly. Vacuum regularly. Professional upholstery cleaning
                            recommended annually. Avoid direct sunlight. Fabric fresheners and
                            protectors are not recommended.
                        </p>
                    </div>
                </div>
                <div style={{ flex: '1' }}>
                    <div className='product_boldReturn'>
                        <p>Fabric Care Instructions</p>
                    </div>
                    <div className='product__smallerReturn' style={{ margin: 0 }}>
                        <p>
                            Spot clean with mild, water-free cleaning solvents only. Do not use
                            water or dry clean. Always test a small inconspicuous area first. Blot
                            spills immediately with a clean, absorbent white cloth. Rotate cushions
                            and pillows weekly. Vacuum regularly. Professional upholstery cleaning
                            recommended annually. Avoid direct sunlight. Fabric fresheners and
                            protectors are not recommended.
                        </p>
                    </div>
                </div>{' '}
                <div style={{ flex: '1' }}>
                    <div className='product_boldReturn'>
                        <p>Fabric Care Instructions</p>
                    </div>
                    <div className='product__smallerReturn' style={{ margin: 0 }}>
                        <p>
                            Spot clean with mild, water-free cleaning solvents only. Do not use
                            water or dry clean. Always test a small inconspicuous area first. Blot
                            spills immediately with a clean, absorbent white cloth. Rotate cushions
                            and pillows weekly. Vacuum regularly. Professional upholstery cleaning
                            recommended annually. Avoid direct sunlight. Fabric fresheners and
                            protectors are not recommended.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductHeader;
