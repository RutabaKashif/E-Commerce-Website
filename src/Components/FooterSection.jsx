// import React from 'react'

// export default function FooterSection() {
//   return (
//     <div className='bg-secondary mt-3 fs-5 fw-semibold text-center text-white py-2 mt-5'>All the Rights Reserved</div>

//   )
// }
// import React, { useState } from 'react';
// import {
//   FaInstagram,
//   FaFacebook,
//   FaTwitter,
//   FaEnvelope,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';


// const Footer = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (e) => {
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your code to handle the form submission (e.g., subscribe the email)
//     console.log('Subscribed email:', email);
//     setEmail(e.target.value);
//     Swal.fire({
//       title: 'Successfully Subscribed',
//       text: 'Thank You for Subscribing',
//       icon: 'success',
//       confirmButtonText: 'Continue Shopping'
//   })
//       .then(() => {
//         setEmail("")
       
//       })
// }
  
  

  

//   return (
//     <section className=" container-fluid mr-auto bg-dark text-white ">
//       <footer className="py-5 text-center">
//         <div className=" row d-flex align-items-center justify-content-center text-center text-decoration-none">
//           {/* 1st section */}
//           <div className="col-6 col-md-2 mb-3 ">
//             <h5>Section</h5>
//             <ul className="nav flex-column ">
//               <li className="nav-item mb-2">
//                 <a href="#" className="nav-link p-0 text-white">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="#" className="nav-link p-0 text-white">
//                   Features
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="#" className="nav-link p-0  text-white">
//                   FAQs
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Footer form */}
//           <div className="container  text-center" >
//   <div className=" col-md-5 mx-auto mb-3 ">
//     <form onSubmit={handleSubmit}>
//       <h5 className='text-center fw-semibold '>SUBSCRIBE </h5>
//       <p className='text-center '>Monthly digest of what's new and exciting from us </p>
//       <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//         <label htmlFor="newsletter1" className="visually-hidden ">
//           Email address
//         </label>
//         <input
//           id="newsletter1"
//           type="text"
//           className="form-control"
//           placeholder="Email address"
//           value={email}
//           onChange={handleEmailChange}
//         />
//         <button className="btn btn-dark" type="submit">
//         Subscribe
//         </button>
//       </div>
//     </form>
//   </div>
//   <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" style={{ marginTop: '4rem' }}>
//   <p>© 2023 Company, Inc. All rights reserved.</p>

//     {/* Add other content here, such as logo or social media icons */}
//     <ul className=" coloumn d-flex justify-content-start" >
//       <p className=' fw-semibold'>Follow us on</p>
//                   <li>
//                     <Link to="#" className="link-light footer-icon mx-3">
//                       <FaInstagram />
//                     </Link>
//                   </li>
                
//                     <Link to="#" className="link-light footer-icon mx-3">
//                       <FaFacebook />
//                     </Link>
                  
                
//                     <Link to="#" className=" link-light footer-icon mx-3">
//                       <FaTwitter />
//                     </Link>
                  
                
//                     <Link to="#" className="link-light footer-icon mx-3">
//                       <FaEnvelope />
//                     </Link>
                  
//                 </ul>

          
//   </div>
// </div>

//         </div>
//       </footer>
//     </section>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Subscribed email:', email);
    setEmail(""); 
    Swal.fire({
      title: 'Successfully Subscribed',
      text: 'Thank You for Subscribing',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    });
  };

  return (
    <section className="container-fluid mr-auto bg-dark text-white">
      <footer className="py-5 text-center">
        <div className="row d-flex align-items-center justify-content-center text-center text-decoration-none">
          {/* 1st section */}
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0  text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* Footer form */}
          <div className="container text-center">
            <div className="col-md-5 mx-auto mb-3">
              <form onSubmit={handleSubmit}>
                <h5 className="text-center fw-semibold">SUBSCRIBE</h5>
                <p className="text-center">
                  Monthly digest of what's new and exciting from us
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange} 
                  />
                  <button className="btn btn-dark" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div
              className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
              style={{ marginTop: '4rem' }}
            >
              <p>© 2023 Company, Inc. All rights reserved.</p>

        
              <ul className="coloumn d-flex justify-content-start">
                <p className="fw-semibold">Follow us on</p>
                <li>
                  <Link to="#" className="link-light footer-icon mx-3">
                    <FaInstagram />
                  </Link>
                </li>
              
                  <Link to="#" className="link-light footer-icon mx-3">
                    <FaFacebook />
                  </Link>
                
              
                  <Link to="#" className="link-light footer-icon mx-3">
                    <FaTwitter />
                  </Link>
                
              
                  <Link to="#" className="link-light footer-icon mx-3">
                    <FaEnvelope />
                  </Link>
                
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;


