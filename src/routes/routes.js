import React, { Children, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter ,Navigate} from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import AuthLayout from "../layouts/AuthLayout";
import Landing from "../Views/User/Landing";
import Services from "../Views/User/Services";
import Gallery from "../Views/User/Gallery";
import ShopProducts from "../Views/User/ShopProducts";
import JoinTeam from "../Views/User/JoinTeam";
import GirftCards from "../Views/User/GirftCards";
import ContactUs from "../Views/User/ContactUs";
 const authRouter = createBrowserRouter([

        {
            path:"/",
            element: <AuthLayout/>,
            children:[
               { path:"/",
                element : <Landing/>,
            },
            { path:"/services",
                element : <Services/>,
            },
            { path:"/gallery",
                element : <Gallery/>,
            },
            {
                path:"/shop",
                element : <ShopProducts/>,
            },
            {
                path:"/joinTeam",
                element : <JoinTeam/>,
            },
            {
                path:"/giftcards",
                element : <GirftCards/>,
            },
            {
                path:"/contact",
                element : <ContactUs/>,
            },
            
            ]
        }
]);

export default authRouter;