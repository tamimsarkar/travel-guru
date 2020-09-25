import React, { useContext, useState } from "react";
import Icon from "../images/icon/fb.png";
import Icon2 from "../images/icon/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.js";
import logo from "../images/Logo.png"
import { UserContext } from "../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import './Login.css'
import { Button, Input } from "@material-ui/core";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [userNew, setUserNew] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSignIn: false,
    success: false,
    name: "",
    password: "",
    email: "",
    photo: "",
    error: "",
  });
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    //Start Log in with google //
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { photoURL,displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo:photoURL
        };
        // setUser(signInUser);
        setLoggedUser(signInUser);
        history.replace(from);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // End log in with google  //

  // Start log in with facebook  //
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
          console.log(res)
        const newUserInfo = { ...user };
        setUser(newUserInfo);
        console.log("sign in fb", res.user);
        const { photoURL,displayName, email } = res.user;
        const newUser = { name: displayName, email:email, photo:photoURL };
        setLoggedUser(newUser);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
      
        var errorMessage = error.message;
        alert( errorMessage);
      });
  };
  // End LogIn with facebook //

  // start HandleBlur  ///
  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  // Create account function
  const handleCreateAccount = (event) => {
    if (userNew && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }
    // end handle create account  //
    
    //start signInWithEmailAndPassword //
    if (!userNew && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = '';
          const { displayName, email } = res.user;
          const newUser = { name: displayName, email };
          setUser(newUserInfo);
          setLoggedUser(newUser);
          history.replace(from);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorMessage = error.message;
          alert(errorMessage)
          
        });
    }
    event.preventDefault();
  };
  // End signInWithEmailAndPassword //

  //start updateUserInfo //
  const updateUserInfo = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
        alert(error.message)
      });
  };
  // password blur


  // End updateUserInfo //
  return (
    <div className="login__page">
        <Link to="/">
        <img className="login__logo" src={logo} alt=""/>
        </Link>
      <div className="form">
        <form className="login__form">
          {
              !userNew ? <h1>Login</h1> : <h1>Sign Up</h1>
          }
          {userNew && (
            <Input className="login__input"
              className="input-field"
              type="text"
              name="first-name"
              onBlur={handleBlur}
              placeholder="First name"
              required
            />
          )}
          
          {userNew && (
            <Input className="login__input"
              className="input-field"
              type="text"
              name="last-name"
              onBlur={handleBlur}
              placeholder="Last name"
              required
            />
          )}{" "}
          
          <Input className="login__input"
            className="input-field"
            type="text"
            name="email"
            onBlur={handleBlur}
            placeholder="Email Address"
            required
          />
          
          <Input className="login__input"
            className="input-field"
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Password"
            required
          />
          
          {userNew && (
            <Input className="login__input"
             
              type="password"
              name="password2"
              onBlur={handleBlur}
              placeholder="Confirm password"
              required
            />
          )}
          <small>Password must have 6 character(1number)</small>
          
           <Input variant="outlined" type="submit"
            className="submit__button" onClick ={handleCreateAccount}
            value={userNew ? 'Create Account' : 'Login' }
            />
        
          <p>
            Already have an account?
            <span
              style={{
                color: "rgb(255,166,0)",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setUserNew(!userNew)}
            >
              {userNew ? 'Login' : 'Create New Account'}
            </span>
          </p>
        
          <p>Or</p>
          {/* social buttons */}
          <Button variant="outlined" className="social__login__button" onClick={handleSignIn}>
            <img className="social__icon" src={Icon2} />
            &nbsp; &nbsp; &nbsp; Continue with Google
          </Button>
          <Button variant='outlined' className="social__login__button" onClick={handleFbSignIn}>
            <img className="social__icon" src={Icon} alt="" />
            &nbsp; &nbsp; &nbsp; Continue with Facebook
          </Button>
        </form>

        <p style={{ color: "red" }}>{user.error}</p>
      </div>
      <p>{user.success}</p>
    </div>
  );
};

export default Login;