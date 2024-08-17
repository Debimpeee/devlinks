import React from 'react'
import "./FrameTwo.css"
import SkeletonTwo from '../../components/SkeletonTwo/SkeletonTwo'
import { Link } from 'react-router-dom'


const FrameTwo = () => {
  return (
    <div className='frameTwo'>
      <div className="screen">
        <SkeletonTwo/>
      </div>

      <div className="customize">
        <div className="customizeCont">
          <div className="customizeText">
              <h3>Customize your links</h3>
              <p>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <Link to="/frameTwo" className="addLink">
              <p>+</p>
              <p>Add new link</p>
          </Link>
          <div className="getStarted">
              <div className="startedImg">
                <img src="images/Group 273.jpg" alt="" />
              </div>
              <div className="startedText">
                <h3>Let’s get you started</h3>
                <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
              </div>
          </div>
        </div>

        <hr />
        <div className="btnCont">
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default FrameTwo











// import React, { useState } from 'react'
// import { PiEqualsLight } from "react-icons/pi";
// import './FrameTwo.css'
// import SimpleBarReact from "simplebar-react";
// import AllLinks from '../../components/AllLinks/AllLinks';
// import { IoIosArrowRoundForward } from "react-icons/io";

// import 'simplebar-react/dist/simplebar.min.css';


// const FrameTwo = () => {
//   const [linkData, setLinkData] = useState({
//     link: ""
//   })

//   const handleChange = (e) => {
//     e.target.value(setLinkData)
//   }
//   return (
//     <div className='frameTwo'>

//       <div className="screen">
//         <div className='skeleton'>
//           <div className="skeletonCont">
//               <div className="notch"></div>
              
//                   <div className="content">
//                       <div className="top">
//                           <div className="skelPhoto"></div>
//                           <div className="skelText">
//                               <div className="hthree"></div>
//                               <div className='paraG'></div>
//                           </div>
//                       </div>
//                       <SimpleBarReact style={{ maxHeight: '300px', width: '100%' }}>
//                         <div className="bottomTwo">

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                                 <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>  

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>   

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    

//                           <div>
//                             <div className="sub git">
//                               <img src="images/github-solid.svg" alt="" />
//                               <p>Github</p>
//                             </div>
//                             <IoIosArrowRoundForward size={20} />
//                           </div>    
//                         </div>
//                       </SimpleBarReact>
//                 </div>
//           </div>
//       </div>
//     </div>

//     <div className="customizeTwo">
//       <div className="customizeCont">
//         <div className="customizeText">
//             <h3>Customize your links</h3>
//             <p>Add/edit/remove links below and then share all your profiles with the world!</p>
//         </div>
//         <div className="addLink">
//             <p>+</p>
//             <p>Add new link</p>
//         </div>
//         <div className="dropDown">

//         <div className="reLink">
//           <div className="hash">
//               <PiEqualsLight/>
//               <h4>Link#1</h4>
//           </div>
//               <h4>Remove</h4>
//         </div>

//         <div className="linkDropDown">
//           <AllLinks/>
//         </div>

//         </div>
//       </div>

//       <hr />
//       <div className="btnCont">
//         <button>Save</button>
//       </div>
//     </div>

//   </div>
//   )
// }

// export default FrameTwo




// // import React, { useState } from 'react'
// // import { PiEqualsLight } from "react-icons/pi";
// // import './FrameTwo.css'
// // import SimpleBarReact from "simplebar-react";
// // import AllLinks from '../../components/AllLinks/AllLinks';
// // import { IoIosArrowRoundForward } from "react-icons/io";

// // import 'simplebar-react/dist/simplebar.min.css';


// // const FrameTwo = () => {
// //   const [linkData, setLinkData] = useState({
// //     link: ""
// //   })

// //   const handleChange = (e) => {
// //     e.target.value(setLinkData)
// //   }
// //   return (
// //     <div className='frameTwo'>
// //       <div className="screenTwo">

// //       <div className='skeletonTwo'>
// //         <div className="skeletonCont">
// //             <div className="notch"></div>
// //                 <div className="content">
// //                     <div className="top">
// //                         <div className="skelPhoto"></div>
// //                         <div className="skelText">
// //                             <div className="hthree"></div>
// //                             <div className='paraG'></div>
// //                         </div>
// //                     </div>
// //                     <SimpleBarReact style={{ maxHeight: '300px', width: '100%' }}>
// //                         <div className="bottom">
// //                             <div>
// //                               <div className="sub git">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>   

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>  

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>    

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>   

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>    

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>    

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>  

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>   

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>    

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>    

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>   

// //                             <div>
// //                               <div className="sub">
// //                                 <img src="images/github-solid.svg" alt="" />
// //                                 <p>Github</p>
// //                               </div>
// //                               <IoIosArrowRoundForward />
// //                             </div>    
// //                         </div>
// //                     </SimpleBarReact>
// //                 </div>
// //               </div>
// //         </div>
// //     </div>

// //     <div className="customize">
// //       <div className="customizeContTwo">

// //         <div className="customizeText">
// //             <h3>Customize your links</h3>
// //             <p>Add/edit/remove links below and then share all your profiles with the world!</p>
// //         </div>

// //         <div className="addLink">
// //             <p>+</p>
// //             <p>Add new link</p>
// //         </div>

// //         <div className="dropDown">

// //             <div className="reLink">
// //               <div className="hash">
// //                   <PiEqualsLight/>
// //                   <h4>Link#1</h4>
// //               </div>
// //                   <h4>Remove</h4>
// //             </div>

// //             <div className="linkDropDown">
// //               <AllLinks/>
// //             </div>

// //         </div>
// //       </div>

// //       <hr />
// //       <div className="btnCont">
// //         <button onChange={handleChange}>Save</button>
// //       </div>
      
// //     </div>
// //   </div>
// //   )
// // }

// // export default FrameTwo


