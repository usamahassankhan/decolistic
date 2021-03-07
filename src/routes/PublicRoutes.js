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
import Sidebarcustomerservices from '../userComponent/CustomerServices/Sidebarcustomerservices/Sidebarcustomerservices';
import LoginPage from './../userComponent/AdminLogin/AdminLogin';
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
    return (
        <div className='App'>
            <Router>
                <div>
                    <Header sidebar={sidebarr} />
                </div>
                <div className={Tsidebar ? 'Border1 active' : 'Border1  '}>
                    <div
                        style={{
                            position: 'sticky',
                            zIndex: '0',
                            top: '0',
                            left: '0',
                            padding: '2vh'
                        }}
                    >
                        <div className='slide'>
                            <Sidebar sidebar={Tsidebar} />
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
                            <Route path='/product' exact component={ProductScreenComponent} />
                            <Route path='/customer' exact component={CustomerServices} />
                            {/* <Route path="/customer/id:" exact component={Overviewcustomer} /> */}
                            <Route path='/customer/request' exact component={RequestQuote} />
                            <Route path='/customer/help' exact component={Help} />
                            <Route path='/customer/return' exact component={Returnexchange} />
                            <Route path='/customer/oversized' exact component={Oversized} />

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
                                path={Constants.furniture}
                                render={() => <MainHeading pageToLoad={Constants.furniture} />}
                            />
                            <Route
                                exact
                                path={Constants.gifts}
                                render={() => <MainHeading pageToLoad={Constants.gifts} />}
                            />
                            <Route
                                exact
                                path={Constants.decorMirror}
                                render={() => <MainHeading pageToLoad={Constants.decorMirror} />}
                            />
                            <Route
                                exact
                                path={Constants.lighting}
                                render={() => <MainHeading pageToLoad={Constants.lighting} />}
                            />
                            <Route
                                exact
                                path={Constants.pillowThrows}
                                render={() => <MainHeading pageToLoad={Constants.pillowThrows} />}
                            />
                            <Route
                                exact
                                path={Constants.rugs}
                                render={() => <MainHeading pageToLoad={Constants.rugs} />}
                            />
                            <Route
                                exact
                                path={Constants.kitchenDining}
                                render={() => <MainHeading pageToLoad={Constants.kitchenDining} />}
                            />
                            <Route
                                exact
                                path={Constants.beddingBath}
                                render={() => <MainHeading pageToLoad={Constants.beddingBath} />}
                            />
                            <Route
                                exact
                                path={Constants.outdoor}
                                render={() => <MainHeading pageToLoad={Constants.outdoor} />}
                            />
                            <Route
                                exact
                                path={Constants.saleOffers}
                                render={() => <MainHeading pageToLoad={Constants.saleOffers} />}
                            />

                            {
                                //sub heading routes NEW
                            }
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
                                path={Constants.newHoliday}
                                render={() => <SubHeading pageToLoad={Constants.newHoliday} />}
                            />
                            <Route
                                exact
                                path={Constants.newGifts}
                                render={() => <SubHeading pageToLoad={Constants.newGifts} />}
                            />
                            <Route
                                exact
                                path={Constants.newDecorAndMirrors}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.newDecorAndMirrors} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.newLighting}
                                render={() => <SubHeading pageToLoad={Constants.newLighting} />}
                            />
                            <Route
                                exact
                                path={Constants.newPillowsThrow}
                                render={() => <SubHeading pageToLoad={Constants.newPillowsThrow} />}
                            />
                            <Route
                                exact
                                path={Constants.newRugs}
                                render={() => <SubHeading pageToLoad={Constants.newRugs} />}
                            />
                            <Route
                                exact
                                path={Constants.newKitchenDining}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.newKitchenDining} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.newOurFavourite}
                                render={() => <SubHeading pageToLoad={Constants.newOurFavourite} />}
                            />
                            {
                                //furniture sub routes
                            }
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
                                path={Constants.furnitureStorageMediaFurniture}
                                render={() => (
                                    <SubHeading
                                        pageToLoad={Constants.furnitureStorageMediaFurniture}
                                    />
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
                            <Route
                                exact
                                path={Constants.outdoorFurniture}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.outdoorFurniture} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.outdoorAccessories}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.outdoorAccessories} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.outdoorBestseller}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.outdoorBestseller} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.decorMirrorMirror}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.decorMirrorMirror} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.decorMirrorHomeAccessories}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.decorMirrorHomeAccessories} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.decorMirrorArtWallDecor}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.decorMirrorArtWallDecor} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.decorMirrorOrganizationHardware}
                                render={() => (
                                    <SubHeading
                                        pageToLoad={Constants.decorMirrorOrganizationHardware}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.decorMirrorHomeElectronicGames}
                                render={() => (
                                    <SubHeading
                                        pageToLoad={Constants.decorMirrorHomeElectronicGames}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.decorMirrorCurtainsCurtainsHardware}
                                render={() => (
                                    <SubHeading
                                        pageToLoad={Constants.decorMirrorCurtainsCurtainsHardware}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.decorMirrorBestSeller}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.decorMirrorBestSeller} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.lightingViewAll}
                                render={() => <SubHeading pageToLoad={Constants.lightingViewAll} />}
                            />
                            <Route
                                exact
                                path={Constants.lightingTableLamp}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.lightingTableLamp} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.lightingFloorLamp}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.lightingFloorLamp} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.lightingPendantLights}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.lightingPendantLights} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.lightingFlushMounts}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.lightingFlushMounts} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.lightingWallScones}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.lightingWallScones} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.lightingLightBulbSwitchPlates}
                                render={() => (
                                    <SubHeading
                                        pageToLoad={Constants.lightingLightBulbSwitchPlates}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.lightingBestSeller}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.lightingBestSeller} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.pillowThrowsViewAll}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.pillowThrowsViewAll} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.pillowThrowsPillows}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.pillowThrowsPillows} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.pillowThrowsPoufs}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.pillowThrowsPoufs} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.pillowThrowsThrows}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.pillowThrowsThrows} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.pillowThrowsBestSeller}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.pillowThrowsBestSeller} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.pillowThrowsViewAll}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.pillowThrowsViewAll} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.rugsViewAll}
                                render={() => <SubHeading pageToLoad={Constants.rugsViewAll} />}
                            />
                            <Route
                                exact
                                path={Constants.rugsAreaRugs}
                                render={() => <SubHeading pageToLoad={Constants.rugsAreaRugs} />}
                            />
                            <Route
                                exact
                                path={Constants.rugsRunner}
                                render={() => <SubHeading pageToLoad={Constants.rugsRunner} />}
                            />
                            <Route
                                exact
                                path={Constants.rugsOneOfAKindRugs}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.rugsOneOfAKindRugs} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.rugsDoormats}
                                render={() => <SubHeading pageToLoad={Constants.rugsDoormats} />}
                            />
                            <Route
                                exact
                                path={Constants.rugsKitchenRugs}
                                render={() => <SubHeading pageToLoad={Constants.rugsKitchenRugs} />}
                            />
                            <Route
                                exact
                                path={Constants.rugsOutDoorRugs}
                                render={() => <SubHeading pageToLoad={Constants.rugsOutDoorRugs} />}
                            />
                            <Route
                                exact
                                path={Constants.rugsBestSeller}
                                render={() => <SubHeading pageToLoad={Constants.rugsBestSeller} />}
                            />
                            <Route
                                exact
                                path={Constants.kitchenDiningDinnerwareFlatware}
                                render={() => (
                                    <SubHeading
                                        pageToLoad={Constants.kitchenDiningDinnerwareFlatware}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.kitchenDiningDinnerwareBar}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.kitchenDiningDinnerwareBar} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.kitchenDiningServing}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.kitchenDiningServing} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.kitchenDiningKitchenStorageTools}
                                render={() => (
                                    <SubHeading
                                        pageToLoad={Constants.kitchenDiningKitchenStorageTools}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.kitchenDiningLinens}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.kitchenDiningLinens} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.kitchenDiningBestSeller}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.kitchenDiningBestSeller} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.beddingBathBedding}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.beddingBathBedding} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.beddingBathBath}
                                render={() => <SubHeading pageToLoad={Constants.beddingBathBath} />}
                            />
                            <Route
                                exact
                                path={Constants.beddingBathBestSelllers}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.beddingBathBestSelllers} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.giftsViewAll}
                                render={() => <SubHeading pageToLoad={Constants.giftsViewAll} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsBarware}
                                render={() => <SubHeading pageToLoad={Constants.giftsBarware} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsGamesGear}
                                render={() => <SubHeading pageToLoad={Constants.giftsGamesGear} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsHostGifts}
                                render={() => <SubHeading pageToLoad={Constants.giftsHostGifts} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsModernKitchen}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.giftsModernKitchen} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.giftsBathSpa}
                                render={() => <SubHeading pageToLoad={Constants.giftsBathSpa} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsTechOfiice}
                                render={() => <SubHeading pageToLoad={Constants.giftsTechOfiice} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsUnder25}
                                render={() => <SubHeading pageToLoad={Constants.giftsUnder25} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsUnder50}
                                render={() => <SubHeading pageToLoad={Constants.giftsUnder50} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsUnder100}
                                render={() => <SubHeading pageToLoad={Constants.giftsUnder100} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsSmallGifts}
                                render={() => <SubHeading pageToLoad={Constants.giftsSmallGifts} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsThankyouGifts}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.giftsThankyouGifts} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.giftsWedding}
                                render={() => <SubHeading pageToLoad={Constants.giftsWedding} />}
                            />
                            <Route
                                exact
                                path={Constants.giftsGiftCard}
                                render={() => <SubHeading pageToLoad={Constants.giftsGiftCard} />}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersViewAll}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersViewAll} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersUpto20OffMarble}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersUpto20OffMarble} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersUpto30OffSelect}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersUpto30OffSelect} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersAllClearance}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersViewAll} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersFurniture}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersFurniture} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersDecorMirrors}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersDecorMirrors} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersLighting}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersLighting} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersPillowThrows}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersPillowThrows} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersRugs}
                                render={() => <SubHeading pageToLoad={Constants.saleOffersRugs} />}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersKitchenDining}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersKitchenDining} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersBeddingBath}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersBeddingBath} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersOutDoor}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersOutDoor} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersHoliday}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersHoliday} />
                                )}
                            />
                            <Route
                                exact
                                path={Constants.saleOffersFreeShipping}
                                render={() => (
                                    <SubHeading pageToLoad={Constants.saleOffersFreeShipping} />
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
