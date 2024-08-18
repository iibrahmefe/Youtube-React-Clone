import Logo from "../logo";
import Searchbar from "../search";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";




export default function Navbar() {
    return (
        <div className="flex gap-10 lg:gap-20 items-center sticky z-10 top-0 bg-[#0f0f0f] justify-between pt-2 mb-6 mx-4">
            <Logo />
            <Searchbar />
            <div className="max-w-[255px] w-full h-full flex items-center justify-center ">
                <div className="max-w-[156px] w-full h-full max-h-[40px] flex flex-row items-center justify-center">
                <div className="   min-w-[40px] min-h-[40px] w-full h-full flex items-center rounded-full transition-colors hover:bg-[#171717] justify-center">
                    <BsCameraVideoFill  className="text-[26px]"/>
                </div>
                <div className="   min-w-[40px] min-h-[40px] relative w-full h-full flex items-center rounded-full transition-colors hover:bg-[#171717] justify-center">
                    <IoIosNotifications className="text-[28px] " />
                    <span className="bg-red-700 rounded-xl px-1 flex items-center justify-center  absolute top-1 right-1 text-xs">9+</span>
                </div>
                <div className="  min-w-[40px] min-h-[40px] w-full h-full flex items-center rounded-full transition-colors hover:bg-[#171717] justify-center">
                    <MdAccountCircle className="text-[28px]" />
                </div>
                </div>
            </div>
        </div>
    )
}