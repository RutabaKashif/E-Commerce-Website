import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, [categoryName]);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1 className='fw-bold'>{categoryName.toUpperCase()}</h1>
        <p className="text-secondary fst-italic fw-lighter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
          excepturi eligendi, quam distinctio rem incidunt quibusdam odit?
          Dolores velit atque est quidem aspernatur officia dolor nostrum, odio
          recusandae nemo! In?
        </p>
      </div>

      <div className="row">
        {products.map((product, key) => (
          <div className="col-md-6 my-3" key={key}>
            {
            /* <Card className="card text-bg-light mb-3 shadow-lg" border="light">
              <Card.Img variant="top" style={{ height: "60vh" }} src={product.image} />
              <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card> */

              <Link className='text-decoration-none' to={`/products/${product.id}`}>
              <Card className="card text-bg-light mb-3 shadow-lg" border="light">
                <Card.Img variant="top" style={{ height: "60vh" }} src={product.image} />
                <Card.Body className="text-center">
                  <Card.Title className='fw-semibold'>{product.title}</Card.Title>
                  <Card.Text className='fw-light'>{product.description}</Card.Text>
                  <h5>Price: ${product.price}</h5>
                </Card.Body>
              </Card>
              
              
              </Link>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

