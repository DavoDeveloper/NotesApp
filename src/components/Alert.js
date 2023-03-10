import React, { useContext } from "react";
import { alertContext } from "../context/alert/alertContext";
import { CSSTransition } from "react-transition-group";

export const Alert = () => {
  const { alert, hide } = useContext(alertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 500, exit: 350 }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
        <strong>Attention!</strong> <span>{alert.text}</span>
        <button onClick={hide} type="button" className="btn-close" aria-label="Close"></button>
      </div>
    </CSSTransition>
  );
};
