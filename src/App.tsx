import React from "react";
import "./App.css";
import LoginPage from "./page/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attendance from "./page/AttendancePage";
import Sidebar from "./page/Sidebar";
import StudentPage from "./page/StudentPage";
import AttendancePage from "./page/AttendancePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Student" element={<StudentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
