// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';
// import LazyLoad from 'react-lazyload';
// import { getMainHeading } from '../../actions/mainHeading';
// import {
//     getSubHeading,
//     createSubHeading,
//     updateSubHeading,
//     deleteSubHeading
// } from '../../actions/subHeading';
// import './CreateMain.css';

// function CreateSubMainCategory() {
//     const [subHeading, setSubHeading] = useState({
//         mainHeadingName: '',
//         subHeadingName: '',
//         subImage: ''
//     });
//     const [length, setlength] = useState(null);

//     const [skip, setSkip] = useState(0);
//     // const [mainHeading, setMainHeading] = useState({
//     //     mainHeadingName: ''
//     // });

//     const dispatch = useDispatch();
//     // const handleScroll = () => {
//     //     const bottom =
//     //         Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

//     //     if (bottom) {
//     //         setlength(subHeadings.length);
//     //         setSkip(skip + 1);
//     //     }
//     // };
//     const [currentId, setCurrentId] = useState(null);
//     const subHeadings = useSelector((state) => state.subHeading);
//     // if (subHeading.length === length) {
//     //        // }

//     const mainHeadings = useSelector((state) => state.mainHeading);
//     // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

//     const currentSubHeading = useSelector((state) =>
//         currentId ? state.subHeading.find((h) => h._id === currentId) : null
//     );

//     // useEffect for subHe..ss requesting(false)
//     // useEffect(() => {
//     //     window.addEventListener('scroll', () => {
//     //         handleScroll();
//     //     });
//     //     // return window.removeEventListener('scroll', (error) => {
//     //     console.log(error);
//     // });
//     //         console.log(error);
//     //     });
//     // });
//     // useEffect(() => {
//     //     // requesting(truen)

//     //     dispatch(getSubHeading(skip));
//     // }, [skip]);

//     useEffect(() => {
//         dispatch(getSubHeading());
//         dispatch(getMainHeading());
//     }, [dispatch, currentId]);
//     useEffect(() => {
//         console.log(currentSubHeading);

//         if (currentSubHeading) setSubHeading(currentSubHeading);
//     }, [currentId]);
//     const handleSubmit = (e) => {
//         if (subHeading.subHeadingName === '') {
//             alert('must have something in sub heading');
//         } else {
//             e.preventDefault();
//             if (currentId === null) {
//                 dispatch(createSubHeading(subHeading));
//             } else {
//                 dispatch(updateSubHeading(currentId, subHeading));
//             }
//             //need to add if state of current id
//             setSubHeading({
//                 mainHeadingName: '',
//                 subHeadingName: '',
//                 subImage: ''
//             });
//             setCurrentId(null);
//         }
//     };

//     function dispatchingABC() {
//         if (currentSubHeading) setSubHeading(currentSubHeading);
//     }
//     useEffect(() => {
//         dispatchingABC();
//     }, [currentId]);

//     return (
//         <div className='mainwrapper'>
//             <div className='mainpara'>
//                 <p>CREATE SUB CATEGORY</p>
//             </div>
//             <div className='mainsubpara'>
//                 <form onSubmit={handleSubmit}>
//                     <div style={{ display: 'flex', flexDirection: 'column' }}>
//                         <label>Main Category</label>
//                         <select
//                             required
//                             onChange={(e) =>
//                                 setSubHeading({ ...subHeading, mainHeadingName: e.target.value })
//                             }
//                             value={subHeading?.MainHeadingName}
//                         >
//                             <option></option>
//                             {mainHeadings.map((a) => (
//                                 <option>{a.mainHeadingName}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div style={{ display: 'flex', flexDirection: 'column' }}>
//                         <p>SUB Category</p>
//                         <input
//                             required
//                             onChange={(e) =>
//                                 setSubHeading({ ...subHeading, subHeadingName: e.target.value })
//                             }
//                             value={subHeading?.subHeadingName}
//                         />
//                     </div>
//                     <div style={{ display: 'flex', flexDirection: 'column' }}>
//                         <label>INSERT IMAGE</label>

