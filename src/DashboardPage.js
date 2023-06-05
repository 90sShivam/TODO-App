import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { TodoWrapper } from "./ToDo/TodoWrapper";

const DashboardPage = () => {
  const navigate = useNavigate();
  // const { user, setUser } = useContext(UserContext);

  const [user, setUser] = useState({});
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    if (token === "" || token === null) {
      navigate("/");
    }

    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        // console.log(user)
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1 style={{ marginTop: "100px" }}>Dashboard</h1>

      <p>
        Welcome, {user.firstName} {user.lastName}!
      </p>

      {/* <button onClick={handleLogout}>Logout</button> */}

      <TodoWrapper />
    </>
  );
};

export default DashboardPage;
