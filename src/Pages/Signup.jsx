// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { AiTwotoneMail } from "react-icons/ai";
// import { FaUserCircle } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import './Signup.css'

// function SignUp(props) {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState(""); 
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(true);
 
  

//   const handleClose = () => setShow(false);

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     Swal.fire({
//       icon: "success",
//       title: "DONE!",
//       text: "You have successfully signed up.",
//     });

//     const user = { username, password, email };
//     signUp(user);
//     handleClose();
//   };

//   function signUp(user) {
//     console.warn(user);
//     localStorage.setItem("user-info", JSON.stringify(user));
//   }

//   const bgImg =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2o5mW3YwjiR9R61LPebOcLkE-vvyh_7DfQ&usqp=CAU";
//   return (
//     <>
//      <div className="container "  >
//      <Modal show={show}
//   onHide={handleClose}
//   style={{
//     backgroundImage: `url(${bgImg})`,
//     backgroundSize: "100vw, 100vh",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "left",
//   }}
//   {...props}
//   size="lg"
//   aria-labelledby="contained-modal-title-vcenter"
//   centered
//   backdrop="static"
//   keyboard={false}>
//         <Modal.Header closeButton>
//           <Modal.Title  id="contained-modal-title-vcenter">Sign Up</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSignUp}>
//             <div className="form-group">
//               <label htmlFor="username">  <FaUserCircle/>Username</label>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control "
//                   id="username"
//                   placeholder="Enter your username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   autoComplete="off"
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="email"> <AiTwotoneMail/>Email</label>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   className="form-control "
//                   id="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="off"
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="password"> <RiLockPasswordFill/>Password</label>
//               <div className="input-group">
//                 <input
//                   type="password"
//                   className="form-control "
//                   id="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="off"
//                 />
//               </div>
//             </div>
// <Link className="text-decoration-none" to="/products"> 
// <Button type="submit" variant="dark"   >
//               Sign Up
//             </Button>
// </Link>

            
          
//           </form>
//         </Modal.Body>
//       </Modal>
//      </div>
// {/* 

//       <div className="container "
//        style={{
        
//           backgroundImage: `url(${bgImg})`,
//           backgroundSize: "100vw, 80vh",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "left",
//           height: "100vh", // Set an appropriate height for the container
        
        
//       }}> qwertkhoyt</div> */}
//     </>
//   );
// }

// export default SignUp;




import React from 'react'
import { useContext } from 'react';
import { useReducer } from 'react'
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/context';


const initialstate ={
email: "",
password:"",
address: "",
city:"",
form_state: "",
zip: ""

}
const formReducer = (form_state, action) => {
switch(action.type){
  case "UPDATE_FIELD" :
    return{...form_state, [action.payload.name] :action.payload.value };
    default:
      return form_state;
}

}

export default function Signup() {
  const [form_state, form_dispatch] = useReducer ( formReducer, initialstate)
  
  const { state, dispatch } = useContext(GlobalContext);
const handleChange =(e)=> {
form_dispatch(
  {
    type: "UPDATE_FIELD" ,
    payload: {
      name: e.target.name,
      value: e.target.value
    }
  }
)
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(form_state);
  dispatch(
    {
      type:" SIGNUP_USER",
      payload: form_state

    }
  )
}

const bgImg =
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2o5mW3YwjiR9R61LPebOcLkE-vvyh_7DfQ&usqp=CAU";

  return (
  <>
  <div className="container my-3">
  <form className="row g-3" onSubmit={handleSubmit}>

<div className="col-md-6">
  <label htmlFor="inputEmail4" className='form-label'>Email</label>
<input type="email" className='form-control' id='inputEmail' name='email' value={form_state.email} onChange={handleChange}/>
</div>


<div className="col-md-6">
  <label htmlFor="inputPassword4" className='form-label'>Password</label>
<input type="password" className='form-control' id='inputPassword' name='password' value={form_state.password} onChange={handleChange}/>
</div>

<div className="col-md-12">
  <label htmlFor="inputAddress" className='form-label'>Address</label>
<input type="text" className='form-control' id='inputAddress' name='address' placeholder='Main St' value={form_state.address} onChange={handleChange}/>
</div>

<div className="col-md-2">
  <label htmlFor="inputCity" className='form-label'>City</label>
<input type="text" className='form-control' id='inputCity' name='city' value={form_state.city} onChange={handleChange}/>
</div>

<div className="col-md-2">
  <label htmlFor="inputState" className='form-label'>state</label>
<input type="text" className='form-control' id='inputState' name='state' placeholder='state' value={form_state.state} onChange={handleChange}/>
</div>

<div className="col-md-2">
  <label htmlFor="inputZip" className='form-label'>Zip</label>
<input type="text" className='form-control' id='inputZip' name='zip' placeholder='zip code' value={form_state.zip} onChange={handleChange}/>
</div>

<div className="col-md-3 ">
            <Button type="submit" variant="dark" size="sm">Submit</Button>
          </div>

 </form>
  </div>

 </>
  )
}

