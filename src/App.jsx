import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Page404 from './Pages/Page404'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'
import SignUp from './Pages/Signup'
import Cart from './Components/Cart'
import LoadingLoader from './Components/LoadingLoader'


function App() {
  const [user, setUser] = useState(false)
  const loaderDelay = 2000;



  return (


    <>
      <LoadingLoader delay={loaderDelay} />
      <NavigationBar />




      {
        user
          ?
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productID" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/category/:categoryName" element={<CategoryPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          )
          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
<<<<<<< HEAD
              <Route path="/signup" element={< SignUp />} />
              <Route path="*" element={<Navigate to="/login" replace={false} />} />
=======
              <Route path="/signup" element={< SignUp  />} />
                            <Route path="*" element={<Navigate to="/login" replace={true}   />} />
>>>>>>> 31dfe37ef5724717acda525b557cf50259d91ec6
            </Routes>
          )

      }

      <FooterSection />


    </>
  )
}

export default App
