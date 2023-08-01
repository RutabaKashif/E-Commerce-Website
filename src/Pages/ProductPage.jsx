import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';


export default function ProductPage() {

    const { productID } = useParams()
    const [product, setproduct] = useState({})
    const [review, setReview] = useState("")
    const [ratingstar, setRatingstar] = useState(0)
    const[productQuantity, setproductQuantity] = useState(1)

    const ratingChanged = (newRating) => {
        setRatingstar(newRating)
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)

        Swal.fire({
            title: 'Successfully Submitted',
            text: 'Thank You for reviewing our product',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
            .then(() => {
                setReview("")
                setRatingstar(0)
            })


    }

    const addToCart =() => {
        const payload = {
...product,
productQuantity,
totalPrice : product.price*productQuantity
        }
        console.log(payload)
        Swal.fire({
            title: 'Added to Cart ',
            text: 'Check Your Cart for Check Out',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
            .then(() => {
                setproductQuantity(1)
            })
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productID}`).then(json => setproduct(json.data));

    }, [])

    return (
        <div className="container">

            <div className="text-center  my-5">
                <h1>{product.title} - {product.price}$</h1>
                <p className="text-secondary">{product.description}</p>
            </div>

            <div className='d-flex justify-content-center'>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={product.rating?.rate}
                    color2={'#ffd700'}
                />
            </div>

            <div className="my-3 d-flex justify-content-center">
               <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)} > - </button>
               {productQuantity} 
                <button className="btn btn-dark mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
               </div>

               <div className="d-flex justify-content-center" onClick={addToCart}><button className="btn btn-dark ">Add to Cart</button></div>

            <div className="row">
                <div className="col-md-6  ">
                    <Card   className='card text-bg-light  mb-3 shadow-lg ' border="light" style={{ width:'30vw', height: '50vh' }}> 
                        <Card.Img variant="top" src={product.image} alt="Product Image"  style={{ width:'30vw', height: '50vh' }} />
                    </Card>
                    {/* <img src={product.image} alt="Product Image" style={{ width: '200px', height: 'auto' }} /> */}
                </div>

                <div className="col-md-6">
                    <div className="container ">

                        <div className='mb-5'>
                            <h2 className='text-center'>Review us</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, </p>
                        </div>
                        <div>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    defaultValue={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>
                            <div className='mt-4'>
                                Rate Us:
                                <div className="d-flex align-items-center">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={ratingstar}
                                        onChange={ratingChanged}
                                        color2={'#ffd700'}
                                    />
                                    <span className='ms-3'>({ratingstar})</span>

                                </div>

                            </div>
                            <div>
                                <button className="btn btn-dark my-3 text-center" onClick={submitReview}>
                                    Submit review
                                </button>
                            </div>


                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}
