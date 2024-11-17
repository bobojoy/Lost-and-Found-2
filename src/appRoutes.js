// src/appRoutes.js
import WelcomePage from "./Pages/WelcomePage"; // Entry page
import Home from "./Member/Components/Home"; // Member home page
import FoundItemList from "./Member/Components/FoundItemList"; // Member found items list
import LostItemList from "./Member/Components/LostItemList"; // Member lost items list
import FoundItemDetailsPage from "./Member/Components/FoundItemDetailsPage"; // Member found item details page
import LostItemDetailsPage from "./Member/Components/LostItemDetailsPage"; // Member lost item details page
import MemberLogin from "./Member/Components/Login"; // Member login page
import SignUp from "./Member/Components/MemberSignup"; // Member sign up page
import LogOut from "./Member/Components/LogOut"; // Member logout page
import SuccessfullLogOut from "./Member/Components/SuccessfullLogOut"; // Member successful logout page
import LostItemFormComponent from "./Member/Components/LostItemFormComponent"; // Report lost item
import FoundItemFormComponent from "./Member/Components/FoundItemFormComponent"; // Report found item
import ClaimItemFormComponent from "./Member/Components/ClaimItemFoundComponent"; // Claim found item

import AdminHomePage from "./Admin/Components/AdminHomePage"; // Admin home page
import AdminLogin from "./Admin/Components/Login"; // Admin login page
import AdminSignUp from "./Admin/Components/Signup"; // Admin sign up page
import AdminFoundItemList from "./Admin/Components/FoundItemList"; // Admin found items list
import AdminLostItemList from "./Admin/Components/LostItemList"; // Admin lost items list
import AdminFoundItemDetailsPage from "./Admin/Components/FoundItemDetailsPage"; // Admin found item details page
import AdminLostItemDetailsPage from "./Admin/Components/LostItemDetailsPage"; // Admin lost item details page
import AdminClaimFoundItemPage from "./Admin/Components/ClaimFoundItemPage"; // Admin claim found item page
import AdminClaimLostItemPage from "./Admin/Components/ClaimFoundItemPage"; // Admin claim lost item page

// Import ErrorBoundary and NotFoundPage components
import ErrorBoundary from "./ErrorBoundary"; // Custom ErrorBoundary component
import NotFoundPage from "./NotFoundPage"; // 404 Page

const routes = [
  // Public Routes
  {
    path: "/",
    element: <WelcomePage />, // The main entry page
  },

  // Member Routes
  {
    path: "/member",
    element: (
      <ErrorBoundary>
        <Home /> {/* Member home page */}
      </ErrorBoundary>
    ),
    children: [
      {
        path: "home",
        element: (
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        ),
      },
      {
        path: "/member/founditems",
        element: (
          <ErrorBoundary>
            <FoundItemList />
          </ErrorBoundary>
        ),
      },
      {
        path: "/member/lostitems",
        element: (
          <ErrorBoundary>
            <LostItemList />
          </ErrorBoundary>
        ),
      },
      {
        path: "login",
        element: (
          <ErrorBoundary>
            <MemberLogin />
          </ErrorBoundary>
        ),
      },
      {
        path: "signup",
        element: (
          <ErrorBoundary>
            <SignUp />
          </ErrorBoundary>
        ),
      },
      {
        path: "logout",
        element: (
          <ErrorBoundary>
            <LogOut />
          </ErrorBoundary>
        ),
      },
      {
        path: "successfullogout",
        element: (
          <ErrorBoundary>
            <SuccessfullLogOut />
          </ErrorBoundary>
        ),
      },
      {
        path: "report-lost-item",
        element: (
          <ErrorBoundary>
            <LostItemFormComponent />
          </ErrorBoundary>
        ),
      },
      {
        path: "report-found-item",
        element: (
          <ErrorBoundary>
            <FoundItemFormComponent />
          </ErrorBoundary>
        ),
      },
      {
        path: "/claim-item",
        element: (
          <ErrorBoundary>
            <ClaimItemFormComponent />
          </ErrorBoundary>
        ),
      },
      {
        path: "lostitem/:id",
        element: (
          <ErrorBoundary>
            <LostItemDetailsPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "founditem/:id",
        element: (
          <ErrorBoundary>
            <FoundItemDetailsPage />
          </ErrorBoundary>
        ),
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: (
      <ErrorBoundary>
        <AdminHomePage /> {/* Admin home page */}
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/admin/home",
        element: (
          <ErrorBoundary>
            <AdminHomePage />
          </ErrorBoundary>
        ),
      },
      {
        path: "founditems",
        element: (
          <ErrorBoundary>
            <AdminFoundItemList />
          </ErrorBoundary>
        ),
      },
      {
        path: "lostitems",
        element: (
          <ErrorBoundary>
            <AdminLostItemList />
          </ErrorBoundary>
        ),
      },
      {
        path: "login",
        element: (
          <ErrorBoundary>
            <AdminLogin />
          </ErrorBoundary>
        ),
      },
      {
        path: "signup",
        element: (
          <ErrorBoundary>
            <AdminSignUp />
          </ErrorBoundary>
        ),
      },
      {
        path: "founditem/:id",
        element: (
          <ErrorBoundary>
            <AdminFoundItemDetailsPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "lostitem/:id",
        element: (
          <ErrorBoundary>
            <AdminLostItemDetailsPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "claim-found-item/:id",
        element: (
          <ErrorBoundary>
            <AdminClaimFoundItemPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "claim-lost-item/:id",
        element: (
          <ErrorBoundary>
            <AdminClaimLostItemPage />
          </ErrorBoundary>
        ),
      },
    ],
  },

  // Catch-all for 404 Page
  {
    path: "*",
    element: <NotFoundPage />, // Custom 404 page
  },
];

export default routes;
