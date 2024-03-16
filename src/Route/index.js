import Bluorng from "../Bluorng";
import Footer from "../Footer";
import Header from "../Header";
import Layout from "../Layout";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Bluorng />,
  },
  {
    id: 1,
    path: "/layout",
    element: <Layout />,
  },
  {
    id: 1,
    path: "/header",
    element: <Header />,
  },
  {
    id: 1,
    path: "/footer",
    element: <Footer />,
  },
];
