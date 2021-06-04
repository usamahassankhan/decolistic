import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../userComponent/Header/Header';
import Sidebar from '../userComponent/Sidebar/Sidebar';
import Home from '../userPages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../userComponent/Footer';
import SubHeading from '../userComponent/SubHeading/SubHeading';
import { Constants } from '../Constants';
import MainHeading from '../userComponent/MainHeading/MainHeading';
import ProductScreenComponent from '../userComponent/ProductScreenComponent/ProductScreenComponent';
import CustomerServices from '../userComponent/CustomerServices/CustomerServices';
import Overviewcustomer from '../userComponent/CustomerServices/Overviewcustomer/Overviewcustomer';
import RequestQuote from '../userComponent/CustomerServices/RequestQuote/RequestQuote';
import Returnexchange from '../userComponent/CustomerServices/Returnexchange/Returnexchange';
import Help from '../userComponent/CustomerServices/Help/Help';
import Oversized from '../userComponent/CustomerServices/Oversized/Oversized';
import Context from '../userComponent/Usecontext/Context';

import { useSelector, useDispatch } from 'react-redux';
import Sidebarcustomerservices from '../userComponent/CustomerServices/Sidebarcustomerservices/Sidebarcustomerservices';
import LoginPage from './../userComponent/AdminLogin/AdminLogin';
import { getOnlySubHeading } from '../actions/subHeading';
import { getMainHeading } from '../actions/mainHeading';
import { getSubSubHeading } from '../actions/subSubHeading';

function App() {
    const [Tsidebar, ToggleSide] = useState(false);
    const sidebarr = () => {
        ToggleSide(!Tsidebar);
        // console.log("working")
    };
    function handleResize() {
        if (window.innerWidth < 1008) {
            ToggleSide(true);
        }
        if (window.innerWidth > 1008) ToggleSide(false);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);
    console.log('dsda', window.innerWidth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMainHeading);
        dispatch(getOnlySubHeading);
        dispatch(getSubSubHeading);
    });
    useEffect(() => handleResize(), []);
    const mainHeadings = useSelector((state) => state.mainHeading);
    const subHeadings = useSelector((state) => state.subHeadingOnly);
    const subSubHeadings = useSelector((state) => state.subSubHeadings);
    return (
        <div className='App'>
            <Router>
                <div>
                    <Header sidebar={sidebarr} />
                </div>
                <div className={Tsidebar ? 'Border1' : 'Border1  '}>
                    <div
                        // style={{
                        //     position: 'sticky',
                        //     zIndex: '0',
                        //     top: '0',
                        //     left: '0',
                        //     padding: '2vh'
                        // }}
                        className='slidermain'
                    >
                        <div className='slide'>
                            <Sidebar sidebar={Tsidebar} />
                            {/* <Sidebar
                                render={(props) => <Sidebar {...props} sidebar={Tsidebar} />}
                            /> */}
                        </div>
                        <div className='slide11'>
                            <Sidebarcustomerservices sidebar={Tsidebar} />
                        </div>
                    </div>
                    <div className='border2'>
                        {/* <ScrollToTop />
          <Navbar /> */}
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/admin' exact component={LoginPage} />
                            <Route
                                path='/customer'
                                exact
                                render={(props) => (
                                    <CustomerServices {...props} sidebar={Tsidebar} />
                                )}
                            />
                            <Route path='/product/:id' exact component={ProductScreenComponent} />
                            <Route path='/customer' exact component={CustomerServices} />
                            {/* <Route path="/customer/id:" exact component={Overviewcustomer} /> */}
                            <Route path='/customer/request' exact component={RequestQuote} />
                            <Route path='/customer/help' exact component={Help} />
                            <Route path='/customer/return' exact component={Returnexchange} />
                            <Route path='/customer/oversized/:id' exact component={Oversized} />

                            {
                                //main heading routes
                            }
                            <Route
                                exact
                                path={Constants.new}
                                render={() => <MainHeading pageToLoad={Constants.new} />}
                            />
                            <Route
                                exact
                                path={Constants.saleOffers}
                                render={() => <MainHeading pageToLoad={Constants.saleOffers} />}
                            />
                            {mainHeadings?.map((mainH) => (
                                <Route
                                    exact
                                    path={`/${mainH.mainHeadingName}`}
                                    render={() => (
                                        <MainHeading pageToLoad={mainH.mainHeadingName} />
                                    )}
                                />
                            ))}
                            {
                                //sub heading routes NEW
                            }
                            {/* {subHeadings?.map((subH) => (
                                <Route
                                    exact
                                    path={`/${subH.mainHeadingName}/${subH.subHeadingName}`}
                                    render={() => (
                                        <SubHeading
                                            pageToLoad={`/${subH.mainHeadingName}/${subH.subHeadingName}`}
                                            mainHeadingName={subH.mainHeadingName}
                                            subHeadingName={subH.subHeadingName}
                                        />
                                    )}
                                />
                            ))}
                            {subSubHeadings?.map((subSubH) => (
                                <Route
                                    exact
                                    path={`/${subSubH.mainHeadingName}/${subSubH.subHeadingName}/${subSubH.subSubHeadingName}`}
                                    render={() => (
                                        <SubHeading
                                            pageToLoad={`/${subSubH.mainHeadingName}/${subSubH.subHeadingName}/${subSubH.subSubHeadingName}`}
                                            mainHeadingName={subSubH.mainHeadingName}
                                            subHeadingName={subSubH.subHeadingName}
                                            subSubHeadingName={subSubH.subSubHeadingName}
                                        />
                                    )}
                                />
                            ))} */}

                            <Route
                                exact
                                path={Constants.newViewAll}
                                render={() => <SubHeading pageToLoad={Constants.newViewAll} />}
                            />
                            <Route
                                exact
                                path={Constants.newFurniture}
                                render={() => <SubHeading pageToLoad={Constants.newFurniture} />}
                            />
                            <Route
                                exact
                                path={Constants.furniture}
                                render={() => <SubHeading pageToLoad={Constants.furniture} />}
                            />
                            <Route
                                exact
                                path={Constants.furnitureLivingRoom}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.furnitureLivingRoom} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.furnitureDining}
                                render={() => <SubHeading pageToLoad={Constants.furnitureDining} />}
                            />
                            <Route
                                exact
                                path={Constants.furnitureBedroom}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.furnitureBedroom} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.furnitureOffice}
                                render={() => <SubHeading pageToLoad={Constants.furnitureOffice} />}
                            />
                            <Route
                                exact
                                path={Constants.furnitureBestSeller}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.furnitureBestSeller} />
                                )}
                            />
                            {/* <Route exact path="/" render={() => <CustomerServices />} /> */}
                        </Switch>
                    </div>
                </div>
            </Router>
            <Footer />
        </div>
    );
}

// export default withRouter(App);
export default App;
