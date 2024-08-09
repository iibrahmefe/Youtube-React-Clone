// Ana Sayfa ve Abonelikler
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";

// Müzik ve Medya
import { SiYoutubemusic } from "react-icons/si";
import { IoIosMusicalNote } from "react-icons/io";
import { CgMediaLive } from "react-icons/cg";

// Kullanıcı ve Hesap
import { BiSolidUserAccount } from "react-icons/bi";
import { RiAccountPinCircleLine } from "react-icons/ri";

// Geçmiş ve Oynatma Listesi
import { RiHistoryFill } from "react-icons/ri";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

// Video ve Ayarlar
import { MdOutlineVideoSettings } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";

// Finans ve Oyun
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";

export const MainMenu = [
    {
        path: '/',
        title: 'Anasayfa',
        // icon: {
        //     active: (

        //     ),
        //     passive: (
        //         <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" aria-hidden="true"><path d="m12 4.44 7 6.09V20h-6v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path></svg>
        //     )
        // }
    },
    {
        path: '/Shorts',
        title: 'Shorts',
        // icon: {
        //     active: (
        //         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" aria-hidden="true"><path d="m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path></svg>
        //     ),
        //     passive: (
        //         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" aria-hidden="true"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
        //     )
        // }
    },
    {
        path: '/Abonelikler',
        title: 'Abonelikler',
        // icon: {
        //     active: (
        //         <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" aria-hidden="true"><path d="M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6-5-3v6l5-3zm2-12H7v1h10V3z"></path></svg>
        //     ),
        //     passive: (
        //         <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" aria-hidden="true"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
        //     )
        // }
    },

]

export const Categories = [
    "Teknoloji",
    "Eğitim",
    "Sağlık",
    "Spor",
    "Sanat",
    "Müzik",
    "Tarih",
    "Bilim",
    "Seyahat",
    "Finans",
    "Kültür",
    "Moda",
    "Edebiyat",
    "Doğa",
    "Gastronomi",
    "Sinema",
    "Mimarlık",
    "Felsefe",
    "Psikoloji",
    "Astronomi",
    "Sosyal Medya",
    "Dijital Pazarlama",
    "Yapay Zeka",
    "Girişimcilik",
    "Otomotiv",
    "Tarım",
    "Çevre",
    "Oyun",
    "Kariyer Gelişimi",
    "Blockchain",
    "Robotik",
    "Fotografi",
    "Sürdürülebilirlik"
]

export const SidebarList = [
    {
        title: "Home",
        link: "/",
        icon: <IoMdHome className="text-[20px]" />,
    },
    {
        title: "Abonelikler",
        link: "/Abonelikler",
        icon: <MdOutlineSubscriptions className="text-[20px]" />,
    },
    {
        title: "Youtube Music",
        link: "/ytmusic",
        icon: <SiYoutubemusic className="text-[20px]" />,
    },
    {
        title: "Shorts",
        link: "/Shorts",
        icon: <SiYoutubemusic className="text-[20px]" />,
    },
]


export const SidebarListSecond = [
    {

        title: "Kanalınız",
        link: "/channel",
        icon: <BiSolidUserAccount className="text-[20px]" />,
    },
    {
        title: "Geçmiş",
        link: "/history",
        icon: <RiHistoryFill className="text-[20px]" />,
    },
    {
        title: "Oynatma Listeleri",
        link: "/playlists",
        icon: <MdOutlinePlaylistPlay className="text-[20px]" />,
    },
    {
        title: "Videolarınız",
        link: "/videos",
        icon: < MdOutlineVideoSettings className="text-[20px]" />,
    },
    {
        title: "Daha sonra izle",
        link: "/later",
        icon: < MdOutlineWatchLater className="text-[20px]" />,
    },
    {
        title: "Beğendiklerim",
        link: "/Likes",
        icon: <AiFillLike className="text-[20px]" />,
    },
    {
        title: "İndirilenler",
        link: "/İndirilenler",
        icon: <LiaDownloadSolid className="text-[20px]" />,
    },
]

export const Subs = [
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
    {
        title: "Lorem",
        icon: <RiAccountPinCircleLine className="w-6 h-6 rounded-full" />,
    },
]

export const SidebarListThird = [
    {
        title: "Trendler",
        icon: <FaMoneyBillTrendUp />
    },
    {
        title: "Müzik",
        icon: <IoIosMusicalNote />
    },
    {
        title: "Müzik",
        icon: <IoIosMusicalNote />
    },
    {
        title: "Canlı",
        icon: <CgMediaLive />
    },
    {
        title: "Oyun",
        icon: <FaGamepad />
    },
    {
        title: "Spor",
        icon: <TfiCup />

    },
]


import { TfiCup } from "react-icons/tfi";