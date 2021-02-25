// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { convertSlugToUrl } from 'resources/utilities';
// // import {
// //     getMainHeading,
// //     createMainHeading,
// //     updateMainHeading,
// //     deleteMainHeading
// // } from '../../actions/mainHeading';
// // import './CreateMain.css';

// // function CreateMainCategory() {
// //     const [mainHeading, setMainHeading] = useState({
// //         mainHeadingName: ''
// //     });
// //     const dispatch = useDispatch();

// //     const [headingClicked, setHeadingClicked] = useState(null);

// //     const mainHeadings = useSelector((state) => state.mainHeading);
// //     // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

// //     const currentMainHeading = useSelector((state) =>
// //         headingClicked ? state.mainHeading.find((h) => h._id === headingClicked) : null
// //     );
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         // if (headingClicked === 0) {
// //         dispatch(createMainHeading(mainHeading));

// //         //need to add if state of current id
// //         setMainHeading({
// //             mainHeadingName: ''
// //         });
// //         setHeadingClicked(null);
// //     };

// //     useEffect(() => {
// //         console.log('USEEFFECT>>>MAIN');
// //         if (currentMainHeading) setMainHeading(currentMainHeading);
// //         dispatch(getMainHeading());
// //     }, [handleSubmit]);

// //     // useEffect(() => {
// //     //     if (currentMainHeading) setMainHeading(currentMainHeading);
// //     // }, [handleSubmit]);
// //     return (
// //         <div>
// //             <div className='mainpara'>
// //                 <p>CREATE MAIN CATEGORY</p>
// //             </div>
// //             <div>
// //                 <form onSubmit={handleSubmit}>
// //                     <p>Main Category</p>
// //                     <input
// //                         value={mainHeading.mainHeadingName}
// //                         onChange={(e) =>
// //                             setMainHeading({ ...mainHeading, mainHeadingName: e.target.value })
// //                         }
// //                     />
// //                     <button type='submit'>submit</button>
// //                 </form>
// //             </div>

// //             {mainHeadings.length === null ? (
// //                 <div> no main heading </div>
// //             ) : (
// //                 mainHeadings.map((mainH) => (
// //                     <div key={mainH._id}>
// //                         <div
// //                             style={{
// //                                 marginTop: '20px',
// //                                 // border: '2px solid black',
// //                                 display: 'flex',
// //                                 justifyContent: 'space-between',
// //                                 backgroundColor: 'white',
// //                                 boxShadow: '0px 0px 2px 2px gray',
// //                                 padding: '30px 20px',
// //                                 borderRadius: '20px'
// //                             }}
// //                         >
// //                             <div>
// //                                 <p> {mainH._id}</p>
// //                                 <p>{mainH.mainHeadingName}</p>
// //                             </div>
// //                             <div>
// //                                 <button
// //                                     onClick={() => dispatch(deleteMainHeading(mainH._id))}
// //                                     // onClick={() => console.log('click')}
// //                                     className='btn'
// //                                 >
// //                                     DELETE
// //                                 </button>
// //                                 <button
// //                                     onClick={() => setHeadingClicked(mainH._id)}
// //                                     className='btn1'
// //                                 >
// //                                     UPDATE
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))
// //             )}
// //         </div>
// //     );
// // }

// // export default CreateMainCategory;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { convertSlugToUrl } from 'resources/utilities';
// import {
//     getMainHeading,
//     createMainHeading,
//     updateMainHeading,
//     deleteMainHeading
// } from '../../actions/mainHeading';
// import './CreateMain.css';

// function CreateMainCategory() {
//     const [mainHeading, setMainHeading] = useState({
//         mainHeadingName: ''
//     });

//     const dispatch = useDispatch();

//     const [currentId, setCurrentId] = useState(null);

//     const mainHeadings = useSelector((state) => state.mainHeading);
//     // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

//     const currentMainHeading = useSelector((state) =>
//         currentId ? state.mainHeading.find((h) => h._id === currentId) : null
//     );

