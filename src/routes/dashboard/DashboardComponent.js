import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
function DashboardComponent() {
    const [images, setImages] = useState({});

    return (
        <div>
            <form>
                <div>
                    <p>product name</p>
                    <input name='productName' placeholder='BOZZI MONGOLIAN SHEEPSKIN CHAIR' />
                </div>
                <div>
                    <p>product price</p>
                    <input name='productPrice' placeholder='427856.29' />
                </div>
                <div>
                    <p>product model number</p>
                    <input name='productPrice' />
                </div>
                <div>
                    <MultiImageInput images={images} setImages={setImages} max='7' />
                </div>
            </form>
        </div>
    );
}

export default DashboardComponent;
