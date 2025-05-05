import React from 'react'
import Sidebar from './components/Sidebar'

const App = () =>  {
  return (
    <div className="wrapper">
    
    <Sidebar />
    
    <div className="main-panel">
      
      <Header />
      <AllRoutes />

     

     
    </div>

    
   
    
  </div>
  )
}

export default App