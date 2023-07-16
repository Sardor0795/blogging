import { lazy, Suspense } from "react";
import { GlobalStyles } from "./style";
import Helmet from "./helmet";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./../components/Navbar";
import ErrorBoundary from "./../components/ErrorBoundary";
import Loader from "./../components/Loader";
import Footer from "../components/Footer";
import ToTopButton from './../components/ToTopButton';
import AuthDetector from "./../components/AuthDetector";
// Page imports with lazy loading
const NotFoundPage = lazy(() => import("./../pages/404"));
const AuthHomePage = lazy(() => import("./../pages/Home/AuthorizedHome"));
const NoAuthHomePage = lazy(() => import("./../pages/Home/UnauthorizedHome"));
const AboutPage = lazy(() => import("./../pages/About"));
const TopicsPage = lazy(() => import("./../pages/Topics"));
const PrivacyPage = lazy(() => import("./../pages/Privacy"));
const TermsOfUsePage = lazy(() => import("./../pages/TermsOfUse"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const ArticleInfoPage = lazy(() => import("./../pages/ArticleInfo"));
const ProfileSettingsPage = lazy(() => import("../pages/ProfileSettings"));
const ProfileFavouritesPage = lazy(() => import("../pages/ProfileFavourites"));
const ProfileArticlesPage = lazy(() => import("../pages/ProfileArticles"));
const ProfileStatisticsPage = lazy(() => import("../pages/ProfileStatistics"));
const WriteArticlePage = lazy(() => import("../pages/WriteArticle"));
const EditArticlePage = lazy(() => import("../pages/EditArticle"));

function Root() {
  return (
    <>
      <GlobalStyles />
      <Helmet />
      <ToTopButton/>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          {/* Routes */}
          <Routes>
            {/* Routes with Navbar Start--- */}
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
                    auth={<ProfileSettingsPage />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/profile-favorites"
                element={
                  <AuthDetector
                    auth={<ProfileFavouritesPage />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/profile-articles"
                element={
                  <AuthDetector
                    auth={<ProfileArticlesPage />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/profile-statistics"
                element={
                  <AuthDetector
                    auth={<ProfileStatisticsPage />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/write"
                element={
                  <AuthDetector
                    auth={<WriteArticlePage />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <AuthDetector
                    auth={<EditArticlePage />}
                    noauth={<NotFoundPage />}
                  />
                }
              />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
            {/* Routes with Navbar End--- */}

            {/* Outside Start--- */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Outside End--- */}

            {/* Routes with Yellow Navbar Start--- */}
            <Route element={<Navbar yellowbg="true" />}>
              <Route path="/topics/*" element={<TopicsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="/profiles/:id" element={<ProfilePage />} />
            </Route>
            {/* Routes with Yellow Navbar End--- */}
          </Routes>
          {/* Routes --end */}
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Root;
