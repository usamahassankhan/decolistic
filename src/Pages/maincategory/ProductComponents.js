import React, { useState, useEffect } from 'react';
// import MultiImageInput from 'react-multiple-image-input';
import './product.css';
// import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getMainHeading } from '../../actions/mainHeading';
import { getSubHeading } from '../../actions/subHeading';
import { getSubSubHeading } from '../../actions/subSubHeading';
import { getColor } from '../../actions/color';
import {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts
} from '../../actions/products';

import FileBase from 'react-file-base64';
function ProductComponents() {
    //    const [images, setImages] = useState({}); // need to remove this

    // single state for all the products
    const [product, setProduct] = useState({
        mainHeadingName: '',
        subHeadingName: '',
        subSubHeadingName: '',
        productName: '',
        productPrice: '',
        productModel: '',
        productColor: '',
        images: ''
    });

    const dispatch = useDispatch();
    //current id to managed update and delete
    const [currentId, setCurrentId] = useState(null);

    // getting all the data from reducers
    const products = useSelector((state) => state.product);
    const color = useSelector((state) => state.color);
    const subSubHeadings = useSelector((state) => state.subSubHeading);
    const subHeadings = useSelector((state) => state.subHeading);
    const mainHeadings = useSelector((state) => state.mainHeading);

    //get current product data based on the currentId
    const currentProduct = useSelector((state) =>
        currentId ? state.product.find((h) => h._id === currentId) : null
    );

    //dispatching all the get reducers required for the page
    useEffect(() => {
        dispatch(getMainHeading());
        dispatch(getSubHeading());
        dispatch(getSubSubHeading());
        dispatch(getColor());
        dispatch(getProducts());
    }, [dispatch, currentId]);

    useEffect(() => {
        if (currentProduct) setProduct(currentProduct);
    }, [currentId]);

    //combined all the smaller states into a single state

    const submitForm = (e) => {
        e.preventDefault();
        if (currentId === null) {
            dispatch(createProducts(product));
        } else {
            dispatch(updateProducts(currentId, product));
        }
        //need to add if state of current id
        setProduct({
            mainHeadingName: '',
            subHeadingName: '',
            subSubHeadingName: '',
            productName: '',
            productPrice: '',
            productModel: '',
            productColor: '',
            images: ''
        });
        setCurrentId(null);
    };
    function dispatchingABC() {
        if (currentProduct) setProduct(currentProduct);
    }
    useEffect(() => {
        dispatchingABC();
    }, []);

    //used for multiple image selection
    const fileSelectedHandler = (e) => {
        setProduct({ images: [...product.images, ...e.target.value.base64] });
    };

    return (
        <>
            <h1>Create Products</h1>
            <div className='productmain'>
                <form onSubmit={submitForm}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Main Category</label>
                        <select
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    mainHeadingName: e.target.value
                                })
                            }
                        >
                            <option></option>
                            {mainHeadings.map((a) => (
                                <>
                                    <option>{a.mainHeadingName}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>SUB Category</p>
                        <select
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    subHeadingName: e.target.value
                                })
                            }
                        >
                            <option></option>
                            {subHeadings.map((a) =>
                                a.mainHeadingName === product.mainHeadingName ? (
                                    <option>{a.subHeadingName}</option>
                                ) : null
                            )}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>SUB SUB Category</p>
                        <select
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    subSubHeadingName: e.target.value
                                })
                            }
                            required
                        >
                            <option></option>
                            {subSubHeadings.map(
                                (a) =>
                                    a.subHeadingName === product.subHeadingName ? (
                                        <option>{a.subSubHeadingName}</option>
                                    ) : null
                                // <option>{a.subSubHeadingName}</option>
                            )}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>product name</p>
                        <input
                            onChange={(e) =>
                                setProduct({ ...product, productName: e.target.value })
                            }
                            name='productName'
                            placeholder='BOZZI MONGOLIAN SHEEPSKIN CHAIR'
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>product price</p>
                        <input
                            name='productPrice'
                            placeholder='427856.29'
                            onChange={(e) =>
                                setProduct({ ...product, productPrice: e.target.value })
                            }
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>product Modal Number</p>
                        <input
                            name='productmodal'
                            placeholder='modal no'
                            onChange={(e) =>
                                setProduct({ ...product, productModel: e.target.value })
                            }
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label for='cars'>Choose Main image Colors:</label>
                        <select
                            onChange={(e) =>
                                setProduct({ ...product, productColor: e.target.value })
                            }
                        >
                            <option></option>
                            {color.map((a) => (
                                <option>{a.colorName}</option>
                            ))}
                            {console.log('mainclr', color)}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Choose Main Image </label>
                        <div>
                            <FileBase
                                onChange={fileSelectedHandler}
                                onDone={(base64) =>
                                    setProduct({
                                        ...product,
                                        ...product.images,
                                        images: [base64]
                                    })
                                }
                                type='file'
                                multiple={true}
                            />
                        </div>
                    </div>
                    {/* <div className='divmap'>
                        {show.map((a) => (
                            <div className='divinner'>
                                <p>COLOR:{a.color}</p>
                            </div>
                        ))}
                    </div> */}

                    <button className='btn3'>Submit</button>
                </form>
            </div>
            {products.length === null ? (
                <div> no main heading </div>
            ) : (
                products.map((mainH) => (
                    <div className='cardproduct'>
                        <div
                            style={{
                                marginTop: '20px',
                                // border: '2px solid black',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backgroundColor: 'white',
                                boxShadow: '0px 0px 2px 2px gray',
                                padding: '30px 20px',
                                borderRadius: '20px',
                                alignItems: 'center'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}
                            >
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Main Heading </b>
                                        <p>{mainH.mainHeadingName} </p>
                                    </p>
                                    <p></p>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Sub Heading </b>
                                        <p>{mainH.subHeadingName}</p>
                                    </p>
                                    <p></p>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Sub Sub Heading </b>
                                        <p>{mainH.subSubHeadingName}</p>
                                    </p>
                                    <p></p>
                                </div>
                            </div>

                            <div className='productheading'>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Product Name </b>
                                        <p> {mainH.productName} </p>
                                    </p>
                                    <p></p>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Product Price </b>
                                        <p>{mainH.productPrice}</p>
                                    </p>
                                    <p></p>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Product Modal no </b>
                                        <p> {mainH.productModel} </p>
                                    </p>
                                    <p></p>
                                </div>
                            </div>

                            <div className='mainimgheading'>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Main Image</b>
                                        {mainH.images.map((subH) => (
                                            <img
                                                width='100px'
                                                height='100px'
                                                src={subH}
                                                alt='mainimage'
                                            />
                                        ))}
                                    </p>
                                    <p></p>
                                </div>

                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>
                                        <b>Main Color </b>
                                        <p> {mainH.productColor} </p>
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => dispatch(deleteProducts(mainH._id))}
                                    // onClick={() => console.log('click')}
                                    className='btn'
                                >
                                    DELETE
                                </button>
                                <button onClick={() => setCurrentId(mainH._id)} className='btn1'>
                                    UPDATE
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default ProductComponents;
