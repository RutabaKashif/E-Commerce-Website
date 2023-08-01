import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function HeaderSection() {
  const imageUrls = [
    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
  ];


  const imageStyles = {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  };

  return (
    <div>
      <AwesomeSlider animation="cubeAnimation">
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Image ${index}`} loading="lazy" style={imageStyles} />
          </div>
        ))}
      </AwesomeSlider>
    </div>
   
  //   <div >
  //   <AwesomeSlider animation="cubeAnimation">
  //   <div data-src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jp" />
  //   <div data-src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
  //   <div data-src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" />
  // </AwesomeSlider>
  //   </div> 
   
   
    
    
    
  )
}




