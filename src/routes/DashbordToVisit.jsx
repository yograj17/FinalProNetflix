import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashbordToVisit({ children, check }) {
  const navigat = useNavigate();
  useEffect(() => {
    if (check) {
      navigat("/dashbord");
    }
  }, [check, navigat]);
  return check ? null : children;
}

export default DashbordToVisit;
