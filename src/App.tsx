import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SuspenseWrapper from "./components/SuspenseWrapper";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

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
  {
    path: "admin/chart/bar",
    element: (
      <SuspenseWrapper>
        <BarCharts />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/chart/pie",
    element: (
      <SuspenseWrapper>
        <PieCharts />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/chart/line",
    element: (
      <SuspenseWrapper>
        <LineCharts />
      </SuspenseWrapper>
    ),
  },
  // Apps

  // management
  {
    path: "admin/product/new",
    element: (
      <SuspenseWrapper>
        <NewProduct />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/product/:id",
    element: (
      <SuspenseWrapper>
        <ProductManagement />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/transaction/:id",
    element: (
      <SuspenseWrapper>
        <TransactionManagement />
      </SuspenseWrapper>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
