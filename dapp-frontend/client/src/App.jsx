import Create from "./pages/create/Create";
import Footer from "./components/Footer";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import Nav from "./components/Nav";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ROUTE } from "./utils/constants";
import MyNFTs from "./pages/myNFTs/MyNFTs";
import About from "./pages/about/About";
import store from "./redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <>
      {" "}
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path={ROUTE.HOME} element={<Home />} />
            <Route path={ROUTE.CREATE} element={<Create />} />
            <Route path={ROUTE.GALLERY} element={<Gallery />} />
            <Route path={ROUTE.MYNFTS} element={<MyNFTs />} />
            <Route path={ROUTE.ABOUT} element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
      ,
    </>
  );
}
