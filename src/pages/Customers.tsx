import AdminSidebar from "../components/AdminSidebar";
import CustomerTable from "../components/CustomerTable";

const Customers = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main>
        <CustomerTable />
      </main>
    </div>
  );
};

export default Customers;
