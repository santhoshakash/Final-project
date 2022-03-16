import React, { useContext } from "react";
import { Login } from "../pages/login";
import { Authentication } from "../context/authenticationcontext";
import { Usercontext } from "../context/logincontext";
import { Routes, Route } from "react-router";

export const Firstroutes = () => {
  const { values } = useContext(Usercontext);
  console.log(values);

  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/nextpage" element={<Authentication values={values} />} />
    </Routes>
  );
};
