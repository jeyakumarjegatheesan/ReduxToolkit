import React, { useState } from "react";
import NotePage from "./NotePage";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../Features/NoteSlice";

const CreatePage = () => {
  const noteStateValue = useSelector((state) => state.NotePageReducer);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id == "title") {
      setTitle(e.target.value);
    } else {
      setDiscription(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (title !== "" && discription !== "") {
      dispatch(
        createNote({
          id: noteStateValue[noteStateValue.length - 1].id + 1,
          title,
          discription,
        })
      );
    }
  };

  return (
    <>
      <div>
        <div className="mainPage">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            ADD Notes
          </button>
          <div className="inputArea">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                //  value={title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="disc"
                rows="5"
                placeholder="Take a note"
                //  value={discription}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>

        <div>
          <NotePage />
        </div>
      </div>
    </>
  );
};

export default CreatePage;
