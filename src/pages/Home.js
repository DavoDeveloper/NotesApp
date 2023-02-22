import React, { useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Loader } from "../components/Loader";
import { Note } from "../components/Note";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Home = () => {
  const { loading, notes, fetchNotes, deleteNote } = useContext(FirebaseContext);
  useEffect(() => {
    fetchNotes();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Form />
      <hr />
      {loading ? <Loader /> : <Note notes={notes} onRemove={deleteNote} />}
    </div>
  );
};

export default Home;
