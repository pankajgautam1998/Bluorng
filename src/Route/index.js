import Bluorng from "../Bluorng";

import NewIn from "../NewIn";
import Shirts from "../Shirts";

import TShirt from "../T_Shirt";

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
];
