import React from "react";
import VisitPage from "./Component/visitSection/VisitPage";
import LandingPage from "./Component/Forms/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from "./Component/dashbordSection/Dashbord";
import AllowtoDashbord from "./routes/AllowtoDashbord";
import DashbordToLanding from "./routes/DashbordToLanding";
import DashbordToVisit from "./routes/DashbordToVisit";
import { useSelector } from "react-redux";
import MoreMovies from "./Component/dashbordSection/MoreMovies";

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
        <Route
          path="/moreMovies"
          element={
            // <AllowtoDashbord check={check}>
            <MoreMovies />
            // </AllowtoDashbord>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
