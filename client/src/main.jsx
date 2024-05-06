import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "../app/store.js";
import "./assets/assets/css/bootstrap.min.css";
import "./assets/assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/assets/plugins/fontawesome/css/all.min.css";
import "./assets/assets/css/feather.css";
import "./assets/assets/css/custom.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
