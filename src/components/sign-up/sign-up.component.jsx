import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      //validate password
      alert("password don't match");
      return; //do nothing
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      ); //creates a new user associated with email and password and also login

      await createUserProfileDocument(user, { displayName });
    
      //after awaiting new registration, clear the form back to empty
      this.setState({ 
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
      const { name, value } = event.target;

      //dynamically set the name according to the value
      this.setState({[name]: value});
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle> I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit"> SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
