import React, { useState, useEffect, useContext } from "react";
import "./LoginPage.css";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            console.log(data);
            if (data.message !== "Invalid credentials") {
              console.log(data);
              sessionStorage.setItem("token", data.token);
              sessionStorage.setItem("id", data.id);
              navigate("/dashboard");
            } else {
              alert(data.message);
            }
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };


  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>

            <div className="mb-3">
              <label>Username</label>
              <input type="text" className="form-control" value={username} placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button onClick={handleLogin} type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right">
              <Link to={"/sign-up"}>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
