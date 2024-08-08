import { Categories } from "../../const/const";

export default function Category() {
    return (
        <div className="overflow-x-hidden relative bg-[#0f0f0f] py-3">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content] items-center ">
                {Categories.map((category, index) => (
                    <button key={category} className="text-white  py-1 px-3 rounded-lg whitespace-nowrap hover:bg-white/30 bg-white/10 transition-all">{category}</button>
                ))}
            </div>
        </div>
    )
}