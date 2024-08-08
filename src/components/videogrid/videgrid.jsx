

export default function VideoGrid(){
    return (
        <div className="flex flex-col gap-2">
            <a href="#" className="relative aspect-video   rounded">
                <img  alt="" src="https://wallpapers.com/images/hd/aesthetic-youtube-wordmark-logo-vevshkgds6xxk7lr.jpg" className="block w-full h-full object-cover rounded " />
                <div className="absolute bottom-1 right-1 bg-black/60 text-sm  p-px px-1 rounded-sm ">21.80</div>
            </a>
            <div className="flex gap-2">
                <a href="#" className="flex-shrink-0">
                    <img src="https://wallpapers.com/images/hd/aesthetic-youtube-wordmark-logo-vevshkgds6xxk7lr.jpg" alt=""  className="h-12 w-12 rounded-full border flex"/>
                </a>
                <div className="flex flex-col">
                    <a href="#" className="font-bold">Lorem ipsum</a>
                <a href="#" className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </a>
                <div className="text-gray-500 text-sm">
                    39K Görüntülenme | 3 Gün önce
                </div>
                </div>
            </div>
        </div>
    )
}