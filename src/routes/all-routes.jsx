import { createBrowserRouter } from "react-router-dom";


// pages
import LANDING_PAGE from "pages/landing-page";
import NOT_FOUND_PAGE from "pages/not-found-page";
import SERVICE_CARDS_PAGE from "pages/service-cards-page";
import SERVICE_DETAILS_PAGES from "pages/service-details-pages";
import SERVICE_ADD_PAGE from "pages/service-add-page";
import SERVICE_EDIT_PAGE from "pages/service-edit-page";
import LOGIN_PAGE from "pages/login-page";
import SIGNUP_PAGE from "pages/signup-page";
import PRIVATE_ROUTE from "./private-route";
import MY_REVIEWS_PAGE from "pages/my-reviews-page";
import MY_PROFILE_PAGE from "pages/profile-page";
import BLOG_PAGE from "pages/blog-page";




// all routes
const allRoutes = createBrowserRouter([



    /* ✅ Landing Page */
    {
        path: "/",
        element: <LANDING_PAGE />,
    },


    /* ✅ Not found Page */
    {
        path: "*",
        element: <NOT_FOUND_PAGE />,
    },


    /* ✅ Login Page */
    {
        path: "/login",
        element: <LOGIN_PAGE />,
    },


    /* ✅ Signup Page */
    {
        path: "/signup",
        element: <SIGNUP_PAGE />,
    },




    /* ✅ Service Cards Page*/
    {
        path: "/service/cards",
        element: <SERVICE_CARDS_PAGE />,
    },


    /* ✅ Service Details Pages */
    {
        path: "/service/details/:id",
        element: <SERVICE_DETAILS_PAGES />,
    },


    /* ✅ Service Add Page */
    {
        path: "/service/add",

        element: (
            <PRIVATE_ROUTE>
                <SERVICE_ADD_PAGE />
            </PRIVATE_ROUTE>
        )
    },


    /* ✅ Service Edit Page */
    {
        path: "/service/edit/:id",
        element: (
            <PRIVATE_ROUTE>
                <SERVICE_EDIT_PAGE />
            </PRIVATE_ROUTE>
        )
    },


    
    /* ✅ My Reviews Page */
    {
        path: "/my-reviews",
        element: (
            <PRIVATE_ROUTE>
                <MY_REVIEWS_PAGE />
            </PRIVATE_ROUTE>
        )
    },


    /* ✅ My Profile Page */
    {
        path: "/my-profile",
        element: (
            <PRIVATE_ROUTE>
                <MY_PROFILE_PAGE />
            </PRIVATE_ROUTE>
        )
    },

    
    /* ✅ Blog */
    {
        path: "/blog",
        element: (
            <PRIVATE_ROUTE>
                <BLOG_PAGE />
            </PRIVATE_ROUTE>
        )
    }


]);



export default allRoutes