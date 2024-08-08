import { NavLink } from "react-router-dom";
import { MainMenu, SidebarListThird,SidebarList, SidebarListSecond } from "../../const/const";

import { Subs } from "../../const/const";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";


export default function Sidebar() {
    return (
        //    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col flex ml-1 max-w-[]">
        //     asekqwjelkqwj
        //    </aside>
        <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden px-2 flex flex-col" >
            {SidebarList.map((item) => (
                <a href={item.link} key={item} className="w-full flex items-center rounded-lg gap-6 p-3 hover:bg-white/10 transition-colors">
                    {item.icon}  {item.title}
                </a>
            ))}
            <hr className="opacity-30 my-2" />
            <a className="w-full flex items-center rounded-lg gap- p-3">
                Siz< MdKeyboardArrowRight />
            </a>
            {SidebarListSecond.map((item) => (
                <a href={item.link} key={item} className="w-full flex items-center rounded-lg gap-6 p-3 hover:bg-white/10 transition-colors">
                    {item.icon} {item.title}
                </a>
            ))}
            <hr className="opacity-30 my-2" />
            <h2 className="p-3 font-semibold text-lg">Abonelikler</h2>
            {Subs.map((item) => (
                <a key={item} className="w-full flex items-center rounded-lg gap-6 p-3 hover:bg-white/10 transition-colors">
                    {item.icon} {item.title}
                </a>
            ))}
            <span className="p-3 w-full text-center flex items-center gap-2"> <FaArrowUp className="text-[14px]" />
                Daha Fazla göster</span>
            <hr className="opacity-30 my-2" />
            <h2 className="p-3 font-semibold text-lg">Keşfet</h2>
            {SidebarListThird.map((item) => (
                <a key={item} className="w-full flex items-center rounded-lg gap-6 p-3 hover:bg-white/10 transition-colors">
                    {item.icon} {item.title}
                </a>
            ))}
        </aside>
    )
}