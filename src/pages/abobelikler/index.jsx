import Navbar from "../../components/navbar";
import Sidebar from "../../layout/sidebar";
import Main from "../../layout/main";


import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

export default function Abonelikler() {
    return (
        <div className="max-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                <Sidebar />
                <div className="overflow-x-hidden px-8 pb-4">
                    <div className="flex items-center justify-between my-4 ">
                        <h2 className="text-left font-bold">Son yüklenenler</h2>
                        <div className="flex gap-2 items-center">
                            <a href="#" className="text-blue-400 hover:bg-blue-500/50 rounded-full px-3 py-1 ">Yönet</a>
                            <div className="rounded-full p-3  overflow-hidden   hover:bg-white/20  text-white flex items-center justify-center">
                                <BsFillGrid3X2GapFill />
                            </div>
                            <div className="rounded-full p-3  overflow-hidden hover:bg-white/20  text-white flex items-center justify-center">
                                <FaListUl />
                            </div>
                        </div>
                    </div>
                    <Main />
                </div >
            </div >
        </div >
    )
}