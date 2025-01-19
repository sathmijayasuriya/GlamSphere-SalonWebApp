import React, { Children, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter ,Navigate} from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import AuthLayout from "../layouts/AuthLayout";
import Landing from "../Views/User/Landing";

 const authRouter = createBrowserRouter([

        {
            path:"/",
            element: <AuthLayout/>,
            children:[
               { path:"/",
                element : <Landing/>,
            },
            ]
        }
]);

export default authRouter;