import React, { useState } from "react";
import { signInAPI } from "./../context/api";
import { useNavigate } from "react-router-dom";

export const Usercontext = React.createContext({
  login: function () {},
});

export const LogincontextProvider = (props) => {
  console.log(props.data);
  const [data, setdata] = useState();
  const [error, seterror] = useState();
  const navigate = useNavigate();

  const logindata = async (email, password) => {
    console.log(email, password);
    const data = await signInAPI(email, password);

    if (data.role) {
      console.log(data);
      setdata(data);
      navigate("/nextpage");
    } else {
      console.log("wrong password");
    }
  };
  return (
    <Usercontext.Provider
      value={{
        values: data,
        login: logindata,
        // error: error,
      }}
    >
      {props.children}
    </Usercontext.Provider>
  );
};
// export default logincontextProvider;
