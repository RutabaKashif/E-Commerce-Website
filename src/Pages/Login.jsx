
// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// function Login(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Username:", username);
//     console.log("Password:", password);

//     Swal.fire({
//       icon: "success",
//       title: "Logged in successfully!",
//       text: "Welcome back!",
//     });

//     handleClose();
//   };

//   const bgImg =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTej7p-rb110nmwKKGdpNl8GnUmlydQFcx9Ng&usqp=CAU";

//   return (
//     <>
//       <div className="container">
//         <Modal
//           show={show}
//           onHide={handleClose}
//           style={{
//             backgroundImage: `url(${bgImg})`,
//             backgroundSize: "100vw, 100vh",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "left",
//           }}
//           {...props}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <form onSubmit={handleLogin}>
//               <div className="form-group">
//                 <label htmlFor="username">
//                   <FaUserCircle />Username
//                 </label>
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control "
//                     id="username"
//                     placeholder="Enter your username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     autoComplete="off"
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">
//                   <RiLockPasswordFill />Password
//                 </label>
//                 <div className="input-group">
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     autoComplete="off"
//                   />
//                 </div>
//               </div>
//               <Link className="text-decoration-none" to="/products"> 
// <Button type="submit" variant="dark"   >
//               login
//             </Button>
//             </Link>
//             </form>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </>
//   );
// }

// export default Login;

import React from 'react'

function Login() {
  return (
    <div>Login</div>
  )
}

export default Login