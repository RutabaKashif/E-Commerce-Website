import React from 'react'
import { Link } from "react-router-dom";


export default function Page404() {
  return (
    <div className="container ">
      <div className="text-center d-flex flex-column align-items-center  mt-5 ">
        <h1 className="display-1 fw-bold ">404</h1>
        <h2 className="display-4 fw-semibold ">Oops! Page Not Found</h2>
        <Link className='  btn btn-outline-dark ' to="/"> Go to Home</Link>
         
     
      </div>
    </div>
  )
}
