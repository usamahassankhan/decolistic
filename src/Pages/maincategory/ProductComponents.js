import React, { useState } from 'react';
// import MultiImageInput from 'react-multiple-image-input';
import './product.css';
// import FileBase from 'react-file-base64';
import MultiImageInput from 'react-multiple-image-input';
function ProductComponents() {
    const [images, setImages] = useState({});
    console.log('dsad', images);
    const [products, setProducts] = useState({
        productName: ' ',
        productPrice: ' ',
        productImage: '',
        productColor: ''
    });
    console.log('products', products);

    return (
        <>
            <h1>Create Products</h1>
            <div className='productmain'>
                <form>
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
                    {/* <div>
                    <p>product model number</p>
                    <input name='productPrice' />
                </div> */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label for='cars'>Choose Colors:</label>
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
                        <label>Choose Images</label>
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
                        <button className='btn3'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProductComponents;
