import React from "react";
import User from "./user";
import Footer from "../components/footer";

export default function usersummary(props) {
  console.log(props.key)
  return (
    <div>
      <User key={props.key}/>
      {props.children}
      <Footer />
    </div>
  );
}
