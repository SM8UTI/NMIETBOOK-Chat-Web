import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const user = useSelector((state) => state.Main.user);
  return user ? children : <Navigate to={"/login"} />;
};

export default PrivateRouter;
