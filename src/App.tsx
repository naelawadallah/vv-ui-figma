import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PeachyDesktop from "./pages/PeachyDesktop";
import ColourMobile from "./pages/colour-mobile";
import SummaryDesktop from "./pages/summary-desktop";
import LeftIconsOption2Desktop from "./pages/left-icons-option2-desktop";
import SaddleDesktop from "./pages/saddle-desktop";
import SaddleDesktop1 from "./pages/saddle-desktop1";
import PreloaderMobile from "./pages/preloader-mobile";
import PreloaderTablet from "./pages/preloader-tablet";
import SummaryMobile from "./pages/summary-mobile";
import SummaryTablet from "./pages/summary-tablet";
import AccessoriesMobile from "./pages/accessories-mobile";
import SaddleMobile from "./pages/saddle-mobile";
import LayoutMobileIn from "./pages/layout-mobile-in";
import SaddleTablet from "./pages/saddle-tablet";
import AccessoriesTablet from "./pages/accessories-tablet";
import ColourTablet from "./pages/colour-tablet";
import EffectsBannerIn from "./pages/effects-banner-in";
import PreloaderDesktop from "./pages/preloader-desktop";
import AllColours from "./pages/all-colours";
import HexForDev from "./pages/hex-for-dev";
import CharcoalDesktop from "./pages/charcoal-desktop";
import SeashellDesktop from "./pages/seashell-desktop";
import StoneDesktop from "./pages/stone-desktop";
import NavyDesktop from "./pages/navy-desktop";
import MatchaDesktop from "./pages/matcha-desktop";
import AccessoriesDesktop from "./pages/accessories-desktop";
import SaddleDesktop2 from "./pages/saddle-desktop2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/colour-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/summary-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/left-icons-option-2-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/saddle-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/saddle-desktop1":
        title = "";
        metaDescription = "";
        break;
      case "/preloader-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/preloader-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/summary-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/summary-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/accessories-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/saddle-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/layout-mobile-in":
        title = "";
        metaDescription = "";
        break;
      case "/saddle-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/accessories-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/colour-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/effects-banner-in":
        title = "";
        metaDescription = "";
        break;
      case "/preloader-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/all-colours":
        title = "";
        metaDescription = "";
        break;
      case "/hex-for-dev":
        title = "";
        metaDescription = "";
        break;
      case "/charcoal-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/seashell-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/stone-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/navy-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/matcha-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/accessories-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/saddle-desktop2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PeachyDesktop />} />
      <Route path="/colour-mobile" element={<ColourMobile />} />
      <Route path="/summary-desktop" element={<SummaryDesktop />} />
      <Route
        path="/left-icons-option-2-desktop"
        element={<LeftIconsOption2Desktop />}
      />
      <Route path="/saddle-desktop" element={<SaddleDesktop />} />
      <Route path="/saddle-desktop1" element={<SaddleDesktop1 />} />
      <Route path="/preloader-mobile" element={<PreloaderMobile />} />
      <Route path="/preloader-tablet" element={<PreloaderTablet />} />
      <Route path="/summary-mobile" element={<SummaryMobile />} />
      <Route path="/summary-tablet" element={<SummaryTablet />} />
      <Route path="/accessories-mobile" element={<AccessoriesMobile />} />
      <Route path="/saddle-mobile" element={<SaddleMobile />} />
      <Route path="/layout-mobile-in" element={<LayoutMobileIn />} />
      <Route path="/saddle-tablet" element={<SaddleTablet />} />
      <Route path="/accessories-tablet" element={<AccessoriesTablet />} />
      <Route path="/colour-tablet" element={<ColourTablet />} />
      <Route path="/effects-banner-in" element={<EffectsBannerIn />} />
      <Route path="/preloader-desktop" element={<PreloaderDesktop />} />
      <Route path="/all-colours" element={<AllColours />} />
      <Route path="/hex-for-dev" element={<HexForDev />} />
      <Route path="/charcoal-desktop" element={<CharcoalDesktop />} />
      <Route path="/seashell-desktop" element={<SeashellDesktop />} />
      <Route path="/stone-desktop" element={<StoneDesktop />} />
      <Route path="/navy-desktop" element={<NavyDesktop />} />
      <Route path="/matcha-desktop" element={<MatchaDesktop />} />
      <Route path="/accessories-desktop" element={<AccessoriesDesktop />} />
      <Route path="/saddle-desktop2" element={<SaddleDesktop2 />} />
    </Routes>
  );
}
export default App;
