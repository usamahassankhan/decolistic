import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainHeading, createMainHeading, updateMainHeading } from '../../actions/mainHeading';

function CreateMainCategory() {
    const dispatch = useDispatch();
    const [headingClicked, setHeadingClicked] = useState(null);
    const [mainHeading, setMainHeading] = useState({
        mainHeadingName: ''
    });
    const mainHeadings = useSelector((state) => state.mainHeading);
    const currentMainHeadingId = useSelector((state) => state.currentMainHeadingId);
    console.log(currentMainHeadingId);
    const currentMainHeading = useSelector((state) =>
        headingClicked ? state.mainHeading.find((h) => h._id === headingClicked) : null
    );

    useEffect(() => {
        console.log();
        if (currentMainHeading) setMainHeading(currentMainHeading);
        dispatch(getMainHeading());
    }, [dispatch, headingClicked]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (headingClicked === null) {
            dispatch(createMainHeading(mainHeading));
        }
        //need to add if state of current id
        setMainHeading({
            mainHeadingName: ''
        });
        setHeadingClicked({
            headingClicked: null
        });
    };
    useEffect(() => {
        if (currentMainHeading) setMainHeading(currentMainHeading);
    }, [currentMainHeading]);
    return (
        <div>
            <div>CREATE MAIN CATEGORY</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Main Category</p>
                    <input
                        value={mainHeading.mainHeadingName}
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
                            style={{ marginTop: '20px', border: '2px solid black' }}
                            onClick={() => setHeadingClicked(mainH._id)}
                        >
                            <p> {mainH._id}</p>
                            <p>{mainH.mainHeadingName}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default CreateMainCategory;
