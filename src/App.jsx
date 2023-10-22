import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <NavBar/>
      <h1 className="h1 text-center mt-2 mb-2">APP</h1>

        <Routes>
          <Route element={<LayoutPublic />} path="/">
            <Route element={<Inicio />} path="/"/>
            <Route element={<Nosotros />} path="/nosotros"/>
            <Route element={<Contacto />} path="/contacto"/>
            <Route element={<Blog />} path="/blog"/>
            <Route element={<BlogDetails />} path="/blog/:id"/>
            <Route element={<NotFound />} path="*"/>
          </Route>
        </Routes>

    </>
  );
};

export default App;