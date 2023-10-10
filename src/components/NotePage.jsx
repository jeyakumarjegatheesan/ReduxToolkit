import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../Features/NoteSlice";

const NotePage = () => {
  const noteStateValue = useSelector((state) => state.NotePageReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote({ id: id }));
  };

  return (
    <>
      <div>
        <h3>My Notes</h3>
        <div className="notePage">
          {noteStateValue.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <span className="card-title">{item.title}</span>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/edit/${item.id}`);
                    }}
                  >
                    edit
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    delete
                  </button>
                  <p className="card-text">{item.discription}</p>
                  <h5> 5 days ago</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NotePage;
