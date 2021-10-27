import React, { useState } from "react";
import vector from "../images/contactVector.svg";
import LoginForm from "../components/forms/LoginForm";
import { loginUser } from "../functions/User";
import { toast } from "react-toastify";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((res) => {
        toast.success("User Loggedin Successfully");
        history.push("/");
        console.log(res);
      })
      .catch((err) => {
        // err.response.status === 400
        toast.error("Invalid Crendentials");
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="signup-content mt-4">
          <div className="row py-4 justify-content-center">
            <div className="col-md-4 text-center">
              <img src={vector} alt="" />
              Create an account
            </div>
            <div className="col-md-4 ps-5">
              <h2 className="mb-4">Signin</h2>
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
