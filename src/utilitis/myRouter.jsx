import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Statistics from "../components/Statistics/Statistics";
import Donation from "../components/Donation/Donation";

export const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            }
        ]
    }
])