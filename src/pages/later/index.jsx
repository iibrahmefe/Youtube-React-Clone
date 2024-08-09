import Navbar from "../../components/navbar";
import Sidebar from "../../layout/sidebar";

export default function Later() {
    return (
        <div className="max-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                <Sidebar />
                <h2 className="text-4xl "> Yapım aşamasında-Daha sonra izle</h2>
            </div>
        </div>
    )
}