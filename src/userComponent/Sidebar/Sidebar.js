import React, { Component } from 'react';
import $ from 'jquery';
import '../Sidebar/Sidebar.css';
// import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { Constants } from '../../Constants';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.state = {
            checked: false
        };
    }
    componentDidMount() {
        $('.parent > a').click(function () {
            $('.parent > div.menu').not($(this).siblings()).hide();
            $(this).siblings('div.menu').slideToggle();
        });
    }
    changer = () => {
        this.props.toggler();
    };
    handleCheckBox(e) {
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        return (
            <div>
                {/* {this.props.sidebar && ( */}
                <div className={this.props.sidebar ? 'actives' : 'mainsidebar'}>
                    {/* <div className={this.props.sidebar ? "side actives" : "side"}> */}
                    <div className='side'>
                        <div className='parent'>
                            <NavLink
                                to={Constants.new}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px'
                                }}
                                className='link'
                            >
                                NEW
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.newViewAll}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                VIEW ALL
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newFurniture}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newOutdoor}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                OUTDOOR
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newDecorAndMirrors}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                DECOR & MIRRORS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newLighting}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                LIGHTING
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newPillowsThrow}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                PILLOW & THROWS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newRugs}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                RUGS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newKitchenDining}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                KITCHEN & DINING
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newBeddingBath}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEDDING & BATH
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.newOurFavourite}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                OUR FAVORITES
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.furniture}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                FURNITURE
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.furnitureLivingRoom}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                LIVING ROOM FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.furnitureDining}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                DINING ROOM FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.furnitureBedroom}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEDROOM FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.furnitureStorageMediaFurniture}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                STORAGE & MEDIA FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.furnitureOffice}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                OFFICE FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.furnitureBestSeller}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEST SELLERS
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.outdoor}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                OUTDOOR
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.outdoorFurniture}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                OUTDOOR FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.outdoorAccessories}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                OUTDOOR ACCESSORIES
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.outdoorBestseller}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEST SELLERS
                                            </NavLink>
                                        </li>
                                        {/* <li>
                      <NavLink
                        to="/HOLIDAY WREATHS & TREES"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        HOLIDAY WREATHS & TREES
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/HOLIDAY ENTERTAINING"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        HOLIDAY ENTERTAINING
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/ BUNDLE & SAVE"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        BUNDLE & SAVE
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/HOLIDAY GIFTS"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        HOLIDAY GIFTS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/HOST W/ JENNIFER FISHER"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        HOST W/ JENNIFER FISHER
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/ DECORATE W/ KARA MANN"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        DECORATE W/ KARA MANN
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/DINE W/ MATTHEW WILLIAMSON"
                        activeStyle={{
                          borderBottom: "1px solid gray",
                          padding: "0px",
                          color: "black",
                        }}
                      >
                        DINE W/ MATTHEW WILLIAMSON
                      </NavLink>
                      </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.decorMirror}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                DECOR & MIRRORS
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.decorMirrorMirror}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                MIRRORS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.decorMirrorHomeAccessories}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                HOME ACCESSORIES
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.decorMirrorArtWallDecor}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                ART & WALL DECOR
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.decorMirrorOrganizationHardware}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                ORGANIZATION & HARDWARE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.decorMirrorHomeElectronicGames}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                HOME ELECTRONICS & GAMES
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.decorMirrorCurtainsCurtainsHardware}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                CURTAINS & CURTAIN HARDWARE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.decorMirrorBestSeller}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEST SELLERS
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={'parent'}>
                            <NavLink
                                to={Constants.lighting}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                LIGHTING
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingViewAll}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                VIEW ALL
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingTableLamp}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                TABLE LAMPS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingFloorLamp}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                FLOOR LAMPS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingPendantLights}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                PENDANT LIGHTS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingFlushMounts}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                FLUSH MOUNTS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingWallScones}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                WALL SCONCES
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingLightBulbSwitchPlates}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                LIGHTBULBS & SWITCH PLATES
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.lightingBestSeller}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEST SELLERS
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.pillowThrows}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                PILLOWS & THROWS
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.pillowThrowsViewAll}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                VIEW ALL
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.pillowThrowsPillows}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                PILLOWS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.pillowThrowsPoufs}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                POUFS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.pillowThrowsThrows}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                THROWS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.pillowThrowsBestSeller}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEST SELLERS
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.rugs}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                RUGS
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.rugsViewAll}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                VIEW ALL
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.rugsAreaRugs}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                AREA RUGS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.rugsRunner}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                RUNNER
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.rugsOneOfAKindRugs}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                ONE-OF-A-KIND RUGS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.rugsDoormats}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                DOORMATS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.rugsKitchenRugs}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                KITCHEN RUGS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.rugsOutDoorRugs}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                OUTDOOR RUGS
                                            </NavLink>
                                            <li>
                                                <NavLink
                                                    to={Constants.rugsBestSeller}
                                                    activeStyle={{
                                                        borderBottom: '1px solid gray',
                                                        padding: '0px',
                                                        color: 'black'
                                                    }}
                                                >
                                                    BEST SELLERS
                                                </NavLink>
                                            </li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.kitchenDining}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                KITCHEN & DINING
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.kitchenDiningDinnerwareFlatware}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                DINNERWARE & FLATWARE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.kitchenDiningDinnerwareBar}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                DRINKWARE & BAR
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.kitchenDiningServing}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                SERVING
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.kitchenDiningKitchenStorageTools}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                KITCHEN STORAGE & TOOLS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.kitchenDiningLinens}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                KITCHEN LINENS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.kitchenDiningBestSeller}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEST SELLERS
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.beddingBath}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                BEDDING & BATH
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.beddingBathBedding}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEDDING
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.beddingBathBath}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BATH
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.beddingBathBestSelllers}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEST SELLERS
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to={Constants.gifts}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                GIFTS
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsViewAll}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                VIEW ALL
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsBarware}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BARWARE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsGamesGear}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                GAMES & GEAR
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsHostGifts}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                HOST GIFTS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsModernKitchen}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                MODERN KITCHEN
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsBathSpa}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BATH & SPA
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsTechOfiice}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                TECH & OFFICE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsUnder25}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                UNDER $25
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsUnder50}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                UNDER $50
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsUnder100}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                UNDER $100
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsSmallGifts}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                SMALL GIFTS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsThankyouGifts}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                THANK YOU GIFTS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.giftsWedding}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                WEDDING
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to={Constants.giftsGiftCard}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                GIFT CARD
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={'parent'}>
                            <NavLink
                                to={Constants.saleOffers}
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                SALES & OFFFERS
                            </NavLink>
                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersViewAll}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                VIEW ALL
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersUpto20OffMarble}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                UP TO 20% OFF MARBLE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersUpto30OffSelect}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                UP TO 30% OFF SELECT BEDDING AND CURTAINS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersAllClearance}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                ALL CLEARANCE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersFurniture}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                FURNITURE
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersDecorMirrors}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                DECOR & MIRRORS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersLighting}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                LIGHTING
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersPillowThrows}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                PILLOWS & THROWS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersRugs}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                RUGS
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersKitchenDining}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                KITCHEN & DINING
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersBeddingBath}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                BEDDING & BATH
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersOutDoor}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                OUTDOOR
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersHoliday}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                HOLIDAY
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Constants.saleOffersFreeShipping}
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                            >
                                                FREE SHIPPING
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={'parent'}>
                            <NavLink
                                to='/SALES & OFFERS'
                                activeStyle={{
                                    borderBottom: '1px solid gray',
                                    padding: '0px',
                                    color: 'black'
                                }}
                            >
                                SALES & OFFERS
                            </NavLink>

                            <div className={'menu hidden'}>
                                <div>
                                    <ul>
                                        {/* <div className={"parent"}> */}
                                        <li>
                                            <NavLink
                                                to='/DECORSMIRRORS'
                                                activeStyle={{
                                                    borderBottom: '1px solid gray',
                                                    padding: '0px',
                                                    color: 'black'
                                                }}
                                                onClick={this.handleCheckBox}
                                            >
                                                DECOR & MIRRORS
                                            </NavLink>

                                            {this.state.checked ? (
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <NavLink
                                                                to='/VIEWALL'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                VIEW ALL
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to='/WALL MIRROR'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                WALL MIRROR
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to='/FLOOR MIRROR'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                FLOOR MIRROR
                                                            </NavLink>
                                                        </li>

                                                        <li>
                                                            <NavLink
                                                                to='/VANITY MIRROR'
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                            >
                                                                VANITY MIRROR
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                            {/* </div> */}
                                            {/* </div> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
        );
    }
}
export default Sidebar;

// usama square code
// import React, { Component } from 'react';
// import $ from 'jquery';
// import './Sidebar.css';

// import { NavLink } from 'react-router-dom';
// import { getMainHeading } from '../../actions/mainHeading.js';
// import { getOnlySubHeading } from '../../actions/subHeading.js';
// import { getSubSubHeading } from '../../actions/subSubHeading.js';
// import { connect } from 'react-redux';

// class Sidebar extends Component {
//     constructor(props) {
//         super(props);
//         this.handleCheckBox = this.handleCheckBox.bind(this);
//         this.state = {
//             checked: false,
//             mainHeadings: [],
//             subHeadings: [],
//             subSubHeadings: []
//         };
//         this.props.getMainHeading();
//         this.props.getOnlySubHeading();
//         this.props.getSubSubHeading();
//     }
//     componentDidMount() {
//         $('.parent > a').click(function () {
//             $('.parent > div.menu').not($(this).siblings()).hide();
//             $(this).siblings('div.menu').slideToggle();
//         });

//         // this.setState({
//         //     mainHeadings: this.props.mainHeadings,
//         //     subHeadings: this.props.subHeadings,
//         //     subSubHeadings: this.props.subSubHeadings
//         // });
//     }

//     changer = () => {
//         this.props.toggler();
//     };
//     handleCheckBox(e) {
//         this.setState({
//             checked: !this.state.checked
//         });
//     }

//     static getDerivedStateFromProps(props, state) {
//         return {
//             mainHeadings: props.mainHeadings,
//             subHeadings: props.subHeadings,
//             subSubHeadings: props.subSubHeadings
//         };
//     }

//     render() {
//         console.log('IN RENDER>>>', this.state.mainHeadings);
//         console.log('IN RENDER sub heading>>>', this.state.subHeadings);
//         // if (
//         //     this.state.subSubHeadings.length > 0 &&
//         //     this.state.mainHeadings.length > 0 &&
//         //     this.state.subHeadings.length > 0
//         // )
//         {
//             return (
//                 <>
//                     <div className='mainsidebar'>
//                         <div className={this.props.sidebar ? 'side actives' : 'side'}>
//                             {this.state.mainHeadings?.map((mainH) => (
//                                 <div className={'parent'}>
//                                     <NavLink
//                                         to={`/${mainH.mainHeadingName}`}
//                                         activeStyle={{
//                                             borderBottom: '1px solid gray',
//                                             padding: '0px',
//                                             color: 'black'
//                                         }}
//                                     >
//                                         {mainH.mainHeadingName}
//                                     </NavLink>
//                                     <div className={'menu hidden'}>
//                                         <div>
//                                             <ul>
//                                                 {this.state.subHeadings.map((subH) =>
//                                                     subH.mainHeadingName ===
//                                                     mainH.mainHeadingName ? (
//                                                         // this.state.mainHeadings.mainHeadingName ? (

//                                                         <li>
//                                                             <NavLink
//                                                                 to={`/${subH.mainHeadingName}/${subH.subHeadingName}`}
//                                                                 activeStyle={{
//                                                                     borderBottom: '1px solid gray',
//                                                                     padding: '0px',
//                                                                     color: 'black'
//                                                                 }}
//                                                                 onClick={this.handleCheckBox}
//                                                             >
//                                                                 {subH.subHeadingName}
//                                                             </NavLink>
//                                                             {this.state.checked ? (
//                                                                 <div>
//                                                                     <ul>
//                                                                         {this.state.subSubHeadings?.map(
//                                                                             (subSubH, index) =>
//                                                                                 subSubH.mainHeadingName ===
//                                                                                     mainH.mainHeadingName &&
//                                                                                 subSubH.subHeadingName ===
//                                                                                     subH.subHeadingName ? (
//                                                                                     <li key={index}>
//                                                                                         <NavLink
//                                                                                             to={`/${subSubH.mainHeadingName}/${subSubH.subHeadingName}/${subSubH.subSubHeadingName}`}
//                                                                                             activeStyle={{
//                                                                                                 borderBottom:
//                                                                                                     '1px solid gray',
//                                                                                                 padding:
//                                                                                                     '0px',
//                                                                                                 color:
//                                                                                                     'black'
//                                                                                             }}
//                                                                                         >
//                                                                                             {
//                                                                                                 subSubH.subSubHeadingName
//                                                                                             }
//                                                                                         </NavLink>
//                                                                                     </li>
//                                                                                 ) : null
//                                                                         )}
//                                                                     </ul>
//                                                                 </div>
//                                                             ) : null}
//                                                         </li>
//                                                     ) : null
//                                                 )}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </>
//             );
//         }
//         //  else {
//         //     return <h1>LOADUING</h1>;
//         // }
//     }
// }
// const mapDispatchToProps = {
//     getSubSubHeading,
//     getOnlySubHeading,
//     getMainHeading
// };
// const mapStateToProps = (state) => ({
//     subSubHeadings: state.subSubHeading,
//     subHeadings: state.subHeadingOnly,
//     mainHeadings: state.mainHeading
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

// usama hasan khan code

// import React, { Component } from 'react';
// import $ from 'jquery';
// import './Sidebar.css';

// import { NavLink } from 'react-router-dom';
// import { getMainHeading } from '../../actions/mainHeading.js';
// import { getOnlySubHeading } from '../../actions/subHeading.js';
// import { getSubSubHeading } from '../../actions/subSubHeading.js';
// import { connect } from 'react-redux';

// class Sidebar extends Component {
//     constructor(props) {
//         super(props);
//         this.handleCheckBox = this.handleCheckBox.bind(this);
//         this.handleCheckBox1 = this.handleCheckBox1.bind(this);
//         this.state = {
//             checked: true,
//             mainHeadings: [],
//             subHeadings: [],
//             subSubHeadings: []
//         };
//         this.state = {
//             checked1: true
//         };
//         this.props.getMainHeading();
//         this.props.getOnlySubHeading();
//         this.props.getSubSubHeading();
//     }
//     componentDidMount() {
//         $('.parent > a').click(function () {
//             $('.parent > div.menu').not($(this).siblings()).hide();
//             $(this).siblings('div.menu').slideToggle();
//         });

//         // this.setState({
//         //     mainHeadings: this.props.mainHeadings,
//         //     subHeadings: this.props.subHeadings,
//         //     subSubHeadings: this.props.subSubHeadings
//         // });
//     }

//     changer = () => {
//         this.props.toggler();
//     };
//     handleCheckBox(e, i) {
//         console.log('n', e.target.id);
//         if (e.target.id == i)
//             this.setState({
//                 checked: !this.state.checked
//             });
//     }
//     handleCheckBox1(e) {
//         this.setState({
//             checked1: !this.state.checked1
//         });
//     }

//     static getDerivedStateFromProps(props, state) {
//         return {
//             mainHeadings: props.mainHeadings,
//             subHeadings: props.subHeadings,
//             subSubHeadings: props.subSubHeadings
//         };
//     }

//     render() {
//         console.log('IN RENDER>>>', this.state.mainHeadings);
//         console.log('IN RENDER sub heading>>>', this.state.subHeadings);
//         // if (
//         //     this.state.subSubHeadings.length > 0 &&
//         //     this.state.mainHeadings.length > 0 &&
//         //     this.state.subHeadings.length > 0
//         // )
//         {
//             return (
//                 <>
//                     <div className='mainsidebar'>
//                         <div className={this.props.sidebar ? 'side actives' : 'side'}>
//                             {this.state.mainHeadings?.map((mainH, i) => (
//                                 <div className={'parent'}>
//                                     <NavLink
//                                         to={`/${mainH.mainHeadingName}`}
//                                         id={i}
//                                         activeStyle={{
//                                             borderBottom: '1px solid gray',
//                                             padding: '0px',
//                                             color: 'black'
//                                         }}
//                                         // onClick={() => {
//                                         //     this.setState(...this.state, !this.state.checked);
//                                         // }}
//                                         // onClick={this.setState((prevState) => ({
//                                         //     prevState,
//                                         //     checked: !prevState.checked
//                                         // }))}

//                                         onClick={(e) => this.handleCheckBox(e, i)}
//                                     >
//                                         {mainH.mainHeadingName}
//                                         {/*
//                                             {
//                                                 mainH: [{subHeading,[dasd,sadsad,sadsa],}]
//                                             }
//                                         */}
//                                     </NavLink>
//                                     <div className={'menu'}>
//                                         {this.state.checked ? (
//                                             <div>
//                                                 <ul>
//                                                     {this.state.subHeadings.map((subH) =>
//                                                         subH.mainHeadingName ===
//                                                         mainH.mainHeadingName ? (
//                                                             // this.state.mainHeadings.mainHeadingName ? (

//                                                             <li>
//                                                                 <NavLink
//                                                                     to={`/${subH.mainHeadingName}/${subH.subHeadingName}`}
//                                                                     activeStyle={{
//                                                                         borderBottom:
//                                                                             '1px solid gray',
//                                                                         padding: '0px',
//                                                                         color: 'black'
//                                                                     }}
//                                                                     onClick={this.handleCheckBox1}
//                                                                     // onClick={this.setState(
//                                                                     //     (prevState) => ({
//                                                                     //         prevState,
//                                                                     //         checked: !prevState.checked
//                                                                     //     })
//                                                                     // )}
//                                                                 >
//                                                                     {subH.subHeadingName}
//                                                                 </NavLink>
//                                                                 {!this.state.checked1 ? (
//                                                                     <div>
//                                                                         <ul>
//                                                                             {this.state.subSubHeadings?.map(
//                                                                                 (subSubH, index) =>
//                                                                                     subSubH.mainHeadingName ===
//                                                                                         mainH.mainHeadingName &&
//                                                                                     subSubH.subHeadingName ===
//                                                                                         subH.subHeadingName ? (
//                                                                                         <li
//                                                                                             key={
//                                                                                                 index
//                                                                                             }
//                                                                                         >
//                                                                                             <NavLink
//                                                                                                 to={`/${subSubH.mainHeadingName}/${subSubH.subHeadingName}/${subSubH.subSubHeadingName}`}
//                                                                                                 activeStyle={{
//                                                                                                     borderBottom:
//                                                                                                         '1px solid gray',
//                                                                                                     padding:
//                                                                                                         '0px',
//                                                                                                     color:
//                                                                                                         'black'
//                                                                                                 }}
//                                                                                             >
//                                                                                                 {
//                                                                                                     subSubH.subSubHeadingName
//                                                                                                 }
//                                                                                             </NavLink>
//                                                                                         </li>
//                                                                                     ) : null
//                                                                             )}
//                                                                         </ul>
//                                                                     </div>
//                                                                 ) : null}
//                                                             </li>
//                                                         ) : null
//                                                     )}
//                                                 </ul>
//                                             </div>
//                                         ) : null}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </>
//             );
//         }
//         //  else {
//         //     return <h1>LOADUING</h1>;
//         // }
//     }
// }
// const mapDispatchToProps = {
//     getSubSubHeading,
//     getOnlySubHeading,
//     getMainHeading
// };
// const mapStateToProps = (state) => ({
//     subSubHeadings: state.subSubHeading,
//     subHeadings: state.subHeadingOnly,
//     mainHeadings: state.mainHeading
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
