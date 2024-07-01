import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Details from "./pages/Details.jsx";
import About from "./pages/About.jsx";

import datas from "./data/datas.json";

import "./assets/styles/index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
				loader: async () => {
					return {
						datas,
					};
				},
			},
			{
				path: "/appartment/:id",
				element: <Details />,
				loader: async ({ params }) => {
					const data = datas.find((card) => card.id === params.id);
					return data;
				},
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
