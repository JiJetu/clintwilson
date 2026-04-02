import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../page/Dashboard";
import Booking from "../page/Booking";
import Monitor from "../page/Monitor";
import Shuttle from "../page/Shuttle";
import Schedules from "../page/Schedules";
import Driver from "../page/Driver";
import UserManagement from "../page/UserManagement";

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
                element: <Schedules />,
            },
            {
                path: "drivers",
                element: <Driver />,
            },
            {
                path: "users",
                element: <UserManagement />,
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
