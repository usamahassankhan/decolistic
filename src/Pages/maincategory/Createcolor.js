import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { getMainHeading } from '../../actions/mainHeading';

import {
    getSubHeading,
    createSubHeading,
    updateSubHeading,
    deleteSubHeading
} from '../../actions/subHeading';
import './Createcolor.css';
import { getColor, createColor, updateColor, deleteColor } from '../../actions/color';

function Createcolor() {
    const [color, setColor] = useState({
        colorName: '',
        colorImage: ''
    });
    // const [mainHeading, setMainHeading] = useState({
    //     mainHeadingName: ''
    // });

    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    const colors = useSelector((state) => state.color);
    // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

    const currentColor = useSelector((state) =>
        currentId ? state.color.find((h) => h._id === currentId) : null
    );

    useEffect(() => {
        dispatch(getColor());
    }, [dispatch, currentId]);
    useEffect(() => {
        console.log(currentColor);

        if (currentColor) setColor(currentColor);
    }, [currentId]);

    const handleSubmit = (e) => {
        if (color.colorName === '') {
            alert('must have something in color');
        } else {
            e.preventDefault();
            if (currentId === null) {
                dispatch(createColor(color));
            } else {
                dispatch(updateColor(currentId, color));
            }
            //need to add if state of current id
            setColor({
                colorName: '',
                colorImage: ''
            });
            setCurrentId(null);
        }
    };

    function dispatchingABC() {
        if (currentColor) setColor(currentColor);
    }
    useEffect(() => {
        dispatchingABC();
    }, [currentId]);

    return (
        <div>
            <div className='maincolor'>
                <p>CREATE COLOR</p>
            </div>
            <div className='mainsubpara'>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>CREATE COLORS</p>
                        <input
                            onChange={(e) => setColor({ ...color, colorName: e.target.value })}
                            value={color?.colorName}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>INSERT IMAGE</label>
                        <FileBase
                            onDone={(base64) => setColor({ ...color, colorImage: base64 })}
                            type='file'
                            multiple={false}
                        />
                    </div>
                    <button className='btnsub' type='submit'>
                        submit
                    </button>
                </form>
                {colors.length === null ? (
                    <div> no sub heading </div>
                ) : (
                    colors.map((subH) => (
                        <div key={subH._id}>
                            <div
                                style={{
                                    marginTop: '20px',
                                    // border: '2px solid black',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    backgroundColor: 'white',
                                    boxShadow: '0px 0px 2px 2px gray',
                                    padding: '30px 20px',
                                    borderRadius: '20px',
                                    alignItems: 'center'
                                }}
                            >
                                <div>
                                    <div>
                                        {/* <p> {mainH._id}</p> */}
                                        <p>Color</p>
                                        <p>{subH.colorName}</p>
                                    </div>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>Image</p>
                                    <p>
                                        <img
                                            className='imgsubheading'
                                            src={subH.colorImage}
                                            alt='ajao'
                                        />
                                    </p>
                                </div>

                                <div>
                                    <button
                                        onClick={() => dispatch(deleteColor(subH._id))}
                                        // onClick={() => console.log('click')}
                                        className='btn'
                                    >
                                        DELETE
                                    </button>
                                    <button onClick={() => setCurrentId(subH._id)} className='btn1'>
                                        UPDATE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Createcolor;
