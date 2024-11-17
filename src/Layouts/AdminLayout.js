// src/Layouts/AdminLayout.js
import { Outlet } from "react-router-dom";
import AdminNavBar from "./Admin/NavBar"; // Assuming you have a NavBar for the admin section

const AdminLayout = () => {
  return (
    <div>
      <AdminNavBar />
      <main>
        <Outlet /> {/* Admin-specific nested routes will render here */}
      </main>
    </div>
  );
};

export default AdminLayout;
