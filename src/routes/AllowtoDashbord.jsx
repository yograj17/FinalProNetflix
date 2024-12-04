import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllowtoDashbord = ({ check, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!check) {
      navigate("/login");
    }
  }, [check, navigate]);

  return check ? children : null;
};

export default AllowtoDashbord;
