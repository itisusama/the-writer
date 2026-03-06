import { useNavigate } from "react-router-dom";

export const useHomeHandlers = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/login");
  };

  return {
    handleEnter,
  };
};