import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
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
            {path: '/getappoinment', element: <GetAppoinment></GetAppoinment> },
            {path: '/login', element: <Login></Login>},
            {path: '/singup', element: <Singup></Singup>},
            {path: '/dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
        ]
    }
])

export default route