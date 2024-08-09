import { Categories } from "../../const/const";

import { motion } from "framer-motion";
const category = {
    visible: {
        transition: {
            delayChildren: .5,
            staggerChildren: 0.09
        }
    }
}

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
export default function Category() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={category}
            className="overflow-x-scroll  scrollbar-hidden relative bg-[#0f0f0f] py-3">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                variants={item}
                className="flex whitespace-nowrap gap-3 transition-transform w-[max-content] items-center ">
                {Categories.map((category) => (
                    <button key={category} className="text-white  py-1 px-3 rounded-lg whitespace-nowrap hover:bg-white/30 bg-white/10 transition-all">{category}</button>
                ))}
            </motion.div>
        </motion.div>
    )
}