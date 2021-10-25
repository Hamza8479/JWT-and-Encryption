import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "../components/forms/SignupForm";
import vector from "../images/contactVector.svg";
import { AddUser } from "../functions/User";

const initials = {
  name: "",
  email: "",
  phone: "",
  work: "",
  roles: ["superadmin", "admin", "investor"],
  role: "",
  password: "",
  cpassword: "",
};

const Signup = ({ history }) => {
  const [values, setValues] = useState(initials);

  const handleInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, work, role, password, cpassword } = values;
    AddUser(values)
      .then((res) => {
        window.alert("Registration Succesfully");
        console.log(res);
        history.push("/login");

        // console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 422) {
          window.alert("Invalid Registration");
        }
        console.log(err.message);
      });
  };

  return (
    <div>
      <section className="signup">
        <div className="container mt-4">
          <div className="row justify-content-center py-3">
            <div className="signup-content d-flex p-5">
              <div className="col-md-6">
                <h2 className="mb-5">Signup</h2>
                <SignupForm
                  values={values}
                  handleInputs={handleInputs}
                  handleSubmit={handleSubmit}
                />
              </div>

              <div className="col-md-4 text-center">
                <img className="img-fluid" src={vector} alt="" />
                <Link className="r" to="/login">
                  I am already registered
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
