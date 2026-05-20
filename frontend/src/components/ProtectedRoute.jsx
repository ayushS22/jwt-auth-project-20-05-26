import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  user,
  allowedRoles
}) => {

  // User Not Logged In

  if(!user){

    return <Navigate to="/login" />;
  }

  // Role Not Allowed

  if(
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ){

    return <Navigate to="/" />;
  }

  // Authorized

  return children;
};

export default ProtectedRoute;