import Navbar from "../../components/navbar";
import Sidebar from "../../layout/sidebar";

export default function Likes() {
    return (
        <div className="max-h-screen flex flex-col">
            <Navbar/>
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                <Sidebar />
                <h2 className="text-4xl "> Yapım aşamasında-Beğeniler</h2>
            </div>
        </div>
    )
}