import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SignUp({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(data);
        setStoredToken(data.token);
        navigate("/");
        
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 mx-auto">
            <div className="myform form ">
                <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                        <h1>Sign Up</h1>
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
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input 
                        type="email" 
                        name="email"  
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        autoComplete='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <div className="col-md-12 text-center ">
                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">SignUp</button>
                    </div>
                    <div className="col-md-12 ">
                        <div className="login-or">
                            <hr className="hr-or"/>
                            <div className="col-md-12 text-center">
                              <p>
                                Already have an account?
                                <Link to="/login" className="ml-2">
                                  LogIn
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

export default SignUp;
