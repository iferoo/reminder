import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import reminders from "./redux/reducers/rootReducer";
import { createRoot } from "react-dom/client";
import "./index.css"

const store = createStore(reminders);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

