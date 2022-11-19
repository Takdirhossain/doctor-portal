import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Allusers from "../pages/Allusers";
import Dashboard from "../pages/Dashboard";
import GetAppoinment from "../pages/GetAppoinment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/getappoinment', element: <GetAppoinment></GetAppoinment> },
            { path: '/login', element: <Login></Login> },
            { path: '/singup', element: <Singup></Singup> },
        ],
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>, children: [
            { path: '/dashboard', element: <Dashboard></Dashboard> },
            { path: '/dashboard/user', element: <Allusers></Allusers> },
        ]
    },
])

export default route