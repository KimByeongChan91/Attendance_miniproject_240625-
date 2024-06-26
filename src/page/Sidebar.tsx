import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Sidebar: React.FC = () => {
  return (
    <div className="w-6 h-screen  flex flex-col p-5 bg-[#D8EFD3] items-center justify-center">
      <div className="">
        <Link to="/Attendance" className="">
          <FaHome />
        </Link>
      </div>
      <div className="flex flex-col p-72 space-y-7">
        <Link to="/attendance" className="">
          <FaCalendarDays />
        </Link>
        <Link to="/student" className="">
          <IoPerson />
        </Link>
      </div>
      <div className="sidebar-bottom">
        <Link to={"/Login"}>
          <IoIosLogOut />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
