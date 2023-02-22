import React, { useContext, useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";
import { alertContext } from "../alert/alertContext";

const url = "https://notes-app-62997-default-rtdb.firebaseio.com/";

export const FirebaseState = ({ children }) => {
  const alert = useContext(alertContext);

  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);
    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });
    dispatch({
      type: FETCH_NOTES,
      payload,
    });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };
    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: res.data.name,
      };
      dispatch({
        type: ADD_NOTE,
        payload,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
  const deleteNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
    alert.show("Note was deleted", "success");
  };
  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        fetchNotes,
        addNote,
        deleteNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
