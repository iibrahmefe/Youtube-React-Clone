import { createBrowserRouter } from "react-router-dom";
import AnaSayfa from "../pages/home";
import Shorts from "../pages/shorts";
import Abonelikler from "../pages/abobelikler";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <AnaSayfa />
    },
    {
        path:'/Shorts',
        element: <Shorts/>
    },
    {
        path:'/Abonelikler',
        element: <Abonelikler/>
    },
])

export default routes;