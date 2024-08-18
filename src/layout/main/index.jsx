import VideoGrid from "../../components/videogrid/videgrid";
import { motion } from "framer-motion";
import {VideoList} from "../../const/const"
const container = {
    visible: {
        transition: {
            delayChildren: .5,
            staggerChildren: 0.09
        }
    }
}

export default function Main() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">

                {VideoList.map((video,index)=>(
                    <VideoGrid key={index} 
                    title={video.title}
                    subtitle={video.subtitle}
                    statics={video.statics}
                    image={video.image}
                    duration={video.duration}
                    />
                    
                ))}
           
        </motion.div>
    )
}