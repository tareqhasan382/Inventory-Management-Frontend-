import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProviders from "./context/AuthProviders.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProviders>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={routes} />
      </Provider>
    </AuthProviders>
  </React.StrictMode>
);
