import React from "react";
import useForm from "../../common/hooks/Form";
import "./registrationForm.css";

export default function RegistrationForm() {
  // Initial input object
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    contact: "",
    pass: "",
    confirmPass: "",
  };

  //   validation function for form input
  const validate = (values) => {
    let errors = {};
    if (!values.fName) {
      errors.fName = "First Name is required";
    } else if (values.fName.length < 5) {
      errors.fName = "Must be greather than 5 character";
    }

    if (!values.lName) {
      errors.lName = "Last Name is required";
    } else if (values.lName.length < 5) {
      errors.fName = "Must be greather than 5 character";
    }

    if (!values.contact) {
      errors.contact = "Contact is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.pass) {
      errors.pass = "Password is required";
    } else if (values.pass !== values.confirmPass) {
      errors.confirmPass = "Password doesn't match";
    }
    return errors;
  };

  //   Custom hook for form input, validate form input on input change and submit
  const { values, handleChange, handleSubmit, errors } = useForm(
    initialState,
    validate
  );

  return (
    <div className="form-container">
      <div class="container">
        <div class="title">Registration</div>
        <div className="form">
          <div class="user-details">
            <div class="input-field">
              <span class="details">First Name</span>
              <input
                type="text"
                placeholder="E.g: John"
                name="fName"
                value={values.fName}
                onChange={handleChange}
              />
              {errors.fName && <span className="warning">{errors.fName}</span>}
            </div>
            <div class="input-field">
              <span class="details">Last Name</span>
              <input
                type="text"
                placeholder="Smith"
                name="lName"
                value={values.lName}
                onChange={handleChange}
              />
              {errors.lName && <span className="warning">{errors.lName}</span>}
            </div>
            <div class="input-field">
              <span class="details">Email</span>
              <input
                type="email"
                placeholder="johnsmith@hotmail.com"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <span className="warning">{errors.email}</span>}
            </div>
            <div class="input-field">
              <span class="details">Contact Number</span>
              <input
                type="tel"
                placeholder="017-xxxx-xxxx"
                name="contact"
                value={values.contact}
                onChange={handleChange}
              />
              {errors.contact && (
                <span className="warning">{errors.contact}</span>
              )}
            </div>
            <div class="input-field">
              <span class="details">Password</span>
              <input
                type="password"
                placeholder="********"
                name="pass"
                value={values.pass}
                onChange={handleChange}
              />
              {errors.pass && <span className="warning">{errors.pass}</span>}
            </div>
            <div class="input-field">
              <span class="details">Confirm Password</span>
              <input
                type="password"
                placeholder="********"
                name="confirmPass"
                value={values.confirmPass}
                onChange={handleChange}
              />
              {errors.confirmPass && (
                <span className="warning">{errors.confirmPass}</span>
              )}
            </div>
          </div>

          <div class="button">
            <input type="submit" value="Register" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
