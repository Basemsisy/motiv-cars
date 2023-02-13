import AdvertiseCard from "src/components/atoms/AdvertiseCard";
import FeaturedCard from "src/components/atoms/FeaturedCard";
import StatisticsCard from "src/components/atoms/StatisticsCard";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <section className="statistics-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        <StatisticsCard title="energy" color="#A162F7" percentage={20} />
        <StatisticsCard title="range" color="#FF7E86" percentage={40} />
        <StatisticsCard title="break fluid" color="#A162F7" percentage={60} />
        <StatisticsCard title="tire wear" color="#F6CC0D" percentage={90} />
      </section>
      <section className="grid gap-5 mt-[30px]">
        <AdvertiseCard
          color="#0F2837"
          label="badges!"
          countColor="#FF9619"
          count={20}
          text="Hooray! Way to go Mohammed!"
          img="ads2"
        />
        <AdvertiseCard
          color="#6E1946"
          label="points!"
          countColor="#FAC39B"
          count={1500}
          text="Redeem and claim your rewards!"
          img="ads3"
        />
      </section>
      <section className="featured-row mt-[46px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        <FeaturedCard
          percentage={20}
          name="Mini Cooper"
          count={122}
          rate={"20"}
          color="#E1DFA4"
        />
        <FeaturedCard
          percentage={20}
          name="Mini Cooper"
          count={122}
          rate={"20"}
        />
        <FeaturedCard
          percentage={20}
          name="Mini Cooper"
          count={122}
          rate={"20"}
        />
      </section>
    </div>
  );
};

export default Dashboard;
