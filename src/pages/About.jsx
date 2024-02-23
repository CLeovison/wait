import React from "react";
import { Helmet } from "react-helmet";
import Login from "./Login";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About - We're All In Time - WAIT</title>
        <meta name="description" content="About of WAIT Clothing" />
        <meta
          name="keywords"
          content="About, Wait Clothing, WAIT, We're All in Time"
        />
      </Helmet>
    <Login/>
    </>
  );
}
