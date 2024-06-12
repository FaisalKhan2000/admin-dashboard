import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const PieCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div></div>
          <h2>Top Selling Products & Top Customers</h2>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
