import React from "react";

import { Adminpage } from "../pages/adminpage";
import { Userpage } from "../pages/userpage";

export const Authentication = (props) => {
  console.log(props.values);

  const role = props.values.role;
  console.log(role);
  if (role === "admin") {
    return <Adminpage />;
  } else if (role === "user") {
    return <Userpage />;
  }
};
