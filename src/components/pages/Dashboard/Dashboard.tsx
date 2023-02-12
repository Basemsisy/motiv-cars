import StatisticsCard from "src/components/atoms/StatisticsCard";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="statistics-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        <StatisticsCard title="energy" color="#A162F7" percentage={20} />
        <StatisticsCard title="range" color="#FF7E86" percentage={40} />
        <StatisticsCard title="break fluid" color="#A162F7" percentage={60} />
        <StatisticsCard title="tire wear" color="#F6CC0D" percentage={90} />
      </div>
    </div>
  );
};

export default Dashboard;
