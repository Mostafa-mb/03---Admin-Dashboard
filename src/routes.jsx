import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home/Page";
import Products from "./pages/Products/Page";
import Users from "./pages/Users/Page";
import Tickets from "./pages/Tickets/page";
import TicketDetails from "./pages/TicketDetails/Page";
import Comments from "./pages/Comments/Page";
import clsx from "clsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className={clsx("text-center","p-4","bg-gray-100","min-h-screen")}>
        Application Layout
        <Outlet></Outlet>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "tickets",
        element:<Tickets></Tickets>
      },
      {
        path: "tickets/:ticketId",
        element:<TicketDetails></TicketDetails>
      },
      {
        path: "comments",
        element:<Comments></Comments>
      },
    ],
  },
]);

export default router;
