import VideoGrid from "../../components/videogrid/videgrid";
import { motion } from "framer-motion";
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
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
            <VideoGrid />
        </motion.div>
    )
}