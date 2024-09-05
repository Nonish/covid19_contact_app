import addIcon from "../assets/add.svg";
import homeIcon from "../assets/home.svg";
import mapIcon from "../assets/map.svg";

const routes = [
   {
      path: "/",
      img: homeIcon,
      title: "Home",
   },
   {
      path: "/add-contact",
      img: addIcon,
      title: "Contact",
   },
   {
      path: "/charts-and-maps",
      img: mapIcon,
      title: "Charts and Maps",
   },
];

export default routes;