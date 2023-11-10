import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Statistics from "../components/Statistics/Statistics";
import Donation from "../components/Donation/Donation";
import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import Error from "../components/Error/Error";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader:()=>fetch('/data.json')
            },
            {
                path: '/details/:id',
                element: <Details></Details>
            }
        ]
    }
])