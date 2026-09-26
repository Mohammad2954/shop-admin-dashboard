
import { FaHome } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { IoTicketSharp } from "react-icons/io5";
import { VscCommentDiscussion } from "react-icons/vsc";
export default [
  {
    id: crypto.randomUUID(),
    title: "منو اصلی",
    items: [
      {
        id: crypto.randomUUID(),
        href: "/",
        title: "داشبورد",
        icon: FaHome,
      },
      {
        id: crypto.randomUUID(),
        href: "/products",
        title: "محصولات",
        icon: FaBasketShopping,
      },
      {
        id: crypto.randomUUID(),
        href: "/users",
        title: "کاربران",
        icon: HiUsers,
      },
      {
        id: crypto.randomUUID(),
        href: "/tickets",
        title: "تیکت ها",
        icon: IoTicketSharp,
      },
      {
        id: crypto.randomUUID(),
        href: "/comments",
        title: "کامنت ها",
        icon: VscCommentDiscussion,
      },
    ],
  },
];
