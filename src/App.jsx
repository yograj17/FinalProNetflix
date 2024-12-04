import React, { useEffect } from "react";
import VisitPage from "./Component/visitSection/VisitPage";
import LandingPage from "./Component/Forms/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from "./Component/dashbordSection/Dashbord";
import AllowtoDashbord from "./routes/allowtoDashbord";
import DashbordToLanding from "./routes/DashbordToLanding";
import DashbordToVisit from "./routes/DashbordToVisit";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((store) => store.user);
  const check = user.success;

  return (
    <div className="border border-black">
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
    </div>
  );
}

export default App;
