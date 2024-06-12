import { useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const TransactionManagement = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="management-container">hello</main>
    </div>
  );
};

export default TransactionManagement;
