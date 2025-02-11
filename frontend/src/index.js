import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo from "./pages/Todo";
import LoginPage from "./pages/Auth/LoginPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProtectedRoute from "./components/Protected/ProtectedRoute";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/todos" element={<Todo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
