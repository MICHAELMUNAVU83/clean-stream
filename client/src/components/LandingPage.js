import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const navigate = useNavigate()



  return (
    <>
    {/* Bootstrap landing page */}
    <div id="page-top">
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
            <div className="container px-5">
                <a href="#page-top" className="navbar-brand fw-bold">Clean Stream</a>  
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <button 
                        className="btn btn-primary rounded-pill px-3 mb-lg-0"
                        onClick={() => navigate('/login')}
                        >
                            LogIn
                        </button>
                    </ul>
                    </div>
            </div>
        </nav>

    </div>
    </>
  )
}

export default LandingPage