import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import About from "./routes/About";
import Services from "./routes/Services";
import Main from "./components/Main";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Main />} />
        <Route path="about/" element={<About />} />
        <Route path="services/" element={<Services />} />
        {/* <Route path="contact/" element={<Contact />} /> */}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
