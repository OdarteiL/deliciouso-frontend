import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import MenuPage from "../pages/MenuPage";
import GalleryPage from "../pages/GalleryPage";
import FaqPage from "../pages/FaqPage";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"  element={<App />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Route>
    </>
  )
);

export default AppRouter;
