import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
// import { useUserContext } from "./UserContext";
import { UserContext } from './UserContext';


const Signup = () => {
    
const navigate = useNavigate();
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
//   const [errorState, setErrorState] = useState("");


const handleSignup = async () => {
    try {
     
    } catch (error) {

    }
  };

  
  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>

            <div className="mb-3">
              <label>Username</label>
              <input type="text" className="form-control" value={username} placeholder='Username...' 
                    onChange={e => setUserName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" value={username} placeholder='Email...' 
                    onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder='Password...'
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="d-grid">
              <button onClick={handleSignup} type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            
            <p className="forgot-password text-right">
              <Link to={"/"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
