import { createSlice } from "@reduxjs/toolkit";
import NoteDetail from "../components/NoteDetail";

const NoteSlice = createSlice({
  name: "notes",
  initialState: NoteDetail,
  reducers: {
    createNote: (state, action) => {
      state.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, title, discription } = action.payload;
      const upDateNote = state.find((note) => note.id == id);
      console.log(upDateNote);
      if (upDateNote) {
        upDateNote.title = title;
        upDateNote.discription = discription;
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      const dNote = state.find((note) => note.id == id);
      if (dNote) {
        return state.filter((note) => note.id !== id);
      }
    },
  },
});

export const { createNote, editNote, deleteNote } = NoteSlice.actions;
export default NoteSlice.reducer;
