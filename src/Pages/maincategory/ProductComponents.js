import React, { useState } from 'react';
// import MultiImageInput from 'react-multiple-image-input';
import './product.css';
// import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import MultiImageInput from 'react-multiple-image-input';
import FileBase from 'react-file-base64';
function ProductComponents() {
    const [images, setImages] = useState({});
    console.log('dsad', images);
    const subSubHeadings = useSelector((state) => state.subSubHeading);
    const subHeadings = useSelector((state) => state.subHeading);
    const mainHeadings = useSelector((state) => state.mainHeading);
    const [subSubHeading, setSubSubHeading] = useState({
        mainHeadingName: '',
        subHeadingName: '',
        subSubHeadingName: ''
    });
    const [show, setShow] = useState([]);
    const [colorimage, setColorimage] = useState({ img1: [], color: '' });
    const colors = useSelector((state) => state.color);
    const [products, setProducts] = useState({
        productName: ' ',
        productPrice: ' ',
        productImage: [],
        productColor: '',
        productModal: '',
        productImage: ''
    });
    const hideshow = () => {
        setShow((old) => {
            return [...old, colorimage];
        });
        // setShow(!show);
        // setColorimage({ img1: [base64], color: e.target.value });
    };
    const [finalstate, setFinalstate] = useState([]);
    const submitForm = (e) => {
        const newstate = {
            products: products,
            colorimage: show,
            subSubHeading: subSubHeading
        };
        setFinalstate([...finalstate, newstate]);

        e.preventDefault();
    };
    console.log('aja', finalstate);
    console.log('mainheading', subSubHeading.mainHeadingName);
    console.log('subheading', subSubHeading.subHeadingName);
    console.log('subSubHeadingName', subSubHeading.subSubHeadingName);
    console.log('products', products);
    console.log('img', colorimage);
    console.log('show', show);

    return (
        <>
            <h1>Create Products</h1>
            <div className='productmain'>
                <form onSubmit={submitForm}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Main Category</label>
                        <select
                            onChange={(e) =>
                                setSubSubHeading({
                                    ...subSubHeading,
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
                        {/* <input
                            onChange={(e) =>
                                setSubHeading({ ...subHeading, subHeadingName: e.target.value })
                            }
                        /> */}
                        <select
                            onChange={(e) =>
                                setSubSubHeading({
                                    ...subSubHeading,
                                    subHeadingName: e.target.value
                                })
                            }
                        >
                            <option></option>
                            {subHeadings.map((a) =>
                                a.mainHeadingName === subSubHeading.mainHeadingName ? (
                                    <option>{a.subHeadingName}</option>
                                ) : null
                            )}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>SUB SUB Category</p>
                        {/* <input
                            onChange={(e) =>
                                setSubHeading({ ...subHeading, subHeadingName: e.target.value })
                            }
                        /> */}
                        <select
                            onChange={(e) =>
                                setSubSubHeading({
                                    ...subSubHeading,
                                    subSubHeadingName: e.target.value
                                })
                            }
                        >
                            {console.log('ssb', subSubHeadings)}
                            <option></option>
                            {subSubHeadings.map(
                                (a) =>
                                    a.subHeadingName === subSubHeading.subHeadingName ? (
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
                                setProducts({ ...products, productName: e.target.value })
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
                                setProducts({ ...products, productPrice: e.target.value })
                            }
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>product Modal Number</p>
                        <input
                            name='productmodal'
                            placeholder='modal no'
                            onChange={(e) =>
                                setProducts({ ...products, productModal: e.target.value })
                            }
                        />
                    </div>
                    {/* <div>
                    <p>product model number</p>
                    <input name='productPrice' />
                </div> */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label for='cars'>Choose Main image Colors:</label>
                        <select
                            onChange={(e) =>
                                setProducts({ ...products, productColor: e.target.value })
                            }
                        >
                            <option></option>
                            {colors.map((a) => (
                                <option>{a.colorName}</option>
                            ))}
                            {console.log('mainclr', colors)}
                        </select>
                        {/* <select
                            onChange={(e) => {
                                let value = Array.from(
                                    e.target.selectedOptions,
                                    (option) => option.value
                                );

                                setProducts({ ...products, productColor: value });
                            }}
                            name='productColor'
                            id='productColor'
                            multiple
                        >
                            <option value='volvo'>Volvo</option>
                            <option value='saab'>Saab</option>
                            <option value='opel'>Opel</option>
                            <option value='audi'>Audi</option>
                        </select> */}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Choose Main Image </label>
                        {/* <FileBase
                            onDone={(base64) =>
                                setProducts({ ...products, productImage: [base64] })
                            }
                            type='file'
                            multiple
                        /> */}
                        <div>
                            {/* <MultiImageInput
                                // images={setImages}
                                // setImages={setImages}
                                images={images}
                                onChange={(e) => setImages(e.target.value)}
                                max='7'
                                className='multi'
                            /> */}
                            <FileBase
                                onDone={(base64) => {
                                    const tempArray = [...products.productImage];
                                    tempArray.push(base64);
                                    setProducts({
                                        ...products,
                                        ...products.productImage,
                                        productImage: tempArray
                                    });
                                }}
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
                                type='file'
                                multiple={true}
                            />
                            <FileBase
                                onDone={(base64) => {
                                    const tempArray = [...products.productImage];
                                    tempArray.push(base64);
                                    setProducts({
                                        ...products,
                                        ...products.productImage,
                                        productImage: tempArray
                                    });
                                }}
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
                                type='file'
                                multiple={true}
                            />
                            <FileBase
                                onDone={(base64) => {
                                    const tempArray = [...products.productImage];
                                    tempArray.push(base64);
                                    setProducts({
                                        ...products,
                                        ...products.productImage,
                                        productImage: tempArray
                                    });
                                }}
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
                                type='file'
                                multiple={true}
                            />
                            <FileBase
                                onDone={(base64) => {
                                    const tempArray = [...products.productImage];
                                    tempArray.push(base64);
                                    setProducts({
                                        ...products,
                                        ...products.productImage,
                                        productImage: tempArray
                                    });
                                }}
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
                                type='file'
                                multiple={true}
                            />
                            <FileBase
                                onDone={(base64) => {
                                    const tempArray = [...products.productImage];
                                    tempArray.push(base64);
                                    setProducts({
                                        ...products,
                                        ...products.productImage,
                                        productImage: tempArray
                                    });
                                }}
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
                                type='file'
                                multiple={true}
                            />
                            <FileBase
                                onDone={(base64) => {
                                    const tempArray = [...products.productImage];
                                    tempArray.push(base64);
                                    setProducts({
                                        ...products,
                                        ...products.productImage,
                                        productImage: tempArray
                                    });
                                }}
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
                                type='file'
                                multiple={true}
                            />
                            <FileBase
                                onDone={(base64) => {
                                    const tempArray = [...products.productImage];
                                    tempArray.push(base64);
                                    setProducts({
                                        ...products,
                                        ...products.productImage,
                                        productImage: tempArray
                                    });
                                }}
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
                                type='file'
                                multiple={true}
                            />
                        </div>
                    </div>
                    <div onClick={() => hideshow()}>➕ Add Color And Image</div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'black',
                            color: 'white',
                            paddingBottom: '10px'
                        }}
                    >
                        {/* <label>Choose Image </label> */}
                        {/* <FileBase
                            onDone={(base64) =>
                                setProducts({ ...products, productImage: [base64] })
                            }
                            type='file'
                            multiple
                        /> */}
                        {/* <div>
                                <MultiImageInput
                                    images={images}
                                    setImages={setImages}
                                    max='7'
                                    className='multi'
                                />
                            </div> */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>INSERT IMAGE</label>

                            <FileBase
                                onDone={(base64) => setColorimage({ ...colorimage, img1: base64 })}
                                type='file'
                                multiple={false}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Color</label>
                            {/* <input
                                onChange={(e) =>
                                    setColorimage({ ...colorimage, color: e.target.value })
                                }
                                type='text'
                            /> */}
                            <select
                                onChange={(e) =>
                                    setColorimage({ ...colorimage, color: e.target.value })
                                }
                            >
                                <option></option>
                                {colors.map((a) => (
                                    <option>{a.colorName}</option>
                                ))}
                                {console.log('clr', colors)}
                            </select>
                        </div>
                    </div>
                    {/* <div>color:{colorimage.color}</div>
                        {console.log('img', colorimage.img1[0]?.name)}
                        <div>img:{colorimage.img1[0]?.name}</div> */}
                    <div className='divmap'>
                        {show.map((a) => (
                            <div className='divinner'>
                                <p>COLOR:{a.color}</p>
                                <p>IMAGE NAME:{a.img1?.name}</p>
                            </div>
                        ))}
                    </div>

                    <button className='btn3'>Submit</button>
                </form>
            </div>

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
                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                    >
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Main Heading </b>
                            </p>
                            <p></p>
                        </div>
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Sub Heading </b>
                            </p>
                            <p></p>
                        </div>
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Sub Sub Heading </b>
                            </p>
                            <p></p>
                        </div>
                    </div>

                    <div className='productheading'>
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Product Name </b>
                            </p>
                            <p></p>
                        </div>
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Product Price </b>
                            </p>
                            <p></p>
                        </div>
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Product Modal no </b>
                            </p>
                            <p></p>
                        </div>
                    </div>

                    <div className='mainimgheading'>
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Main Image</b>
                            </p>
                            <p></p>
                        </div>

                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Main Color </b>
                            </p>
                            <p></p>
                        </div>
                    </div>
                    <div className='subimgheading'>
                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Image</b>
                            </p>
                            <p></p>
                        </div>

                        <div>
                            {/* <p> {mainH._id}</p> */}
                            <p>
                                <b>Color </b>
                            </p>
                            <p></p>
                        </div>
                    </div>
                    {/* <div>
                        <p> {mainH._id}</p>
                        <p>Image</p>
                        <p>
                            <img className='imgsubheading' src={subH.subImage} alt='img' />
                        </p>
                    </div> */}

                    <div>
                        <button
                            // onClick={() => dispatch(deleteSubHeading(subH._id))}
                            // onClick={() => console.log('click')}
                            className='btn'
                        >
                            DELETE
                        </button>
                        <button
                            // onClick={() => setCurrentId(subH._id)}
                            className='btn1'
                        >
                            UPDATE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductComponents;
