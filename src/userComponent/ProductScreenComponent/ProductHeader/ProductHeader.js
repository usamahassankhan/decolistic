import React from 'react';
import './ProductHeader.css';
import starRating from '../../../assets/starRating.png';
import color1 from '../../../assets/ProductPageImages/choice_663zm0.jpg';
import colorPicker from '../../../assets/ProductPageImages/colorPicker.png';

const pageData = {
    nameOfProduct: 'KST SOFA',
    priceOfProduct: '393625',
    companyName: 'Decolistic exclusive',
    review: '0.0',
    model: 'SKU:14544',
    color: [
        {
            name: 'Verity, Sand',
            image: color1
        }
    ]
};

function ProductHeader() {
    return (
        <div className='bodyBack'>
            <div style={{ padding: '0px' }}>
                {/* first line */}
                <div className='product_routes'>
                    <p>NEW / VIEW ALL</p>
                </div>
                <div className='productTitle'>
                    <div className='leftProductTitle'>{pageData.nameOfProduct} </div>
                    <div className='rightProductTitle'>{pageData.priceOfProduct}</div>
                </div>
                {/* second line */}
                <div className='productTitle'>
                    <div className='leftProductTitle'>{pageData.companyName} </div>
                    <div className='productTitle' style={{ paddingTop: '0px' }}>
                        <img style={{ padding: '0px' }} src={starRating} alt='stars' />
                        <div className='rightBorder'>
                            <u>({pageData.review}) Reviews</u>
                        </div>
                        <div>{pageData.model}</div>
                    </div>
                </div>
                <div className='description'>
                    <div>International Customers</div>
                    <div>
                        To order this item, please call (00+1) 630-369-4464 , or fax (00+1)
                        630-527-1448
                    </div>
                    <div>
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
                            src={pageData.color[0].image}
                            alt={pageData.color[0].name}
                        />
                        <img
                            style={{ paddingLeft: '0px' }}
                            src={pageData.color[0].image}
                            alt={pageData.color[0].name}
                        />
                        <img
                            style={{ paddingLeft: '0px' }}
                            src={pageData.color[0].image}
                            alt={pageData.color[0].name}
                        />
                        <img
                            style={{ paddingLeft: '0px' }}
                            src={pageData.color[0].image}
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
                    <div className='button '>
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
                <div className='productTitle' style={{ paddingTop: '0px' }}>
                    <img
                        style={{ paddingLeft: '0px' }}
                        src={pageData.color[0].image}
                        width='30px'
                        height='15px'
                        alt='colorSelected'
                    />
                    <div>Fabric: {pageData.color[0].name}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductHeader;
// <div className="mainBody" style={{ lineHeight: "0%" }}>
//   <div className="topTitle">
//     <h1 className="leftTitle">BOZZI MONGOLIAN SHEEPSKIN CHAIR</h1>
//     <h1 className="rightTitle"> PKR 427868.78</h1>
//   </div>
//   <div className="topTitle">
//     <div className="leftTitle" style={{}}>
//       <p style={{ fontSize: 15, fontWeight: "120" }}>Decolistic Exclusive</p>
//     </div>
//     <div
//       className="rightTitle"
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         flex: 2,
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           flex: 1,
//           width: "10",
//         }}
//       >
//         <img
//           style={{ flex: 1 }}
//           src={starRating}
//           alt="star rating"
//           width="auto"
//           height="30px"
//         />
//         <p style={{ flex: 1 }}>
//           <u> (0.0)0 Ratings</u>
//         </p>
//       </div>
//       <div>
//         <p>SKU: 151805</p>
//       </div>
//     </div>
//   </div>
//   <div className="topTitle">
//     <div
//       className="leftTitle"
//       style={{
//         // display: "flex",
//         flexDirection: "column",

//         fontSize: "small",
//       }}
//     >
//       <p>International Customers:</p>
//       <p>
//         To order this item, please call (00+1) 630-369-4464, or fax (00+1)
//         630-527-1448.
//       </p>

//       <u> View International Availability Details</u>
//     </div>
//   </div>
//   <div className="lastLine">
//     <div>
//       <img src={color1} alt="color" className="imageSizeController" />
//       <img src={color1} alt="color" className="imageSizeController" />
//       <img src={color1} alt="color" className="imageSizeController" />
//       <img src={color1} alt="color" className="imageSizeController" />
//       <img src={color1} alt="color" className="imageSizeController" />
//       <img src={color1} alt="color" className="imageSizeController" />
//     </div>

//     <div className="borderController">
//       <img
//         src={colorPicker}
//         alt="color picker"
//         className="imageSizeController2"
//       />
//       <h1> SEE ALL COLORS </h1>
//     </div>
//     <div className="buttonContainer">
//       <h1 className="button Controller" style={{ color: "white" }}>
//         REQUEST A QUOTE
//       </h1>
//     </div>
//   </div>
// </div>
