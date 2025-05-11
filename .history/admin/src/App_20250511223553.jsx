import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import AllRoutes from './routes/AllRoutes';
import Dashboard from './pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';

const App = () =>  {
  return (
    <div className="wrapper">
    
    <Sidebar />
    <div className="main-panel">
      <Header />
      <AllRoutes/>
    </div>

  </div>
  )
}

export default App