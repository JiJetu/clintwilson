import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../page/Dashboard";
import Booking from "../page/Booking";
import Monitor from "../page/Monitor";
import Shuttle from "../page/Shuttle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
    },
    { path: "/login", element: <h1>Login</h1> },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "bookings",
                element: <Booking />,
            },
            {
                path: "fleet",
                element: <Monitor />,
            },
            {
                path: "shuttles",
                element: <Shuttle />,
            },
            {
                path: "routes",
                element: <h1 className="text-2xl font-bold text-white">Routes</h1>,
            },
            {
                path: "drivers",
                element: <h1 className="text-2xl font-bold text-white">Drivers</h1>,
            },
            {
                path: "users",
                element: <h1 className="text-2xl font-bold text-white">Users</h1>,
            },
            {
                path: "support",
                element: <h1 className="text-2xl font-bold text-white">Support & Help Desk</h1>,
            },
            {
                path: "feedback",
                element: <h1 className="text-2xl font-bold text-white">Feedback & Ratings</h1>,
            },
        ],
    },
]);

export default router;
