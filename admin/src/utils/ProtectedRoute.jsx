import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ()=>{
    const user = null;
    return (
        user ? <outlet/> : <Navigate to="/auth" replace />
    )
}

export default ProtectedRoute;