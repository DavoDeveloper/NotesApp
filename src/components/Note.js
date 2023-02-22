import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const Note = ({ notes, onRemove }) => {
  return (
    <TransitionGroup component={"ul"} className="list-group mt-4">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={"note"} timeout={800}>
          <li className="list-group-item">
            <div>
              <strong>{note.title}</strong>&nbsp;
              <small>{note.date}</small>
            </div>
            <button
              onClick={() => onRemove(note.id)}
              type="button"
              className="btn btn-outline-danger btn-sm"
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
