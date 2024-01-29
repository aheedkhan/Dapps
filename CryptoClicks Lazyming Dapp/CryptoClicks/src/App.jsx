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
import NotFound from "./pages/not_found/NotFound";
import store from "./redux/store";
import { Provider } from "react-redux";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      {" "}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={ROUTE.HOME}
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path={ROUTE.CREATE}
              element={
                <Layout>
                  <Create />
                </Layout>
              }
            />
            <Route
              path={ROUTE.GALLERY}
              element={
                <Layout>
                  <Gallery />
                </Layout>
              }
            />
            <Route
              path={ROUTE.MYNFTS}
              element={
                <Layout>
                  <MyNFTs />
                </Layout>
              }
            />
            <Route
              path={ROUTE.ABOUT}
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      ,
    </>
  );
}
