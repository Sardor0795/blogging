import { lazy, Suspense } from "react";
import { GlobalStyles } from "./style";
import Helmet from "./helmet";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./../components/Navbar";
import ErrorBoundary from "./../components/ErrorBoundary";
import Loader from "./../components/Loader";
import Footer from "../components/Footer";
// Page imports with lazy loading
const NotFoundPage = lazy(() => import("./../pages/404"));
const HomePage = lazy(() => import("./../pages/Home"));
const AboutPage = lazy(() => import("./../pages/About"));
const TopicsPage = lazy(() => import("./../pages/Topics"));
const PrivacyPage = lazy(() => import("./../pages/Privacy"));
const ProfilePage = lazy(() => import("../pages/Profile"));

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
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route element={<Navbar yellowbg="true" />}>
              <Route path="/topics/*" element={<TopicsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/profiles/:id" element={<ProfilePage />} />
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
