// src/Layouts/MemberLayout.js
import { Outlet } from "react-router-dom";
import NavBar from "./Member/NavBar"; // Assuming you have a NavBar for the member section

const MemberLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default MemberLayout;
