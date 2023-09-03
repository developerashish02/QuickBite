import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import App from "./App";
import RestaurantDetail from "./components/RestaurantDetail";
const Instamart = lazy(() => import("./components/Instamart"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetail />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense>
                        <Instamart />
                    </Suspense>
                ),
            },
        ],
    },
]);
