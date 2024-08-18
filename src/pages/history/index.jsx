import Navbar from "../../components/navbar";
import Sidebar from "../../layout/sidebar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdPause } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
export default function History() {
    return (
        <div className="max-h-screen flex flex-col">
            <Navbar />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
                <Sidebar />
                <div className="container ml-14 w-2/3   overflow-y-auto ">
                    <div className="flex  ">
                        <div className="mx-24 flex-[3]  p-4 overflow-y-hidden">
                            <div>
                                <h2 className="font-bold text-4xl">İzleme geçmişi</h2>
                                <p className="font-bold text-2xl mt-7">Dün</p>
                            </div>
                            <div>
                                <div className="flex gap-2 mt-6 justify-between">
                                    <div className="flex gap-2 items-center mb-3">
                                        <SiYoutubeshorts className="text-red-600 text-[18px]" />
                                        <h2 className="font-bold text-[18px]">Shorts</h2>
                                    </div>
                                    <BsThreeDotsVertical />
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,auto))] gap-1 w-full">
                                    <div className=" flex flex-col rounded-md overflow-hidden " >
                                        <img src="https://i.ytimg.com/vi/HlKdYsXhBzE/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAxQM-XgIZy7008Z8QlCk38OcBAGQ" alt="" className="relative object-cover" />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center">
                                                    <h2 className="text-wrap mt-2 font-bold">Pepe Futbolu Bıraktı</h2>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-wrap text-sm text-white/40">8172 görüntülenme</p>
                                                </div>
                                            </div>
                                            <h2 className="text-wrap mt-2 font-bold"><BsThreeDotsVertical /></h2>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col rounded-md overflow-hidden " >
                                        <img src="https://i.ytimg.com/vi/HlKdYsXhBzE/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAxQM-XgIZy7008Z8QlCk38OcBAGQ" alt="" className="relative object-cover" />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center">
                                                    <h2 className="text-wrap mt-2 font-bold">Pepe Futbolu Bıraktı</h2>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-wrap text-sm text-white/40">8172 görüntülenme</p>
                                                </div>
                                            </div>
                                            <h2 className="text-wrap mt-2 font-bold"><BsThreeDotsVertical /></h2>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col rounded-md overflow-hidden " >
                                        <img src="https://i.ytimg.com/vi/HlKdYsXhBzE/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAxQM-XgIZy7008Z8QlCk38OcBAGQ" alt="" className="relative object-cover" />
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center">
                                                    <h2 className="text-wrap mt-2 font-bold">Pepe Futbolu Bıraktı</h2>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-wrap text-sm text-white/40">8172 görüntülenme</p>
                                                </div>
                                            </div>
                                            <h2 className="text-wrap mt-2 font-bold"><BsThreeDotsVertical /></h2>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-10" />
                                <div className="w-full flex flex-col gap-2 mt-4 ">
                                    <div className="flex 2xl:flex-row flex-col gap-4 px-4 ">
                                        <div className=" object-cover overflow-hidden rounded-md relative ">
                                            <span className="absolute h-1 w-3/4 bg-red-600 bottom-0 right-0 left-0"></span>
                                            <span className="absolute px-1 py-px bottom-1  right-1 bg-black/70 rounded-md text-sm">20:40</span>
                                            <img src="https://i.ytimg.com/vi/pUYxthJ1BjU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgzY-mfS-_uBL-iGhHjpifFfgNuQ" className="block w-full" />
                                        </div>
                                        <div className="flex-1  justify-between flex">
                                            <div className="flex flex-col gap-2 ">
                                                <h2 className="font-semibold text-wrap whitespace-nowrap leading-4 overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique cum </h2>
                                                <p className="text-white/30 text-sm">Kanal ismi . <span>9B görüntülenme</span></p>
                                                <p className="text-white/30 text-sm mt-1 line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero at quidem nesciunt aut, beatae praesentium commodi eos accusantium iste exercitationem esse adipisci nemo. Molestias possimus quam facere ut dolore!</p>
                                            </div>
                                            <div className=" text-2xl text-white/50 ">
                                                <IoMdClose />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex 2xl:flex-row flex-col gap-4 px-4 ">
                                        <div className=" object-cover overflow-hidden rounded-md relative ">
                                            <span className="absolute h-1 w-3/4 bg-red-600 bottom-0 right-0 left-0"></span>
                                            <span className="absolute px-1 py-px bottom-1  right-1 bg-black/70 rounded-md text-sm">20:40</span>
                                            <img src="https://i.ytimg.com/vi/pUYxthJ1BjU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgzY-mfS-_uBL-iGhHjpifFfgNuQ" className="block w-full" />
                                        </div>
                                        <div className="flex-1  justify-between flex">
                                            <div className="flex flex-col gap-2 ">
                                                <h2 className="font-semibold text-wrap whitespace-nowrap leading-4 overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique cum </h2>
                                                <p className="text-white/30 text-sm">Kanal ismi . <span>9B görüntülenme</span></p>
                                                <p className="text-white/30 text-sm mt-1 line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero at quidem nesciunt aut, beatae praesentium commodi eos accusantium iste exercitationem esse adipisci nemo. Molestias possimus quam facere ut dolore!</p>
                                            </div>
                                            <div className=" text-2xl text-white/50 ">
                                                <IoMdClose />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex 2xl:flex-row flex-col gap-4 px-4 ">
                                        <div className=" object-cover overflow-hidden rounded-md relative ">
                                            <span className="absolute h-1 w-3/4 bg-red-600 bottom-0 right-0 left-0"></span>
                                            <span className="absolute px-1 py-px bottom-1  right-1 bg-black/70 rounded-md text-sm">20:40</span>
                                            <img src="https://i.ytimg.com/vi/pUYxthJ1BjU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgzY-mfS-_uBL-iGhHjpifFfgNuQ" className="block w-full" />
                                        </div>
                                        <div className="flex-1  justify-between flex">
                                            <div className="flex flex-col gap-2 ">
                                                <h2 className="font-semibold text-wrap whitespace-nowrap leading-4 overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique cum </h2>
                                                <p className="text-white/30 text-sm">Kanal ismi . <span>9B görüntülenme</span></p>
                                                <p className="text-white/30 text-sm mt-1 line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero at quidem nesciunt aut, beatae praesentium commodi eos accusantium iste exercitationem esse adipisci nemo. Molestias possimus quam facere ut dolore!</p>
                                            </div>
                                            <div className=" text-2xl text-white/50 ">
                                                <IoMdClose />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex 2xl:flex-row flex-col gap-4 px-4 ">
                                        <div className=" object-cover overflow-hidden rounded-md relative ">
                                            <span className="absolute h-1 w-3/4 bg-red-600 bottom-0 right-0 left-0"></span>
                                            <span className="absolute px-1 py-px bottom-1  right-1 bg-black/70 rounded-md text-sm">20:40</span>
                                            <img src="https://i.ytimg.com/vi/pUYxthJ1BjU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgzY-mfS-_uBL-iGhHjpifFfgNuQ" className="block w-full" />
                                        </div>
                                        <div className="flex-1  justify-between flex">
                                            <div className="flex flex-col gap-2 ">
                                                <h2 className="font-semibold text-wrap whitespace-nowrap leading-4 overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique cum </h2>
                                                <p className="text-white/30 text-sm">Kanal ismi . <span>9B görüntülenme</span></p>
                                                <p className="text-white/30 text-sm mt-1 line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero at quidem nesciunt aut, beatae praesentium commodi eos accusantium iste exercitationem esse adipisci nemo. Molestias possimus quam facere ut dolore!</p>
                                            </div>
                                            <div className=" text-2xl text-white/50 ">
                                                <IoMdClose />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex 2xl:flex-row flex-col gap-4 px-4 ">
                                        <div className=" object-cover overflow-hidden rounded-md relative ">
                                            <span className="absolute h-1 w-3/4 bg-red-600 bottom-0 right-0 left-0"></span>
                                            <span className="absolute px-1 py-px bottom-1  right-1 bg-black/70 rounded-md text-sm">20:40</span>
                                            <img src="https://i.ytimg.com/vi/pUYxthJ1BjU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgzY-mfS-_uBL-iGhHjpifFfgNuQ" className="block w-full" />
                                        </div>
                                        <div className="flex-1  justify-between flex">
                                            <div className="flex flex-col gap-2 ">
                                                <h2 className="font-semibold text-wrap whitespace-nowrap leading-4 overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique cum </h2>
                                                <p className="text-white/30 text-sm">Kanal ismi . <span>9B görüntülenme</span></p>
                                                <p className="text-white/30 text-sm mt-1 line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero at quidem nesciunt aut, beatae praesentium commodi eos accusantium iste exercitationem esse adipisci nemo. Molestias possimus quam facere ut dolore!</p>
                                            </div>
                                            <div className=" text-2xl text-white/50 ">
                                                <IoMdClose />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex 2xl:flex-row flex-col gap-4 px-4 ">
                                        <div className=" object-cover overflow-hidden rounded-md relative ">
                                            <span className="absolute h-1 w-3/4 bg-red-600 bottom-0 right-0 left-0"></span>
                                            <span className="absolute px-1 py-px bottom-1  right-1 bg-black/70 rounded-md text-sm">20:40</span>
                                            <img src="https://i.ytimg.com/vi/pUYxthJ1BjU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgzY-mfS-_uBL-iGhHjpifFfgNuQ" className="block w-full" />
                                        </div>
                                        <div className="flex-1  justify-between flex">
                                            <div className="flex flex-col gap-2 ">
                                                <h2 className="font-semibold text-wrap whitespace-nowrap leading-4 overflow-hidden ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, similique cum </h2>
                                                <p className="text-white/30 text-sm">Kanal ismi . <span>9B görüntülenme</span></p>
                                                <p className="text-white/30 text-sm mt-1 line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero at quidem nesciunt aut, beatae praesentium commodi eos accusantium iste exercitationem esse adipisci nemo. Molestias possimus quam facere ut dolore!</p>
                                            </div>
                                            <div className=" text-2xl text-white/50 ">
                                                <IoMdClose />
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="flex-[1] pt-24  flex flex-col px-12 absolute right-3.5 ">
                            <div className="relative flex items-center">
                                <input type="search" className="  bg-transparent  border-b pl-6 w-full py-2" placeholder="İzleme geçmişinde arayın" />
                                <CiSearch className="absolute left-px " />
                            </div>
                            <div className="flex flex-col gap-1 w-full items-center justify-center font-semibold ">
                                <a className=" w-full flex items-center rounded-lg gap-2 p-3 hover:bg-white/10 transition-colors">
                                    <RiDeleteBin6Line /> Tüm Geçmişi Temizle
                                </a>
                                <a className=" w-full flex items-center rounded-lg gap-2 p-3 hover:bg-white/10 transition-colors">
                                    <IoMdPause /> İzleme geçmişini duraklat
                                </a>
                                <a className=" w-full flex items-center rounded-lg gap-2 p-3 hover:bg-white/10 transition-colors">
                                    <CiSettings />   Tüm Geçmişi duraklat
                                </a>
                                <div className="flex flex-col mr-auto pl-10 gap-3">
                                    <a className="text-sm text-white/40">Yorumlar</a>
                                    <a className="text-sm text-white/40">Gönderiler</a>
                                    <a className="text-sm text-white/40">Canlı sohbet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
} 