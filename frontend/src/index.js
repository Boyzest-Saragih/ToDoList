import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo from "./pages/Todo";
import LoginPage from "./pages/Auth/LoginPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store,persistor} from "./store/store";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import RegisterPage from "./pages/Auth/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<Todo/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
