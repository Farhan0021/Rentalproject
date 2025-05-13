import React from 'react'

const Logout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("name");
  return (
    <div>Logout</div>
  )
}

export default Logout