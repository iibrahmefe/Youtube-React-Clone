import { IoMdClose } from "react-icons/io"
import Category from "../../components/category"
import Navbar from "../../components/navbar/index"
import { BsThreeDotsVertical } from "react-icons/bs"
import { SiYoutubeshorts } from "react-icons/si"

export default function WatchVideo() {
    return (

        <div className="h-screen w-full">
            <Navbar />
            <div className="max-w-[1754px] mx-20   lg:flex">
                <div className="max-w-[1166]  pt-6 pr-6 flex-1 ">
                    <div className="max-w-6xl w-full relative ">
                        <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="aspect-video h-full  w-full object-cover" />
                    </div>
                    {/* Video Title */}
                    <div className="mt-3">
                        <h2 className="font-bold text-xl">Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024</h2>
                    </div>
                    {/* Video Title */}

                    {/* Video Comment */}

                    <div className="flex items-center mt-2 flex-col lg:flex-row">
                        {/* first Div */}
                        <div className="flex-1 flex">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img src="https://yt3.ggpht.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s48-c-k-c0x00ffffff-no-rj" alt="" />
                            </div>
                            <div className="ml-2 flex flex-col ">
                                <h2 className="text-bold">Learnhist</h2>
                                <p className="text-[11px] opacity-45">1,20M abone</p>
                            </div>
                            <div className="ml-10 flex gap-2 text-nowrap">
                                <button className="px-4  bg-white/20 text-white rounded-full">Katıl</button>
                                <button className="px-4  bg-white text-black rounded-full">Abone ol</button>
                            </div>
                        </div>
                        {/* first Div */}


                        {/* Second Div */}
                        <div className="flex-1 flex items-center flex-wrap">
                            <div className="ml-10 flex gap-2 ">
                                <div className="flex rounded-full  bg-white/10">
                                    <button className="px-4  text-white rounded-l-full  py-1 ">Like</button>
                                    <span className="h-[60%] opacity-40 my-auto w-px bg-white py-1"></span>
                                    <button className="px-4  text-white rounded-r-full  py-1 ">Dislike</button>
                                </div>

                                <button className="px-4  bg-white/10 text-white rounded-full py-1">Paylaş</button>
                                <button className="px-4  bg-white/10 text-white rounded-full py-1">İndir</button>
                                <button className="px-4  bg-white/10 text-white rounded-full py-1">Teşekkürler</button>
                                <button className="px-4  bg-white/10 text-white rounded-full py-1">Klip</button>
                                <button className="px-3  bg-white/10 text-white rounded-full py-1 flex items-center justify-center "><span>...</span></button>
                            </div>
                        </div>
                        {/* Second Div */}
                    </div>
                    <div className="w-full h-max mt-2 rounded-lg bg-white/10 pb-4 py-4 px-4 line-clamp-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis velit tempore blanditiis! Fugit vitae recusandae, sequi sed vero quam iusto! Illum quo odio doloribus quaerat recusandae temporibus aut quasi.
                            Tempore, totam iste qui quaerat repellendus et laudantium esse itaque laborum. Ratione, ducimus! Ducimus quos libero quibusdam tenetur itaque. Doloremque placeat corporis labore possimus accusamus hic incidunt impedit consequatur libero.
                            Vel excepturi neque veniam tempore natus nobis iusto provident laborum error reprehenderit? Optio dolores excepturi esse quae doloribus incidunt nulla architecto mollitia laudantium veritatis, necessitatibus qui sapiente, dignissimos ex nam.</p>
                    </div>
                    {/* Video Comment */}

                    {/* Video human comment */}
                    <div className="w-full h-max px-6 py-6  mt-10">
                        <div className="flex">
                            <h2 className="font-bold">222 Yorum</h2>
                            <div className="ml-7 flex gap-2">
                                <p>Sıralama ölçütü</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-12 mt-5">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex ">
                                <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                            </div>
                            <input type="text" className="w-full bg-inherit  focus:outline-none active:outline-none border-b-2 text-sm " placeholder="Yorum ekleyin..." />
                        </div>

                        <div className="flex flex-col gap-y-7">
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-3 ">
                                <div className="max-w-10 max-h-10 rounded-full overflow-hidden flex ">
                                    <img src="https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
                                </div>
                                <div className="text-sm">
                                    <h2>@Userbilmemne</h2>
                                    <p className="mt-2 text-sm opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea laudantium molestias incidunt illum beatae tenetur atque quia, nostrum magni, maxime architecto sapiente deleniti minus aut doloremque. Veniam, porro? Nesciunt!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Video human comment */}
                </div>

                <aside className="w-full lg:max-w-[402px] lg:mr-36">
                    <Category />
                    {/* Shorts */}
                    <div className="grid grid-cols-3 gap-1">
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
                    {/* Shorts */}

                    {/* Videos */}
                    {/* Maplenecek */}
                    <div className="flex flex-col gap-2 ">
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" max-w-44  rounded-lg relative">
                                <a href="/watchvideo">
                                    <img src="https://e0.pxfuel.com/wallpapers/595/275/desktop-wallpaper-long-road-43781.jpg" alt="" className="min-h-24 w-full aspect-video object-cover" />
                                </a>
                                <span className="absolute bottom-2 right-2 bg-black/60 text-sm px-1 py-px rounded-md">20:34 </span>
                            </div>
                            <div className="w-full">
                                <h2 className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur facilis rem impedit quia vero, inventore numquam ad iusto, temporibus distinctio dignissimos. Labore, tenetur? Eum quisquam commodi tempore doloremque dolor?</h2>
                                <div className="text-sm opacity-40 ">
                                    <p>Learnhist</p>
                                </div>
                                <div className="flex text-sm opacity-40 gap-1">
                                    <h3>9B Görüntülenme</h3> | <span>8 Saat Önce</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Videos */}
                </aside>
            </div>
        </div>
    )

}