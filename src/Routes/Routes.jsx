import {
    Form,
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Mycolleges from "../pages/Mycolleges";
import Colleges from "../pages/Colleges";
import Admission from "../pages/Admission";
import Details from "../pages/Details";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AddMissionClg from "../pages/AddMissionClg";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/myColleges",
                element: <Mycolleges></Mycolleges>
            },
            {
                path: "/colleges",
                element: <Colleges></Colleges>
            },
            {
                path: "/admission",
                element: <Admission></Admission>
            },

            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://college-apply-server.vercel.app/cardData/${params.id}`)
            },
            {
                path: "/adclg/:id",
                element: <AddMissionClg></AddMissionClg>,
                loader: ({ params }) => fetch(`https://college-apply-server.vercel.app/cardData/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,

            },


        ]
    },
]);