import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';


const handleSignup = (e) => {
  e.preventDefault();
  Swal.fire({
    title: 'Successfully Signup',
    text: 'Thank you for signup',
    icon: 'success',
    confirmButtonText: 'Continue Shopping'
  });
}

function Signup() {
  return (
   <div>
<Form className='text-center d-flex flex-column align-items-center  '>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" className="btn btn-dark"  type="submit"  onClick={handleSignup}>
      Submit
    </Button>
  </Form>
   </div>
  )
}

export default Signup