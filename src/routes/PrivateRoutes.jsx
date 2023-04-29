import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("user in private route", user);
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoutes;

/**
 * -------------------
 * STEPS
 * -------------------
 * 1. Check user is logged in or not.
 * 2. If user is logged in, then allow them to visit the route
 * 3. Else Redirect The user to the login Page.
 * 4. Setup the private router
 * 5. Handle Loading.
 */
