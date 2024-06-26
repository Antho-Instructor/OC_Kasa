import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./assets/styles/index.css";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
