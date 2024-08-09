import Navbar from "../../components/navbar";
import Sidebar from "../../layout/sidebar";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
export default function Channel() {
    return (
        <div className="max-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                <Sidebar />
                <div className="container px-8 lg:px-16 mx-auto w-screen">
                    <div className="flex flex-row gap-5 mt-4" >
     
                      
                                <div className="lg:h-40 lg:w-40 w-[72px] h-[72px] flex flex-shrink-0 rounded-full bg-black"></div>
                                <div className="flex flex-col">
                                    <h2 className="font-bold text-2xl">MedellinCodes</h2>
                                    <div className="flex items-center ">
                                        <h4 className="text-sm text-gray-500 mt-px">@medellincodes . <span>29 abone</span>. 6 video</h4>
                                    </div>
                                    <div className="flex items-center ">
                                        <h4 className="text-sm text-gray-500 mt-px">mail: example@gmail.com</h4>
                                </div>
                                <div className="flex gap-3 mt-4">
                                    <a href="#" className="lg:text-sm text-xs text-nowrap  bg-white/20 hover:bg-white/30 transition-colors inline-block rounded-full px-4 lg:px-2 py-1"> Kanalı özelleştir</a>
                                    <a href="#" className="lg:text-sm text-xs text-nowrap  bg-white/20 hover:bg-white/30 transition-colors inline-block rounded-full px-4 lg:px-2 py-1"> Videoları yönet</a>
                                </div>
                                    </div>
                    
                  
                    </div>
                    <div className="border-b border-white/25 mt-4 flex gap-5 items-center  ">
                        <a href="#" className="border-b-2">Ana sayfa</a>
                        <a href="#" className="opacity-60">Videolar</a>
                        <a href="#" className="opacity-60">Topluluk</a>
                        <CiSearch className="text-[18px]" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <h2 className="my-4 font-bold">Videolar</h2>
                        <FaArrowRight  className="text-[12px]"/>
                        <h2 className="my-4 font-bold">Tümünü oynat</h2>
                    </div>
                    <div className="flex flex-nowrap mt-2 gap-2 w-full overflow-x-auto">
                        <div className="flex flex-col overflow-hidden min-w-[280px]  rounded-lg">
                            <div className="block aspect-video w-full h-full overflow-hidden rounded-lg relative">
                                <span className="absolute h-1 w-3/4 bg-red-600 bottom-0 right-0 left-0"></span>
                                <img className=" w-full h-full object-cover" src="https://i.ytimg.com/vi/IE2lbW-ifHg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbyioq4hMK3cS7tOPfOjxLsW3JJw" alt="" />
                                <span className="absolute bottom-px right-px px-1 py-px rounded-md bg-black/30">30:21</span>
                            </div>
                            <div className=" flex flex-col">
                                <h2>Video Başlığı</h2>
                                <p className="text-sm opacity-40">286 görüntülenme . <span>3 hafta önce</span></p>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden min-w-[280px]  rounded-lg">
                            <div className="block aspect-video w-full h-full overflow-hidden rounded-lg relative">
                                <img className=" w-full h-full object-cover" src="https://i.ytimg.com/vi/IE2lbW-ifHg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbyioq4hMK3cS7tOPfOjxLsW3JJw" alt="" />
                                <span className="absolute bottom-px right-px px-1 py-px rounded-md bg-black/30">30:21</span>
                            </div>
                            <div className=" flex flex-col">
                                <h2>Video Başlığı</h2>
                                <p className="text-sm opacity-40">286 görüntülenme . <span>3 hafta önce</span></p>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden min-w-[280px]  rounded-lg">
                            <div className="block aspect-video w-full h-full overflow-hidden rounded-lg relative">
                                <img className=" w-full h-full object-cover" src="https://i.ytimg.com/vi/IE2lbW-ifHg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbyioq4hMK3cS7tOPfOjxLsW3JJw" alt="" />
                                <span className="absolute bottom-px right-px px-1 py-px rounded-md bg-black/30">30:21</span>
                            </div>
                            <div className=" flex flex-col">
                                <h2>Video Başlığı</h2>
                                <p className="text-sm opacity-40">286 görüntülenme . <span>3 hafta önce</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}