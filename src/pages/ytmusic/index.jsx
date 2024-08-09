import Navbar from "../../components/navbar";
import Sidebar from "../../layout/sidebar";

export default function Ytmusic() {
    return (
        <div className="max-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                <Sidebar />
                <h2 className="text-4xl "> Yapım aşamasında-Yt Music</h2>
            </div>
        </div>
    )
}