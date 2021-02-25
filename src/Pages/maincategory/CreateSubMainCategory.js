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
import './CreateMain.css';
import { createSubHeading } from 'api';

function CreateSubMainCategory() {
    const [subHeading, setSubHeading] = useState({
        mainHeadingName: ' ',
        subHeadingName: ' ',
        image: '  '
    });
    console.log('ajeeb', subHeading);

    const [maincategory, setMaincategory] = useState();
    const [mainHeading, setMainHeading] = useState({
        mainHeadingName: ''
    });
    console.log('wao', maincategory);
    const dispatch = useDispatch();

    const [headingClicked, setHeadingClicked] = useState(null);

    const mainHeadings = useSelector((state) => state.mainHeading);
    const subHeadings = useSelector((state) => state.subHeading);
    // const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);

    const currentMainHeading = useSelector((state) =>
        headingClicked ? state.mainHeading.find((h) => h._id === headingClicked) : null
    );

    useEffect(() => {
        console.log('USEEFFECT>>>MAIN');
        if (currentMainHeading) setMainHeading(currentMainHeading);
        dispatch(getMainHeading());
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (headingClicked === 0) {
        dispatch(createMainHeading(mainHeading));

        //need to add if state of current id
        setMainHeading({
            mainHeadingName: ''
        });
        setHeadingClicked(null);
    };
    useEffect(() => {
        if (currentMainHeading) setMainHeading(currentMainHeading);
    }, []);

    const Maincategory = [
        { title: 'NEW' },
        { title: 'FURNITURE' },
        { title: 'OUTDOOR' },
        { title: 'DECORANDMIRROR' },
        { title: 'LIGHTING' },
        { title: 'PILLOWSANDTHROWS' },
        { title: 'RUGS' },
        { title: 'KITCHENANDDINNING' },
        { title: 'BEDDINGANDBATH' },
        { title: 'GIFTS' },

        { title: 'SALEANDOFFERS' }
    ];
    const Subcategory = {
        NEW: [
            { title: 'VIEWALL' },
            { title: 'FURNITURE' },
            { title: 'OUTDOOR' },
            { title: 'LIGHTING' },
            { title: 'PILLOWSANDTHROWS' },
            { title: 'RUGS' },
            { title: 'KITCHENANDDINNING' },
            { title: 'BEDDINGANDBATH' },
            { title: 'OURFAOURATES' },
            { title: 'DECORSANDMIRRORS' }
        ],
        FURNITURE: [
            { title: 'LIVING ROOM FURNIRURE' },
            { title: 'DINING ROOM FURNITURE' },
            { title: 'BEDROOM FURNITURE' },
            { title: 'STORAGE AND MEDIA FURNITURE' },
            { title: 'PILLOWSANDTHROWS' },
            { title: 'OFFICE FURNITURE' },
            { title: 'BEST SELLERS' },
            { title: 'BEDDINGANDBATH' },
            { title: 'OURFAOURATES' },
            { title: 'DECORSANDMIRRORS' }
        ],
        Decor: [{ title: 'd' }, { title: 'Decor' }]
    };

    return (
        <div>
            <div className='mainpara'>
                <p>CREATE SUB CATEGORY</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
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
                    <div>
                        <p>SUB Category</p>
                        <input
                            onChange={(e) =>
                                setSubHeading({ ...subHeading, subHeadingName: e.target.value })
                            }
                        />
                        {/* <input
                            value={mainHeading.mainHeadingName}
                            onChange={(e) =>
                                setMainHeading({ ...mainHeading, mainHeadingName: e.target.value })
                            }
                        /> */}
                        {/* <div>
                            <label>Sub Category</label>
                            <select>
                                {console.log('MAIN CATeGORY>>', maincategory)}
                                {Subcategory[maincategory]?.map((a) => (
                                    <option>{a.title}</option>
                                ))}
                            </select>
                        </div> */}
                    </div>
                    <div>
                        <label>INSERT IMAGE</label>
                        <FileBase
                            onDone={(base64) => setSubHeading({ ...subHeading, image: base64 })}
                            type='file'
                            multiple={false}
                        />
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>

            {/* {mainHeadings.length === null ? (
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
                                <button
                                    onClick={() => setHeadingClicked(mainH._id)}
                                    className='btn1'
                                >
                                    UPDATE
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )} */}
        </div>
    );
}

export default CreateSubMainCategory;
