import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import CreatePage from "./components/CreatePage";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Features/NoteStore";
import EditPage from "./components/EditPage";

function App() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3" id="sidebar">
              <Sidebar />
            </div>
            <div className="col-9" id="note">
              <Provider store={store}>
                <Routes>
                  <Route path="/" element={<CreatePage />} />
                  <Route path="/edit/:id" element={<EditPage />} />
                </Routes>
              </Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
