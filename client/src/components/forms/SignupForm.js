import React from "react";

const SignupForm = ({ values, handleInputs, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex mb-3">
          <label htmlFor="name">
            <i class="zmdi zmdi-account pt-2"></i>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleInputs}
            placeholder="Your Name"
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
          <label htmlFor="email">
            <i class="zmdi zmdi-email pt-2"></i>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleInputs}
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
          <label htmlFor="phone">
            <i class="zmdi zmdi-phone-in-talk pt-2"></i>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={values.phone}
            onChange={handleInputs}
            placeholder="Your Number"
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
          <label htmlFor="work">
            <i class="zmdi zmdi-slideshow pt-2"></i>
          </label>
          <input
            type="text"
            name="work"
            id="work"
            value={values.work}
            onChange={handleInputs}
            placeholder="Your Profession"
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
          <label htmlFor="role">
            <i class="zmdi zmdi-account pt-2"></i>
          </label>
          <input
            type="text"
            name="role"
            id="role"
            value={values.role}
            onChange={handleInputs}
            placeholder="Your Role"
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
            value={values.password}
            onChange={handleInputs}
            placeholder="Your Password"
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
          <label htmlFor="cpassword">
            <i class="zmdi zmdi-lock pt-2"></i>
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            value={values.cpassword}
            onChange={handleInputs}
            placeholder="Confirm Your Password"
            // autoComplete="off"
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
            value="Register"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
