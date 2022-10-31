import bell from "./assets/bell.svg";
import egg from "./assets/boiled-egg.svg";
import bread from "./assets/bread.svg";
import off from "./assets/discount.svg";
import fish from "./assets/fish.svg";
import harvest from "./assets/harvest.svg";
import hot from "./assets/hot-sale.svg";
import meat from "./assets/meat.svg";
import milk from "./assets/milk.svg";
import bottle from "./assets/plastic-bottle.svg";
import vegetable from "./assets/vegetable.svg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const megaMenuItems = [
  { title: "سوپر مارکت", logo: hot },
  { title: "خوراکهای گیاهی", logo: bell },
  { title: "هدیه و صنایع دستی", logo: off },
  { title: "مد و پوشاک", logo: harvest, arrow: MdOutlineKeyboardArrowLeft },
  { title: "ورزش و سفر", logo: vegetable, arrow: MdOutlineKeyboardArrowLeft },
  { title: "کالای الکترونیک", logo: bottle },
  { title: "مادر و کودک", logo: bread, arrow: MdOutlineKeyboardArrowLeft },
  { title: "خانه و آشپزخانه", logo: egg },
  { title: "کتاب و لوازم التحریر", logo: milk },
  { title: "سلامت و زیبایی", logo: meat },
  { title: "همه دسته بندی ها", logo: fish },
];
