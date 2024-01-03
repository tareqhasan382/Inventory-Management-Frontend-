import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="flex h-auto">
      <SideBar />
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
