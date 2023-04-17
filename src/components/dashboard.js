import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
      <h3>Name : {user.displayName}</h3>
      <h3>Email : {user.email}</h3>
      <button onClick={logoutUser}>Logout</button>
      <p>Glad to work on this technical assesment</p>
    </div>
  );
};

export default Dashboard;