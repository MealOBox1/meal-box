import React from "react";
import User from "./user";
import Footer from "../components/footer";

export default function usersummary(props) {
  return (
    <div>
      <User />
      {props.children}
      <Footer />
    </div>
  );
}
