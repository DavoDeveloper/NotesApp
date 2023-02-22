import React, { useState, useContext } from "react";
import { alertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(alertContext);
  const firebase = useContext(FirebaseContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => alert.show("New note was created", "success"))
        .catch(() => alert.show("Something went wrong", "danger"));
      setValue("");
    } else {
      alert.show("Please enter note text", "danger");
    }
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
