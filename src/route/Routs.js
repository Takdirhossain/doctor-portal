import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import GetAppoinment from "../pages/GetAppoinment";
import Home from "../pages/Home";
import Login from "../pages/Login";

const route = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            {path: '/getappoinment', element: <GetAppoinment></GetAppoinment> },
            {path: '/login', element: <Login></Login>}
        ]
    }
])

export default route