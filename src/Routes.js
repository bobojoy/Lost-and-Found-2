// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components for Admin, Member, and other pages
import WelcomePage from "./WelcomePage";
import Home from "./Member/Components/Home";
import FoundItemList from "./Member/Components/FoundItemList";
import LostItemList from "./Member/Components/LostItemList";
import FoundItemDetailsPage from "./Member/Components/FoundItemDetailsPage";
import LostItemDetailsPage from "./Member/Components/LostItemDetailsPage";
import Signup from "./SignUp";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import SuccessfullLogOut from "./SuccessfullLogOut";
import LostItemFormComponent from "./Member/Components/LostItemFormComponent";
import FoundItemFormComponent from "./Member/Components/FoundItemFormComponent";
import ClaimItemFormComponent from "./Member/Components/ClaimItemFormComponent"; // Import the ClaimItemFormComponent

// Admin-specific components
import AdminHomePage from "./Admin/Components/AdminHomePage";
import AdminLogin from "./Admin/Components/Login";
import AdminSignUp from "./Admin/Components/SignUp";
import AdminFoundItemList from "./Admin/Components/FoundItemList";
import AdminLostItemList from "./Admin/Components/LostItemList";
import AdminFoundItemDetailsPage from "./Admin/Components/FoundItemDetailsPage";
import AdminLostItemDetailsPage from "./Admin/Components/LostItemDetailsPage";
import AdminClaimFoundItemPage from "./Admin/Components/ClaimFoundItemPage";
import AdminClaimLostItemPage from "./Admin/Components/ClaimLostItemPage";

// Layout components
import { AdminLayout, MemberLayout } from "./Layouts";

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Public Route (Welcome page) */}
      <Route path="/" element={<WelcomePage />} />

      {/* Member Routes - Includes Member Layout */}
      <Route path="/member" element={<MemberLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="founditems" element={<FoundItemList />} />
        <Route path="lostitems" element={<LostItemList />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="successfullogout" element={<SuccessfullLogOut />} />
        <Route path="report-lost-item" element={<LostItemFormComponent />} />
        <Route path="report-found-item" element={<FoundItemFormComponent />} />
        {/* Add ClaimItemFormComponent here */}
        <Route path="claim-item" element={<ClaimItemFormComponent />} />{" "}
        {/* New route for claiming an item */}
        <Route path="lostitem/:id" element={<LostItemDetailsPage />} />
        <Route path="founditem/:id" element={<FoundItemDetailsPage />} />
      </Route>

      {/* Admin Routes - Includes Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="home" element={<AdminHomePage />} />
        <Route path="founditems" element={<AdminFoundItemList />} />
        <Route path="lostitems" element={<AdminLostItemList />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="signup" element={<AdminSignUp />} />
        <Route path="founditem/:id" element={<AdminFoundItemDetailsPage />} />
        <Route path="lostitem/:id" element={<AdminLostItemDetailsPage />} />
        <Route
          path="claim-found-item/:id"
          element={<AdminClaimFoundItemPage />}
        />
        <Route
          path="claim-lost-item/:id"
          element={<AdminClaimLostItemPage />}
        />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
