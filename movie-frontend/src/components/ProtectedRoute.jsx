import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, loggedIn }) {
  if (!loggedIn) {
    return <Navigate to="sign-in" replace />;
  }

  return children;
}

export default ProtectedRoute;
