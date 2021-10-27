import React from "react";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex mb-3">
          <label htmlFor="email">
            <i class="zmdi zmdi-email pt-2"></i>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            // autoComplete="off"
            className="form-control"
            style={{
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
            }}
          />
        </div>

        <div className="form-group d-flex mb-3">
          <label htmlFor="password">
            <i class="zmdi zmdi-lock pt-2"></i>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            autoComplete="off"
            className="form-control"
            style={{
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
            }}
          />
        </div>
        <div className="form-gorup form-button">
          <input
            type="submit"
            name=""
            id=""
            value="Login"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
