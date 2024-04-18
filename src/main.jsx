import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./Store/Store.jsx";
import Counter from "./Pages/Counter.jsx";
import Crud from "./Pages/Crud.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* < Counter/> */}
      <Crud></Crud>
    </Provider>
  </React.StrictMode>
);
