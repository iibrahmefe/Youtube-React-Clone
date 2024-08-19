// * import file
import { motion } from "framer-motion"
import { IoVolumeMute } from "react-icons/io5";
import { BsCcSquare } from "react-icons/bs";
import { PiAppWindowBold } from "react-icons/pi";
// import { VideoList } from "../../const/const";

// * import file
// ! Animate js Code's
const item = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}
// ! Animate js Code's

export default function VideoGrid({ title, subtitle, image, statistics, duration }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            variants={item}
            className="flex flex-col gap-2 ">
            <a href="/watchvideo" className="relative overflow-hidden rounded-lg aspect-video  group">
                <img alt="" src={image} className="block object-cover w-full h-full rounded " />
                <div className="absolute p-px px-1 text-sm rounded bottom-1 right-1 bg-black/80 ">{duration}</div>
                <div className="h-full absolute flex flex-col gap-3  transition-colors right-1 top-1 ">
                    <span className="rounded-full opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center text-xl h-9 w-9   bg-black"><IoVolumeMute /></span>
                    <span className="rounded-full opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center text-xl h-9 w-9  bg-black"><BsCcSquare /></span>
                    <span className="rounded-full opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center text-xl h-9 w-9  bg-black"><PiAppWindowBold /></span>
                </div>
            </a>
            <div className="flex gap-2">
                <a href="#" className="flex-shrink-0">
                    <img src="https://wallpapers.com/images/hd/aesthetic-youtube-wordmark-logo-vevshkgds6xxk7lr.jpg" alt="" className="flex w-9 h-9 border rounded-full" />
                </a>
                <div className="flex flex-col">
                    <a href="#" className="font-bold">{title}</a>
                    <a href="#" className="text-sm text-gray-500 line-clamp-1">
                        {subtitle}
                    </a>
                    <div className="text-sm text-gray-500 mt-2 py-1">
                        {statistics}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}