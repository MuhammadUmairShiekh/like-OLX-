import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";
import Login from "../conponents/Login";
import SignUP from "../conponents/SignUP";
import Navbar from "../conponents/Navbar";
import Home from "../conponents/Home";
import PostAd from "../conponents/PostAd";
import Product from "../conponents/Product";
import Productdetail from "../conponents/Productdetail";
import Error from "../config.js/Error"
import Contact from "../conponents/Contact";
import Forgetps from "../conponents/Forgetps";
// const Navigate = useNavigate()

const router = createBrowserRouter([

    {
        path: "/",
        element: <Login />

    },
    {
        path: "/signUp",
        element: <SignUP />
    }
    ,
    {
        path:"/forget",
        element:<Forgetps />
    },

    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/Product",
                element: <Product />
            }
            ,
           
            {
                path: "/PostAd",
                element: <PostAd />
            }
            ,
            
            {
                path: "/Product/:id",
                element: <Productdetail />
            }
            ,
            {
                path: "/contact",
                element: <Contact />
            }

            ,
            {
                path: "*",
                element: <Error />
            }
        ]
    }
])

function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Router