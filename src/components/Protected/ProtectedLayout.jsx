import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ProtectedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />   {/* child route renders here */}
    </>
  );
};
export default ProtectedLayout
