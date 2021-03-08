import React from 'react';
import HomecustomerServices from './HomecustomerServices/HomecustomerServices';
import RequestQuote from './RequestQuote/RequestQuote';
import { useLocation } from 'react-router-dom';

const CustomerServices = ({ sidebar }) => {
    // const location = useLocation();
    // console.log(location);
    // console.log("dsds", props.match.isExact);

    return (
        <HomecustomerServices sidebar={sidebar} />
        // <div style={{ display: 'flex' }}>

        // </div>
    );
};

export default CustomerServices;
