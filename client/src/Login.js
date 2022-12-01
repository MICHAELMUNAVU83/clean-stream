import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.token);
          setStoredToken(data.token);
          navigate("/");
        } else {
          setErrors(data.errors);
          alert("Invalid credentials");
        }
      });

    setUsername("");

    setPassword("");
  };
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 mx-auto">
            <div className="myform form ">
                <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                        <h1>Login</h1>
                    </div>
                </div>
                <form 
                action="" 
                method="post" 
                name="login"
                onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input 
                        type="username" 
                        name="username"  
                        className="form-control" 
                        id="username" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter username"
                        autoComplete='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password"  
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter Password"
                        autoComplete='current-password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         />
                    </div>
                    <div className="col-md-12 text-center">
                        {
                            errors ? (
                                        errors.map(error => 
                                          error ? 
                                          <div className="alert alert-danger" role="alert">
                                          <p>{error}</p> 
                                          </div>
                                          : null
                                      )
                                    
                            ) : null
                            
                        }

                    </div>
                    <div className="col-md-12 text-center ">
                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                    </div>
                    <div className="col-md-12 ">
                        <div className="login-or">
                            <hr className="hr-or"/>
                            <div className="col-md-12 text-center">
                              <p>
                                Don't have an account?
                                <Link to="/signup" className="ml-2">
                                  Sign Up
                                </Link>
                              </p>
                            </div>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
  );
}

export default Login;
