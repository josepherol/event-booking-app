import CategoryAndSearch from "../../components/head/CategoryAndSearch";
import Featured from "../../components/head/Featured";
import FeedSection from "../../components/head/FeedSection";
import HomeLayout from "../../layout/homeLayout/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <CategoryAndSearch />
      <Featured />
      <FeedSection />
    </HomeLayout>
  );
};

export default Home;
