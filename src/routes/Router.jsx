import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import AddSchedule from "../pages/AddSchedule/AddSchedule";
import AllSchedule from "../pages/AllSchedule/AllSchedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addSchedule",
        element: <AddSchedule></AddSchedule>
      },
      {
        path: "/allSchedule",
        element: <AllSchedule></AllSchedule>
      }
    ]
  },
]);

export default router;