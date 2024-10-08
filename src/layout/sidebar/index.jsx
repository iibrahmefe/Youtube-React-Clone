// import { NavLink } from "react-router-dom";
import { MainMenu, SidebarListThird, SidebarList, SidebarListSecond } from "../../const/const";

import { Subs } from "../../const/const";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const sidebar = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1
    }
} 

const itemlist = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1
    }
}

export default function Sidebar() {
    return (
        <motion.aside
            initial="hidden"
            animate="visible"
            variants={sidebar}
            className="lg:w-56 hidden text-nowrap  lg:sticky  max-h-screen top-0 overflow-auto px-2 lg:flex flex-col" >
            {SidebarList.map((item,index) => (
                <a href={item.link} key={index} className="w-full flex items-center rounded-lg gap-6 p-3 hover:bg-white/10 transition-colors">
                    {item.icon}  {item.title}
                </a>
            ))}
            <hr className="opacity-30 my-2" />
            <a className="w-full flex items-center rounded-lg gap- p-3">
                Siz< MdKeyboardArrowRight />
            </a>
            {SidebarListSecond.map((item) => (
                <motion.a
                    variants={itemlist}
                    href={item.link} key={item} className="w-full flex items-center rounded-lg gap-6 p-3 hover:bg-white/10 transition-colors">
                    {item.icon} {item.title}
                </motion.a>
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
        </motion.aside>
    )
}