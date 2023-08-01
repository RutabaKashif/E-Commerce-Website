import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CategoriesSection() {

const setCategories =[
  { categoryName: "electronics",
  categoryImage:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
},
{ categoryName: "jewelery",
categoryImage:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
},
{ categoryName: "men's clothing",
categoryImage:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
},
{ categoryName: "women's clothing",
categoryImage:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
},

]

return (
  <div className="container bg-light " >
     <div className="my-5 text-center">
        <h1 className='fw-bold'>CATEGORIES</h1>
        <p className="text-secondary fst-italic fw-lighter">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
         illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto
         deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro
         nisi saepe autem?
       </p>
     </div>

     <div className="row">
    {setCategories.map((val, key) => (
          <div className="col-md-6 my-3" key={key}>
            <Link className="text-decoration-none" to={`/products/category/${val.categoryName}`}>
              <Card  className='card text-bg-light  mb-3 shadow-lg ' border="light">
                <Card.Img variant="top"  style={{height:"60vh"}} src={val.categoryImage} />
                <Card.Body className='text-center'>
                  <Card.Title>{val.categoryName.toUpperCase()}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
  </div>
)





  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://fakestoreapi.com/products/categories')
  //     .then((json) => {
  //       console.log('API Response:', json.data);
  //       setCategories(json.data);
  //     })
  // }, []);

  // return (
  //   <div className="container">
  //     <div className="my-5 text-center">
  //       <h1>Categories</h1>
  //       <p className="text-secondary">
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
  //         illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto
  //         deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro
  //         nisi saepe autem?
  //       </p>
  //     </div>

  //     <div className="row">
  //       {categories.map((val, key) => (
  //         <div className="col-md-6 my-3" key={key}>
  //           <Link className="text-decoration-none" to={`/products/category/${val.id}`}>
  //             <Card  className='card text-bg-secondary mb-3' border="dark">
  //               {/* <Card.Img variant="top" src={val.image} /> */}
  //               <Card.Body className='text-center'>
  //                 <Card.Title>{val}</Card.Title>
  //               </Card.Body>
  //             </Card>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}
