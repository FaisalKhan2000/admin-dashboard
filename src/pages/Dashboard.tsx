import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="dashboard">
        {/* searchBar */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />

          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        {/* section */}
        <section className="widget-container">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,155,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>

        {/* graph container */}
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Graph here */}
          </div>

          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div></div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
          rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
