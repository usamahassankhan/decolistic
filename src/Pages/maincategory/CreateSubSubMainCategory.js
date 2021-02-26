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
import {
    createSubSubHeading,
    getSubSubHeading,
    updateSubSubHeading,
    deleteSubSubHeading
} from '../../actions/subSubHeading';

function CreateSubSubMainCategory() {
    const [subSubHeading, setSubSubHeading] = useState({
        mainHeadingName: '',
        subHeadingName: '',
        subSubHeadingName: ''
    });
    // const [mainHeading, setMainHeading] = useState({
    //     mainHeadingName: ''
    // });

    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    const subSubHeadings = useSelector((state) => state.subSubHeading);
    const subHeadings = useSelector((state) => state.subHeading);
    const mainHeadings = useSelector((state) => state.mainHeading);
    // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

    const currentSubSubHeading = useSelector((state) =>
        currentId ? state.subSubHeading.find((h) => h._id === currentId) : null
    );

    useEffect(() => {
        dispatch(getMainHeading());
        dispatch(getSubHeading());
        dispatch(getSubSubHeading());
    }, [dispatch, currentId]);
    useEffect(() => {
        console.log(currentSubSubHeading);

        if (currentSubSubHeading) setSubSubHeading(currentSubSubHeading);
    }, [currentId]);

    const handleSubmit = (e) => {
        if (subSubHeading.subSubHeadingName === '') {
            alert('must have something in sub heading');
        } else {
            e.preventDefault();
            if (currentId === null) {
                dispatch(createSubSubHeading(subSubHeading));
            } else {
                dispatch(updateSubSubHeading(currentId, subSubHeading));
            }
            //need to add if state of current id
            setSubSubHeading({
                mainHeadingName: '',
                subHeadingName: '',
                subSubHeadingName: ''
            });
            setCurrentId(null);
        }
    };

    function dispatchingABC() {
        if (currentSubSubHeading) setSubSubHeading(currentSubSubHeading);
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
                            {subHeadings.map((a) =>
                                a.mainHeadingName === subSubHeading.mainHeadingName ? (
                                    <option>{a.subHeadingName}</option>
                                ) : null
                            )}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>SUB OF SUB CATEGORY</p>
                        <input
                            onChange={(e) =>
                                setSubSubHeading({
                                    ...subSubHeading,
                                    subSubHeadingName: e.target.value
                                })
                            }
                        />
                    </div>

                    <button className='btnsub' type='submit'>
                        submit
                    </button>
                </form>
            </div>

            {subSubHeadings.length === null ? (
                <div> no main heading </div>
            ) : (
                subSubHeadings.map((mainH) => (
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
                                    <p>{mainH.subHeadingName}</p>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>Sub Sub Heading</p>
                                    <p>{mainH.subSubHeadingName}</p>
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={() => dispatch(deleteSubSubHeading(mainH._id))}
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
