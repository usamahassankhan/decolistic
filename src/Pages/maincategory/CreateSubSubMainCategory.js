import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertSlugToUrl } from 'resources/utilities';

import FileBase from 'react-file-base64';
import {
    getMainHeading,
    createMainHeading,
    updateMainHeading,
    deleteMainHeading
} from '../../actions/mainHeading';
import './Createsubmain.css';
import { createSubHeading, getSubHeading, updateSubHeading } from '../../actions/subHeading';

function CreateSubSubMainCategory() {
    const [subHeading, setSubHeading] = useState({
        mainHeadingName: '',
        subHeadingName: '',
        subImage: ''
    });
    // const [mainHeading, setMainHeading] = useState({
    //     mainHeadingName: ''
    // });

    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    const subHeadings = useSelector((state) => state.subHeading);
    const mainHeadings = useSelector((state) => state.mainHeading);
    // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

    const currentSubHeading = useSelector((state) =>
        currentId ? state.subHeading.find((h) => h._id === currentId) : null
    );

    useEffect(() => {
        dispatch(getMainHeading());
        dispatch(getSubHeading());
    }, [dispatch, currentId]);
    useEffect(() => {
        console.log(currentSubHeading);

        if (currentSubHeading) setSubHeading(currentSubHeading);
    }, [currentId]);

    const handleSubmit = (e) => {
        if (subHeading.subHeadingName === '') {
            alert('must have something in sub heading');
        } else {
            e.preventDefault();
            if (currentId === null) {
                dispatch(createSubHeading(subHeading));
            } else {
                dispatch(updateSubHeading(currentId, subHeading));
            }
            //need to add if state of current id
            setSubHeading({
                mainHeadingName: '',
                subHeadingName: '',
                subImage: ''
            });
            setCurrentId(null);
        }
    };

    function dispatchingABC() {
        if (currentSubHeading) setSubHeading(currentSubHeading);
    }
    useEffect(() => {
        dispatchingABC();
    }, [currentId]);

    return (
        <div>
            <div className='mainpara'>
                <p>CREATE SUB OF SUB CATEGORY</p>
            </div>
            <div className='mainsubpara'>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Main Category</label>
                        <select
                            onChange={(e) =>
                                setSubHeading({ ...subHeading, mainHeadingName: e.target.value })
                            }
                        >
                            {mainHeadings.map((a) => (
                                <option>{a.mainHeadingName}</option>
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
                                setSubHeading({ ...subHeading, subHeadingName: e.target.value })
                            }
                        >
                            {subHeadings.map((a) =>
                                a.mainHeadingName === subHeading.mainHeadingName ? (
                                    <option>{a.subHeadingName}</option>
                                ) : null
                            )}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>SUB OF SUB CATEGORY</p>
                        <input
                            onChange={(e) =>
                                setSubHeading({ ...subHeading, subHeadingName: e.target.value })
                            }
                        />
                    </div>
                    {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>INSERT IMAGE</label>
                        <FileBase
                            onDone={(base64) => setSubHeading({ ...subHeading, image: base64 })}
                            type='file'
                            multiple={false}
                        />
                    </div> */}
                    <button className='btnsub' type='submit'>
                        submit
                    </button>
                </form>
            </div>

            {mainHeadings.length === null ? (
                <div> no main heading </div>
            ) : (
                mainHeadings.map((mainH) => (
                    <div key={mainH._id}>
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
                                    <p>Main Heading</p>
                                    <p>{mainH.mainHeadingName}</p>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>Sub Heading</p>
                                    <p>{mainH.mainHeadingName}</p>
                                </div>
                            </div>
                            <div>
                                {/* <p> {mainH._id}</p> */}
                                <p>Image</p>
                                <p>{/* <img className='imgsubheading' src={a} /> */}</p>
                            </div>

                            <div>
                                <button
                                    onClick={() => dispatch(deleteMainHeading(mainH._id))}
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
        </div>
    );
}

export default CreateSubSubMainCategory;
