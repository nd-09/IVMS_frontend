import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchDashboardStats } from "../api/productApi";
import StatCard from "../components/StatCard";
import { useNavigate } from "react-router-dom";
import { FcApproval,FcHighPriority, FcShop } from "react-icons/fc";
import { MdCurrencyRupee } from "react-icons/md";

const Dashboard = () => {
  const {user,role } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalProducts: 0,
    recentlyAdded: [],
    totalInventoryValuation: 0,
    lowStockProducts:[]
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const loadStats = async () => {
      try {
        console.log("USER?"+user);
        const data = await fetchDashboardStats();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch dashboard stats", err);
        setError("Unable to load stats. Please try again.");
      }
    };

    loadStats();
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* Navigation */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => navigate("/products")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          View Products
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Total Products" value={stats.totalProducts} description={"Total number of Products available"} icon={<FcShop />} />
        {role === "ADMIN_INVENTORY" && ( 
          <>
            <StatCard title="Inventory Valuation" value={stats.totalInventoryValuation} description={"Total valuation in Indian Rupees"} icon={<MdCurrencyRupee />} />
            <StatCard title="Recently Added Product" value={stats.recentlyAdded.name} description={"Price: "+stats.recentlyAdded.price} icon={<FcApproval/>}/>
            <StatCard title="Low Stock Alert!" value={stats?.lowStockProducts[0]?.name}description={"Quantity left: "+stats?.lowStockProducts[0]?.stockQuantity} icon={<FcHighPriority />} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
