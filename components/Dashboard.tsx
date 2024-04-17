import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";

const Dashboard: React.FC = () => {
 
  return (
    <div className="mt-5">
        <h1>Dashboard</h1>
        <div className="flex flex-row justify-around align-middle mt-10">
          <BarChart/>
          <PieChart/>
        </div>
    </div>
  );
}

export default Dashboard;