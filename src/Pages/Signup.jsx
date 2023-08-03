

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { AiTwotoneMail } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
 
  

  const handleClose = () => setShow(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "DONE!",
      text: "You have successfully signed up.",
    });

    const user = { username, password, email };
    signUp(user);
    handleClose();
  };

  function signUp(user) {
    console.warn(user);
    localStorage.setItem("user-info", JSON.stringify(user));
  }

  const bgImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2o5mW3YwjiR9R61LPebOcLkE-vvyh_7DfQ&usqp=CAU";
  return (
    <>
     <div className="container "  >
     <Modal show={show}
  onHide={handleClose}
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "100vw, 100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
  }}
  {...props}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  backdrop="static"
  keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="username">  <FaUserCircle/>Username</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email"> <AiTwotoneMail/>Email</label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control "
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password"> <RiLockPasswordFill/>Password</label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control "
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
<Link className="text-decoration-none" to="/products"> 
<Button type="submit" variant="dark"   >
              Sign Up
            </Button>
</Link>

            
          
          </form>
        </Modal.Body>
      </Modal>
     </div>
{/* 

      <div className="container "
       style={{
        
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "100vw, 80vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          height: "100vh", // Set an appropriate height for the container
        
        
      }}> qwertkhoyt</div> */}
    </>
  );
}

export default SignUp;


