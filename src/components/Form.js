import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault() 
    const formData = {firstName: firstName, 
    lastName: lastName}
    props.sendDataSomewhere(formData)
    setFirstName({firstName: ""})
    setLastName({lastName: ""})

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName}
      placeholder="First Name" />
      <input type="text" onChange={handleLastNameChange} value={lastName}
      placeholder="Last Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
