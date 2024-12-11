import React from "react";
import VisitPage from "./Component/visitSection/VisitPage";
import LandingPage from "./Component/Forms/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from "./Component/dashbordSection/Dashbord";
import AllowtoDashbord from "./routes/AllowtoDashbord";
import DashbordToLanding from "./routes/DashbordToLanding";
import DashbordToVisit from "./routes/DashbordToVisit";
import { useSelector } from "react-redux";

function App() {
  const check = useSelector((state) => state.user.userInfo.success);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DashbordToVisit check={check}>
              <VisitPage />
            </DashbordToVisit>
          }
        />
        <Route
          path="/login"
          element={
            <DashbordToLanding check={check}>
              <LandingPage />
            </DashbordToLanding>
          }
        />
        <Route
          path="/dashbord"
          element={
            <AllowtoDashbord check={check}>
              <Dashbord />
            </AllowtoDashbord>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
