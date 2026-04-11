import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../page/Dashboard";
import Booking from "../page/Booking";
import Monitor from "../page/Monitor";
import Shuttle from "../page/Shuttle";
import Schedules from "../page/Schedules";
import Driver from "../page/Driver";
import DriverDetails from "../page/DriverDetails";
import UserManagement from "../page/UserManagement";
import Support from "../page/Support";
import Feedback from "../page/Feedback";
import Login from "../page/auth/Login";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    { path: "/login", element: <Login /> },
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
                path: "drivers/:id",
                element: <DriverDetails />,
            },
            {
                path: "users",
                element: <UserManagement />,
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "feedback",
                element: <Feedback />,
            },
        ],
    },
]);

export default router;
