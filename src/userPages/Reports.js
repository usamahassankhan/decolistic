import React from 'react';
import './Reports.css';
import img1 from '../assets/092420_super_new_viewall.jpg';
import botimg1 from '../assets/102220_home_bt_1.jpg';
import botimg2 from '../assets/110620_home_bt_2.jpg';
import botimg3 from '../assets/111420_home_bt_3.jpg';
import botimg4 from '../assets/031020_home_bt_3.jpg';

function Reports() {
    return (
        <div className='reports'>
            <div className='heading'>HOLIDAY SHOP</div>
            <div className='images'>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className='heading'>HOLIDAY TIPS FROM OUR CHICEST FRIENDS</div>
            <div className='images'>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={img1} alt='Bedding' />
                    </div>
                    <div className='first-ref'>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className='radar'>
                <div className='rad-text'>On Our Radar</div>
            </div>
            <div className='bottom'>
                <div className='bot-first'>
                    <div className='bot-img'>
                        <img src={botimg1} alt />
                    </div>
                    <div className='bot-only'>46 Pages of Holiday Inspo, Right This Way</div>
                    <div className='bot-ref'>
                        <a href='#'>Take a Peek</a>
                    </div>
                </div>
                <div className='bot-first'>
                    <div className='bot-img'>
                        <img src={botimg2} alt />
                    </div>
                    <div className='bot-only'>Decolistic in your space: Photo by @Logi.Berra</div>
                    <div className='bot-ref'>
                        <a href='#'>See all #MyDecolistic Photos</a>
                    </div>
                </div>
                <div className='bot-first'>
                    <div className='bot-img'>
                        <img src={botimg3} alt />
                    </div>
                    <div className='bot-only'>Holiday How-To From the chicest People we know</div>
                    <div className='bot-ref'>
                        <a href='#'>Read and Shop</a>
                    </div>
                </div>
                <div className='bot-first'>
                    <div className='bot-img'>
                        <img src={botimg4} alt />
                    </div>
                    <div className='bot-only'>46 Pages of Holiday Inspo, Right This Way</div>
                    <div className='bot-ref'>
                        <a href='#'>Take a Peek</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;
