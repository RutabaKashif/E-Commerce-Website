import React, { useEffect, useState }  from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingLoader({ delay }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {

  return (
    <div><div
    style={{
      display: "flex",
     justifyContent: "center", 
     alignItems: "center", 
     height: "100vh"
     }}
    >
        <Spinner animation="grow" variant="dark" />
    </div></div>
  )
}
}
