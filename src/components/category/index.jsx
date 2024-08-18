import { Categories } from "../../const/const";

import { motion } from "framer-motion";
// ! Animate js  code's
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
// ! Animate js  code's

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
                    <button key={category} className="px-3 py-1 text-white transition-all rounded-lg whitespace-nowrap hover:bg-white/30 bg-white/10">{category}</button>
                ))}
            </motion.div>
        </motion.div>
    )
}