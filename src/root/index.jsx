import { lazy, Suspense } from "react";
import { GlobalStyles } from "./style";
import Helmet from "./helmet";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./../components/Navbar";
import ErrorBoundary from "./../components/ErrorBoundary";
import Loader from "./../components/Loader";
import Footer from "../components/Footer";
import AuthDetector from "./../components/AuthDetector";
// Page imports with lazy loading
const NotFoundPage = lazy(() => import("./../pages/404"));
const AuthHomePage = lazy(() => import("./../pages/Home/AuthorizedHome"));
const NoAuthHomePage = lazy(() => import("./../pages/Home/UnauthorizedHome"));
const AboutPage = lazy(() => import("./../pages/About"));
const TopicsPage = lazy(() => import("./../pages/Topics"));
const PrivacyPage = lazy(() => import("./../pages/Privacy"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const ArticleInfoPage = lazy(() => import("./../pages/ArticleInfo"));
const ProfileSettings = lazy(() => import("../pages/ProfileSettings"));
const ProfileFavourites = lazy(() => import("../pages/ProfileFavourites"));
const ProfileArticles = lazy(() => import("../pages/ProfileArticles"));
const ProfileStatistics = lazy(() => import("../pages/ProfileStatistics"));

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
              <Route
                path="/home"
                element={
                  <AuthDetector
                    auth={<AuthHomePage />}
                    noauth={<NoAuthHomePage />}
                  />
                }
              />
              <Route path="/posts/:id" element={<ArticleInfoPage />} />
              <Route
                path="/profile-settings"
                element={
                  <AuthDetector
                    auth={<ProfileSettings />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/profile-favorites"
                element={
                  <AuthDetector
                    auth={<ProfileFavourites />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/profile-articles"
                element={
                  <AuthDetector
                    auth={<ProfileArticles />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/profile-statistics"
                element={
                  <AuthDetector
                    auth={<ProfileStatistics />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
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
