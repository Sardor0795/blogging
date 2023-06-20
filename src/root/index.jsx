import { lazy, Suspense } from "react";
import { GlobalStyles } from "./style";
import Helmet from "./helmet";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./../components/Navbar";
import ErrorBoundary from "./../components/ErrorBoundary";
import Loader from "./../components/Loader";
import Footer from "../components/Footer";
// Page imports with lazy loading
const HomePage = lazy(() => import("./../pages/Home"));
const AboutPage = lazy(() => import("./../pages/About"));
const PrivacyPage = lazy(() => import("./../pages/Privacy"));
const NotFoundPage = lazy(() => import("./../pages/404"));

function Root() {
  return (
    <>
      <GlobalStyles />
      <Helmet />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          {/* Routes */}
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          {/* Routes --end */}
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Root;
