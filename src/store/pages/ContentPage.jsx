import "../../../src/index.css";
import NavBar from "../NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Product from "./product";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";
import Blog from "./blog";
import Profile from "./profile";
import Cart from "./shoppingCart";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import Footer from "../Footer";
import FilterCategories from "../FilterCategories";
import DetailPage from "./detailPage";
import Products from "./product";
import ConfirmCode from "./ConfirmCode";
import LandingPage from "@/main-page/home";

function ContentPage() {
  const location = useLocation();

  const isStoreRoute = location.pathname.startsWith("/store");

  const hideLayoutRoutes = ["/store/login", "/store/signup"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {isStoreRoute && !shouldHideLayout && <NavBar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store/" element={<Navigate to="/home" />} />
          <Route path="/store/home" element={<Home />} />
          <Route path="/store/product" element={<Product />} />
          <Route path="/store/about-us" element={<AboutUs />} />
          <Route path="/store/contact-us" element={<ContactUs />} />
          <Route path="/store/blog" element={<Blog />} />
          <Route path="/store/profile" element={<Profile />} />
          <Route path="/store/cart" element={<Cart />} />
          <Route
            path="/store/filter-categories"
            element={<FilterCategories />}
          />
          <Route path="/store/shop" element={<Products />} />
          <Route path="/store/product/:id" element={<DetailPage />} />
          <Route path="/store/login" element={<Login />} />
          <Route path="/store/signup" element={<Signup />} />
          <Route path="/store/confirm-code" element={<ConfirmCode />} />
        </Routes>
      </main>

      {isStoreRoute && !shouldHideLayout && <Footer />}
    </div>
  );
}

export default ContentPage;
