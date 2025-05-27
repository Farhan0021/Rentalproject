import React from 'react'
import HeaderNew from './components/HeaderNew'
import Slider from './components/Slider'
import Footer from './components/Footer'
import AllRoutes from './routes/AllRoutes'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>

    {/* <Header/> */}
    <HeaderNew/>
    {/* <Slider/> */}
    <AllRoutes/>
    <Footer/>

     </>
  )
}

export default App