//     useEffect(() => {
//         dispatch(getMainHeading());
//     }, [dispatch, currentId]);
//     useEffect(() => {
//         console.log(currentId);
//         if (currentMainHeading) setMainHeading(currentMainHeading);
//     }, [currentMainHeading]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (currentId === null) {
//             dispatch(createMainHeading(mainHeading));
//         } else {
//             dispatch(updateMainHeading(currentId, mainHeading));
//         }
//         //need to add if state of current id
//         setMainHeading(null);
//         setCurrentId(null);
//         dispatchingABC();
//     };

//     function dispatchingABC() {
//         if (currentMainHeading) setMainHeading(currentMainHeading);
//     }
//     useEffect(() => {
//         dispatchingABC();
//     }, []);

//     return (
//         <div>
//             <div className='mainpara'>
//                 <p>CREATE MAIN CATEGORY</p>
//             </div>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <p>Main Category</p>
//                     <input
//                         value={mainHeading.mainHeadingName}
//                         onChange={(e) =>
//                             setMainHeading({ ...mainHeading, mainHeadingName: e.target.value })
//                         }
//                     />
//                     <button type='submit'>submit</button>
//                 </form>
//             </div>

//             {mainHeadings.length === null ? (
//                 <div> no main heading </div>
//             ) : (
//                 mainHeadings.map((mainH) => (
//                     <div key={mainH._id}>
//                         <div
//                             style={{
//                                 marginTop: '20px',
//                                 // border: '2px solid black',
//                                 display: 'flex',
//                                 justifyContent: 'space-between',
//                                 backgroundColor: 'white',
//                                 boxShadow: '0px 0px 2px 2px gray',
//                                 padding: '30px 20px',
//                                 borderRadius: '20px'
//                             }}
//                         >
//                             <div>
//                                 <p> {mainH._id}</p>
//                                 <p>{mainH.mainHeadingName}</p>
//                             </div>
//                             <div>
//                                 <button
//                                     onClick={() => dispatch(deleteMainHeading(mainH._id))}
//                                     // onClick={() => console.log('click')}
//                                     className='btn'
//                                 >
//                                     DELETE
//                                 </button>
//                                 <button onClick={() => setCurrentId(mainH._id)} className='btn1'>
//                                     UPDATE
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default CreateMainCategory;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertSlugToUrl } from 'resources/utilities';
import {
    getMainHeading,
    createMainHeading,
    updateMainHeading,
    deleteMainHeading
} from '../../actions/mainHeading';
import './CreateMain.css';

function CreateMainCategory() {
    const [mainHeading, setMainHeading] = useState({
        mainHeadingName: ''
    });

    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);

    const mainHeadings = useSelector((state) => state.mainHeading);
    // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

    const currentMainHeading = useSelector((state) =>
        currentId ? state.mainHeading.find((h) => h._id === currentId) : null
    );

    useEffect(() => {
        dispatch(getMainHeading());
    }, [dispatch, currentId]);
    useEffect(() => {
        console.log(currentId);
        if (currentMainHeading) setMainHeading(currentMainHeading);
    }, [currentMainHeading]);

    const handleSubmit = (e) => {
        if (mainHeading.mainHeadingName === '') {
            alert('must have something in main heading');
        } else {
            e.preventDefault();
            if (currentId === null) {
                dispatch(createMainHeading(mainHeading));
            } else {
                dispatch(updateMainHeading(currentId, mainHeading));
            }
            //need to add if state of current id
            setMainHeading({
                mainHeadingName: ''
            });
            setCurrentId(null);
        }
    };

    function dispatchingABC() {
        if (currentMainHeading) setMainHeading(currentMainHeading);
    }
    useEffect(() => {
        dispatchingABC();
    }, []);

    return (
        <div>
            <div className='mainpara'>
                <p>CREATE MAIN CATEGORY</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Main Category</p>
                    <input
                        value={mainHeading?.mainHeadingName}
                        onChange={(e) =>
                            setMainHeading({ ...mainHeading, mainHeadingName: e.target.value })
                        }
                    />
                    <button type='submit'>submit</button>
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
                                borderRadius: '20px'
                            }}
                        >
                            <div>
                                <p> {mainH._id}</p>
                                <p>{mainH.mainHeadingName}</p>
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

export default CreateMainCategory;
