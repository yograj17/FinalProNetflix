import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashbordToVisit({ children, check }) {
  const Navigat = useNavigate();
  useEffect(() => {
    if (check) {
      Navigat("/dashbord");
    }
  }, [check, Navigat]);
  return check ? null : children;
}

export default DashbordToVisit;
