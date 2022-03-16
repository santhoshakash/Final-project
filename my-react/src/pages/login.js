import "../App.css";
import React, { useContext, useRef } from "react";
import { Usercontext } from "./../context/logincontext";

export function Login() {
   
  const { login } = useContext(Usercontext);
  //   console.log(login);

  const inputemail = useRef();
  const inputpassword = useRef();

  function click(e) {
    e.preventDefault();
    const mail = inputemail.current.value;
    console.log(mail);

    const pass = inputpassword.current.value;
    console.log(pass);
    login(mail, pass);
  }
  //   console.log(inputelement.current.value);
  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" onSubmit={click}>
            <div class="login__field-1">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="Email"
                ref={inputemail}
              />
            </div>
            <div class="login__field-2">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input "
                placeholder="Password"
                ref={inputpassword}
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
