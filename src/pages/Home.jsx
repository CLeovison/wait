import React from "react";
import { Helmet } from "react-helmet";
import { useFetch } from "../hooks/useFetch";
export default function Home() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      <Helmet>
        <title>Home - We're All In Time - WAIT</title>
        <meta name="description" content="Homepage of WAIT Clothing" />
        <meta
          name="keywords"
          content="Home, Wait Clothing, WAIT, We're All in Time"
        />
      </Helmet>
      qweqweqwe
    </>
  );
}
