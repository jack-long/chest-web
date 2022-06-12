import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const LOGIN_API = "/api/user/login";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("login");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        <label htmlfor="loginEmail" className="text-muted">
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
        <label htmlfor="loginPassword" className="text-muted">
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
