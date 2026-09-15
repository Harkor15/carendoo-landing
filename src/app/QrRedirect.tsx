import { Navigate, useLocation } from "react-router-dom";

export default function QrRedirect() {
  const location = useLocation();
  return <Navigate to={{ pathname: "/", search: location.search, hash: location.hash }} replace />;
}
