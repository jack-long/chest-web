import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Register(props) {
  const [nickName, setNickName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const API = "/api/user/register";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert("Password does not match!");
    } else {
      console.log(nickName + "\n" + email + "\n" + password);
      const data = { nickName: nickName, email: email, password: password };
      fetch(API, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            alert("Account Created.");
            props.setPage(3);
          } else {
            response.text().then((text) => alert("Error!\n" + text));
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "registerNickName":
        setNickName(e.target.value);
        break;
      case "registerEmail":
        setEmail(e.target.value);
        break;
      case "registerPassword":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
        alert("Error, no element with id " + e.target.id);
    }
  };

  return (
    <div className="container form-signin w-100 m-auto">
      <Form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Register</h1>

        <div className="form-floating mb-1">
          <input
            type="text"
            className="form-control"
            id="registerNickName"
            placeholder="Nick Name"
            maxlength="20"
            value={nickName}
            onChange={handleChange}
            required
          />
          <label htmlfor="registerNickName" className="text-muted">
            Nick Name
          </label>
        </div>
        <div className="form-floating mb-1">
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            placeholder="name@example.com"
            maxlength="40"
            value={email}
            onChange={handleChange}
            required
          />
          <label htmlfor="registerEmail" className="text-muted">
            Email address
          </label>
        </div>
        <div className="form-floating mb-1">
          <input
            type="password"
            className="form-control"
            id="registerPassword"
            placeholder="Password"
            maxlength="20"
            value={password}
            onChange={handleChange}
            required
          />
          <label htmlfor="registerPassword" className="text-muted">
            Password
          </label>
        </div>
        <div className="form-floating mb-1">
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            maxlength="20"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <label htmlfor="confirmPassword" className="text-muted">
            Confirm Password
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
          Register
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022-2032</p>
      </Form>
    </div>
  );
}
