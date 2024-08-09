import { createBrowserRouter } from "react-router-dom";
import AnaSayfa from "../pages/home";
import Shorts from "../pages/shorts";
import Abonelikler from "../pages/abobelikler";
import Channel from "../pages/channel";
import  History from "../pages/history";
import Ytmusic from "../pages/ytmusic";
import Playlists from "../pages/playlists";
import Videos from "../pages/videos";
import Later from "../pages/later";
import Likes from "../pages/likes";
import Downloads from "../pages/downloads";

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
    {
        path:'/ytmusic',
        element: <Ytmusic/>
    },
    {
        path:'/playlists',
        element: <Playlists/>
    },
    {
        path:'/channel',
        element: <Channel/>
    },
    {
        path:'/History',
        element: <History/>
    },
    {
        path:'/Videos',
        element: <Videos />
    },
    {
        path:'/Later',
        element: <Later />
    },
    {
        path:'/Likes',
        element: <Likes />
    },
    {
        path:'/İndirilenler',
        element: <Downloads />
    },
])

export default routes;