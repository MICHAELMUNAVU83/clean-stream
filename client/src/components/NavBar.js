import React from 'react'

const NavBar = ({user, setStoredToken}) => {

    const handleLogOut = () => {
        localStorage.setItem('token', null)
        setStoredToken(null)
    }

      // render good morning, afternoon and evening based on time

    const greeting = () => {
        let time = new Date().getHours();
        if (time < 12) {
            return "Good Morning"
        } else if (time < 18) {
            return "Good Afternoon"
        } else {
            return "Good Evening"
        }
    }




  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <div className="container">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
     <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarButtonsExample">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link brandname" href="/">
            {greeting()} {user.username} 
          </a>
        </li>
      </ul>


      <div className="d-flex align-items-center">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item content">
          <a className="nav-link" href="/about">Clean Stream</a>
        </li>
      </ul>
        <button onClick={handleLogOut} type="button" className="btn btn-danger me-3">
          Log Out
        </button>
      </div>
    </div>

  </div>
  </nav>

    </>
  )
}

export default NavBar
