import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Route";
import Layout from "./Layout";
import BasicTabs from "./Same";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/same" element={<BasicTabs />} />
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout children={route.element} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
