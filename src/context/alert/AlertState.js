import React from "react";
import { alertContext } from "./alertContext";
import { useReducer } from "react";
import { alertReducer } from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const show = (text, type = "warning") => {
    debugger;
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });
  };
  const hide = () => {
    dispatch({ type: HIDE_ALERT });
  };
  return (
    <alertContext.Provider value={{ show, hide, alert: state }}>{children}</alertContext.Provider>
  );
};
