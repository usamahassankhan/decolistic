import React, { Component } from 'react';
import $ from 'jquery';
import './Sidebar.css';

import { NavLink } from 'react-router-dom';
import { getMainHeading } from '../../actions/mainHeading.js';
import { getOnlySubHeading } from '../../actions/subHeading.js';
import { getSubSubHeading } from '../../actions/subSubHeading.js';
import { connect } from 'react-redux';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.state = {
            checked: false,
            mainHeadings: [],
            subHeadings: [],
            subSubHeadings: []
        };
        this.props.getMainHeading();
        this.props.getOnlySubHeading();
        this.props.getSubSubHeading();
    }
    componentDidMount() {
        $('.parent > a').click(function () {
            $('.parent > div.menu').not($(this).siblings()).hide();
            $(this).siblings('div.menu').slideToggle();
        });

        // this.setState({
        //     mainHeadings: this.props.mainHeadings,
        //     subHeadings: this.props.subHeadings,
        //     subSubHeadings: this.props.subSubHeadings
        // });
    }

    changer = () => {
        this.props.toggler();
    };
    handleCheckBox(e) {
        this.setState({
            checked: !this.state.checked
        });
    }

    static getDerivedStateFromProps(props, state) {
        return {
            mainHeadings: props.mainHeadings,
            subHeadings: props.subHeadings,
            subSubHeadings: props.subSubHeadings
        };
    }

    render() {
        console.log('IN RENDER>>>', this.state.subHeadings);
        if (
            this.state.subSubHeadings.length > 0 &&
            this.state.mainHeadings.length > 0 &&
            this.state.subHeadings.length > 0
        ) {
            return (
                <>
                    <div className='mainsidebar'>
                        <div className={this.props.sidebar ? 'side actives' : 'side'}>
                            {this.state.mainHeadings?.map((mainH) => (
                                <div className={'parent'}>
                                    <NavLink
                                        to={`/${mainH.mainHeadingName}`}
                                        activeStyle={{
                                            borderBottom: '1px solid gray',
                                            padding: '0px',
                                            color: 'black'
                                        }}
                                    >
                                        {mainH.mainHeadingName}
                                    </NavLink>
                                    <div className={'menu hidden'}>
                                        <div>
                                            <ul>
                                                {this.state.subHeadings.map((subH) =>
                                                    subH.mainHeadingName ===
                                                    mainH.mainHeadingName ? (
                                                        <li>
                                                            <NavLink
                                                                to={`/${subH.mainHeadingName}/${subH.subHeadingName}`}
                                                                activeStyle={{
                                                                    borderBottom: '1px solid gray',
                                                                    padding: '0px',
                                                                    color: 'black'
                                                                }}
                                                                onClick={this.handleCheckBox}
                                                            >
                                                                {subH.subHeadingName}
                                                            </NavLink>
                                                            {this.state.checked ? (
                                                                <div>
                                                                    <ul>
                                                                        {this.state.subSubHeadings?.map(
                                                                            (subSubH, index) =>
                                                                                subSubH.mainHeadingName ===
                                                                                    mainH.mainHeadingName &&
                                                                                subSubH.subHeadingName ===
                                                                                    subH.subHeadingName ? (
                                                                                    <li key={index}>
                                                                                        <NavLink
                                                                                            to={`/${subSubH.mainHeadingName}/${subSubH.subHeadingName}/${subSubH.subSubHeadingName}`}
                                                                                            activeStyle={{
                                                                                                borderBottom:
                                                                                                    '1px solid gray',
                                                                                                padding:
                                                                                                    '0px',
                                                                                                color:
                                                                                                    'black'
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                subSubH.subSubHeadingName
                                                                                            }
                                                                                        </NavLink>
                                                                                    </li>
                                                                                ) : null
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            ) : null}
                                                        </li>
                                                    ) : null
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            );
        } else {
            return <h1>LOADUING</h1>;
        }
    }
}
<<<<<<< HEAD
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
=======
const mapDispatchToProps = {
    getSubSubHeading,
    getOnlySubHeading,
    getMainHeading
};
const mapStateToProps = (state) => ({
    subSubHeadings: state.subSubHeading,
    subHeadings: state.subHeadingOnly,
    mainHeadings: state.mainHeading
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
>>>>>>> dde48fb9781a82b44a7bd86da4337320fddb23ff
