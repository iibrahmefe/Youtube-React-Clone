import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
export default function Searchbar() {
    return (
        <form className="md:flex hidden gap-4 flex-grow justify-center">
            <div className="flex flex-grow max-w-[600px]">
                <input type="search" placeholder="Ara" className="rounded-l-full border border-white/30 bg-[#222222] px-4 py-1 text-lg w-full" />
                <div className="bg-[#303030] py-2 px-4 rounded-r-full  flex items-center text-[20px] border border-white/30"><CiSearch /></div>
                <div className="rounded-full bg-[#222222] max-w-[40px] max-h-[40px] h-full w-full flex items-center justify-center ml-4 text-[18px]"><FaMicrophone /></div>
            </div>
        </form>
    )
}