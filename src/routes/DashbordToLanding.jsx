import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashbordToLanding({ children, check }) {
  const Navigate = useNavigate();

  useEffect(() => {
    if (check) {
      Navigate("/dashbord");
    }
  }, [check, Navigate]);
  return check ? null : children;
}

export default DashbordToLanding;
