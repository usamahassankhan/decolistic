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
        productImage: '',
        productColor: '',
        productModal: ''
    });
    console.log('products', products);
    console.log('img', colorimage);
    console.log('show', show);
    const hideshow = () => {
        setShow((old) => {
            return [...old, colorimage];
        });
        // setShow(!show);
        // setColorimage({ img1: [base64], color: e.target.value });
    };

    return (
        <>
            <h1>Create Products</h1>
            <div className='productmain'>
                <form>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Main Category</label>
                        <select
                            required
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
                            required
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
                            // onChange={(e) =>
                            //     setSubSubHeading({
                            //         ...subSubHeading,
                            //         subSubHeadingName: e.target.value
                            //     })
                            // }
                            required
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
                            onChange={
                                (e) => {
                                    let value = Array.from(
                                        e.target.selectedOptions,
                                        (option) => option.value
                                    );
                                    // this.setState({ values: value });
                                    setProducts({ ...products, productColor: value });
                                }
                                // setProducts({ ...products, productColor: [e.target.selectedOptions] })
                            }
                            name='productColor'
                            id='productColor'
                            multiple
                        >
                            <option value='volvo'>Volvo</option>
                            <option value='saab'>Saab</option>
                            <option value='opel'>Opel</option>
                            <option value='audi'>Audi</option>
                        </select>
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
                            <MultiImageInput
                                images={images}
                                setImages={setImages}
                                max='7'
                                className='multi'
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
                                onDone={(base64) =>
                                    setColorimage({ ...colorimage, img1: [base64] })
                                }
                                // onDone={(base64) => {
                                //     hideshow(base64);
                                // }}
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
                                <p>IMAGE NAME:{a.img1[0].name}</p>
                            </div>
                        ))}
                    </div>

                    <button className='btn3'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default ProductComponents;
