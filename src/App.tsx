import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SuspenseWrapper from "./components/SuspenseWrapper";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));

const router = createBrowserRouter([
  {
    path: "/admin/dashboard",
    element: (
      <SuspenseWrapper>
        <Dashboard />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/admin/product",
    element: (
      <SuspenseWrapper>
        <Products />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/admin/transaction",
    element: (
      <SuspenseWrapper>
        <Transaction />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/admin/customer",
    element: (
      <SuspenseWrapper>
        <Customers />
      </SuspenseWrapper>
    ),
  },

  // Charts

  // Apps
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
