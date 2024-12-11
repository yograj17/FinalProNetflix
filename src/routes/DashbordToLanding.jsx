import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashbordToLanding({ children, check }) {
  const navigate = useNavigate();

  useEffect(() => {

    if (check) {
      navigate("/dashbord");
    }
  }, [check, navigate]);
  return check ? null : children;
}

export default DashbordToLanding;
