import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore.jsx";

const ProtectedRoute = () => {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
