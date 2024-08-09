import Category from "../../components/category";
import Navbar from "../../components/navbar";
import Main from "../../layout/main";
import Sidebar from "../../layout/sidebar";

export default function AnaSayfa() {
    return (
        <div className="max-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                <Sidebar />
                <div className="overflow-x-hidden px-8 pb-4">
                    <div className="sticky top-0  z-10 pb-4">
                        <Category />
                    </div>
                    <Main />
                </div >
            </div >
        </div >
    )
}