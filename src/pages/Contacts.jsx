import React from "react";
import { Helmet } from "react-helmet";
import { userFormInput } from "../hooks/useForm";
export default function Contacts() {

  const firstName = userFormInput('');
  const lastName = userFormInput('');
  return (
    <>
      <Helmet>
        <title>Contacts - We're All In Time - WAIT</title>
        <meta name="description" content="Contacts of WAIT Clothing" />
        <meta
          name="keywords"
          content="Contact, Wait Clothing, WAIT, We're All in Time"
        />
      </Helmet>
     

     <div >
      <h1>Form Input</h1>
      <input {...firstName} type="text" placeholder="First Name" />
      <input {...lastName} type="text" placeholder="Last Name"/>
      <p>{firstName.value} {lastName.value} </p>
     </div>
    </>
  );
}