//                         <FileBase
//                             onDone={(base64) => setSubHeading({ ...subHeading, subImage: base64 })}
//                             type='file'
//                             multiple={false}
//                         />
//                     </div>
//                     <button className='btnsub' type='submit'>
//                         submit
//                     </button>
//                 </form>
//                 <div>
//                     {subHeadings.length === null ? (
//                         <div> no sub heading </div>
//                     ) : (
//                         subHeadings.map((subH) => (
//                             <LazyLoad key={subH._id}>
//                                 <div
//                                     style={{
//                                         marginTop: '20px',
//                                         // border: '2px solid black',
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         backgroundColor: 'white',
//                                         boxShadow: '0px 0px 2px 2px gray',
//                                         padding: '30px 20px',
//                                         borderRadius: '20px',
//                                         alignItems: 'center'
//                                     }}
//                                 >
//                                     <div>
//                                         <LazyLoad>
//                                             {/* <p> {mainH._id}</p> */}
//                                             <p>Main Heading</p>
//                                             <p>{subH.mainHeadingName}</p>
//                                         </LazyLoad>
//                                         <div>
//                                             {/* <p> {mainH._id}</p> */}
//                                             <p>Sub Heading</p>
//                                             <p>{subH.subHeadingName}</p>
//                                         </div>
//                                     </div>
//                                     <LazyLoad>
//                                         {/* <p> {mainH._id}</p> */}
//                                         <p>Image</p>
//                                         <LazyLoad>
//                                             <img
//                                                 className='imgsubheading'
//                                                 src={subH.subImage}
//                                                 alt='ajao'
//                                             />
//                                         </LazyLoad>
//                                     </LazyLoad>

//                                     <div>
//                                         <button
//                                             onClick={() => dispatch(deleteSubHeading(subH._id))}
//                                             // onClick={() => console.log('click')}
//                                             className='btn'
//                                         >
//                                             DELETE
//                                         </button>
//                                         <button
//                                             onClick={() => setCurrentId(subH._id)}
//                                             className='btn1'
//                                         >
//                                             UPDATE
//                                         </button>
//                                     </div>
//                                 </div>
//                             </LazyLoad>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CreateSubMainCategory;
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
import './CreateMain.css';

function CreateSubMainCategory() {
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
                <p>CREATE SUB CATEGORY</p>
            </div>
            <div className='mainsubpara'>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>Main Category</label>
                        <select
                            required
                            onChange={(e) =>
                                setSubHeading({ ...subHeading, mainHeadingName: e.target.value })
                            }
                            value={subHeading?.MainHeadingName}
                        >
                            <option></option>
                            {mainHeadings.map((a) => (
                                <option>{a.mainHeadingName}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>SUB Category</p>
                        <input
                            required
                            onChange={(e) =>
                                setSubHeading({ ...subHeading, subHeadingName: e.target.value })
                            }
                            value={subHeading?.subHeadingName}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>INSERT IMAGE</label>

                        <FileBase
                            onDone={(base64) => setSubHeading({ ...subHeading, subImage: base64 })}
                            type='file'
                            multiple={false}
                        />
                    </div>
                    <button className='btnsub' type='submit'>
                        submit
                    </button>
                </form>
                {subHeadings.length === null ? (
                    <div> no sub heading </div>
                ) : (
                    subHeadings.map((subH) => (
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
                                        <p>Main Heading</p>
                                        <p>{subH.mainHeadingName}</p>
                                    </div>
                                    <div>
                                        {/* <p> {mainH._id}</p> */}
                                        <p>Sub Heading</p>
                                        <p>{subH.subHeadingName}</p>
                                    </div>
                                </div>
                                <div>
                                    {/* <p> {mainH._id}</p> */}
                                    <p>Image</p>
                                    <p>
                                        <img
                                            className='imgsubheading'
                                            src={subH.subImage}
                                            alt='img'
                                        />
                                    </p>
                                </div>

                                <div>
                                    <button
                                        onClick={() => dispatch(deleteSubHeading(subH._id))}
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

export default CreateSubMainCategory;
