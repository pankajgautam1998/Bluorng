import Bluorng from "../Bluorng";
import Cargos from "../Cargos";
import Hoodies from "../Hoodies";
import Jeans from "../Jeans";

import NewIn from "../NewIn";
import Shirts from "../Shirts";
import Shorts from "../Shorts";
import SweatShirts from "../SweatShirts";

import TShirt from "../T_Shirt";
import ViewAll from "../View_All";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Bluorng />,
  },
  {
    id: 1,
    path: "newin",
    element: <NewIn />,
  },
  {
    id: 1,
    path: "tshirt",
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
];
