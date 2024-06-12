import AdminSidebar from "../components/AdminSidebar";
import TransactionTable from "../components/TransactionTable";

const Transaction = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main>
        <TransactionTable />
      </main>
    </div>
  );
};

export default Transaction;
