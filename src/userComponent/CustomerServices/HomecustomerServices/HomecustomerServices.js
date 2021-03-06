import React from 'react';
import './HomecustomerServices.css';
import Overviewcustomer from '../Overviewcustomer/Overviewcustomer';
import Sidebarcustomerservices from '../Sidebarcustomerservices/Sidebarcustomerservices';
import Help from '../Help/Help';
import Oversized from '../Oversized/Oversized';
import Returnexchange from '../Returnexchange/Returnexchange';
import RequestQuote from '../RequestQuote/RequestQuote';
import { Switch, BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
// import Overviewcustomer from "./../Overviewcustomer/Overviewcustomer";

const HomecustomerServices = ({ sidebar }) => {
    // const location = useLocation();
    // console.log(location.pathname);
    // console.log("dsds", props);
    return (
        <div className='homecustomerservices'>
            <Router>
                {/* <Sidebarcustomerservices /> */}
                <div>{sidebar && <Sidebarcustomerservices />}</div>
                <Switch>
                    <div className='subweb2'>
                        <Route path='/customer/overview' exact component={Overviewcustomer} />
                        <Route path='/customer/oversized' exact component={Oversized} />
                        <Route path='/customer/return' exact component={Returnexchange} />
                        <Route path='/customer' exact component={RequestQuote} />
                        <Route path='/customer/help' exact component={Help} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
};
{
    /*  </Router>
      <div className="hco">
        <Overviewcustomer />
      </div>
      <div className="hco">
        <Help />
      </div>

      <div className="hco">
        <Returnexchange />
      </div>

      <div className="hco">
        <Oversized />
      </div>
      <div className="hco">
        <RequestQuote />
      </div> */
}

export default HomecustomerServices;
