import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editNote } from "../Features/NoteSlice";

const EditPage = () => {
  const { id } = useParams();
  const noteStateValue = useSelector((state) => state.NotePageReducer);

  const EditNote = noteStateValue.filter((note) => note.id == id);
  const { title, discription } = EditNote[0];
  const [eTitle, seteTitle] = useState(title);
  const [eDiscription, seteDiscription] = useState(discription);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id == "editTitle") {
      seteTitle(e.target.value);
    } else {
      seteDiscription(e.target.value);
    }
  };

  const handleUpdate = (e) => {
    dispatch(
      editNote({
        id: id,
        title: eTitle,
        discription: eDiscription,
      })
    );

    navigate("/");
  };

  return (
    <>
      <div className="editPage">
        <div>
          <div className="inputArea">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="editTitle"
                placeholder="Title"
                value={eTitle}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="editDisc"
                rows="10"
                placeholder="Take a note"
                value={eDiscription}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
