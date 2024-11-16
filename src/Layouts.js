// src/Layouts.js
export const MemberLayout = ({ children }) => (
  <div className="member-layout">
    <NavBar /> {/* Assuming you have NavBar component */}
    <div className="content">{children}</div>
  </div>
);

export const AdminLayout = ({ children }) => (
  <div className="admin-layout">
    <NavBar /> {/* Assuming you have NavBar component */}
    <div className="content">{children}</div>
  </div>
);
