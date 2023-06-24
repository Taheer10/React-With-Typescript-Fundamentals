// Render a component based on a user's role.

import React from "react";

type userRole = "Admin" | "user";

const Medium01 = ({ role }: { role: userRole }) => {
  return (
    <div>
      {role === "Admin" && <AdminDashboard />}
      {role === "user" && <UserDashboard />}
    </div>
  );
};

const AdminDashboard = () => {
  return <>'Welcome Admin'</>;
};

const UserDashboard = () => {
  return <>'Welcome user'</>;
};

export default Medium01;
