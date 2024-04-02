import Bluorng from "../Bluorng";
import Careers from "../Careers";
import Cargos from "../Cargos";
import CargosDetail from "../Cargos/CargosDetail";
import Contactus from "../ContactUs";
import Exchanges from "../Exchanges";
import Faq from "../Faq";
import Hoodies from "../Hoodies";
import Jeans from "../Jeans";
import Memberslogin from "../Memberslogin";

import NewIn from "../NewIn";

import Ourstore from "../Ourstores";

import Shipping from "../Shipping";
import Shirts from "../Shirts";

import Shorts from "../Shorts";
import Sizechart from "../Sizechart";
import Story from "../Story";
import SweatShirts from "../SweatShirts";

import TShirt from "../T_Shirt";
import ShirtDetails from "../Shirts/ShirtDetails";
import TshirtDetails from "../T_Shirt/T_ShirtDetails";

import Terms from "../Terms";
import ViewAll from "../View_All";
import HoodiesDetails from "../Hoodies/Hoodiesdetails";
import SweatShirtDetails from "../SweatShirts/SweatShirtDetails";
import JeansDetails from "../Jeans/JeansDetails";
import ShortsDetails from "../Shorts/ShortsDetails";
import ViewAllDetails from "../View_All/ViewAllDetails";
import NewInDetails from "../NewIn/NewInDetails";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Bluorng />,
  },
  {
    id: 1,
    path: "/newin",
    element: <NewIn />,
  },
  {
    id: 1,
    path: "/tshirt",
    element: <TShirt />,
  },
  {
    id: 1,
    path: "/shirt",
    element: <Shirts />,
  },
  {
    id: 1,
    path: "/hoodies",
    element: <Hoodies />,
  },
  {
    id: 1,
    path: "/sweatshirts",
    element: <SweatShirts />,
  },
  {
    id: 1,
    path: "/cargos",
    element: <Cargos />,
  },
  {
    id: 1,
    path: "/cargos/:Cargos_detail",
    element: <CargosDetail />,
  },
  {
    id: 1,
    path: "/jeans",
    element: <Jeans />,
  },
  {
    id: 1,
    path: "/shorts",
    element: <Shorts />,
  },
  {
    id: 1,
    path: "/viewall",
    element: <ViewAll />,
  },
  {
    id: 1,
    path: "/sizechart",
    element: <Sizechart />,
  },
  {
    id: 1,
    path: "/memberslogin",
    element: <Memberslogin />,
  },
  {
    id: 1,
    path: "/exchanges",
    element: <Exchanges />,
  },
  {
    id: 1,
    path: "/faq",
    element: <Faq />,
  },
  {
    id: 1,
    path: "/terms",
    element: <Terms />,
  },
  {
    id: 1,
    path: "/shipping",
    element: <Shipping />,
  },
  {
    id: 1,
    path: "/story",
    element: <Story />,
  },
  {
    id: 1,
    path: "/ourstores",
    element: <Ourstore />,
  },
  {
    id: 1,
    path: "/careers",
    element: <Careers />,
  },
  {
    id: 1,
    path: "/contactus",
    element: <Contactus />,
  },
  {
    id: 1,
    path: "/tshirt/:tshirtdetails",
    element: <TshirtDetails />,
  },
  {
    id: 1,
    path: "/shirt/:shirt_id",
    element: <ShirtDetails />,
  },
  {
    id: 1,
    path: "/hoodies/:hoodies_id",
    element: <HoodiesDetails />,
  },
  {
    id: 1,
    path: "sweatshirt/:sweatshirt_id",
    element: <SweatShirtDetails />,
  },
  {
    id: 1,
    path: "/jeans/:jeans_id",
    element: <JeansDetails />,
  },
  {
    id: 1,
    path: "/shorts/:shorts_id",
    element: <ShortsDetails />,
  },
  {
    id: 1,
    path: "/viewall/:viewall_id",
    element: <ViewAllDetails />,
  },
  {
    id: 1,
    path: "/newin/:newin_id",
    element: <NewInDetails />,
  },
];
