import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="../../\images\ShoppingTime.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link active" aria-current="page" href="/products">Products</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="categories">Categories</a>
        </li>
      </ul>
      <form className="d-flex">
      <a className="nav-link1 active " aria-current="page" href="#">Signout</a>
        <button className="btn" type="submit"><img src="../../\images\logoutIcon.png" alt="" /></button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar