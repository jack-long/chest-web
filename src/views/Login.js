import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LOGIN_API = "/api/user/login";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email: email, password: password };
    fetch(LOGIN_API, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          props.setPage(1);
        } else {
          response.text().then((text) => alert("Error!\n" + text));
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="true">
      <h1 className="h3 mb-3 fw-normal">Please log in</h1>

      <div className="form-floating mb-1">
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          required
        />
        <label htmlFor="loginEmail" className="text-muted">
          Email address
        </label>
      </div>
      <div className="form-floating mb-1">
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="loginPassword" className="text-muted">
          Password
        </label>
      </div>
      <div className="checkbox mb-1">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
        Log in
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; 2022–2032</p>
    </Form>
  );
}
