import Feed from "./Feed.jsx";

const FeedSection = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 py-8">
      <Feed eventUrl={"/details/222"} />
      <Feed eventUrl={"/details/222"} />
      <Feed eventUrl={"/details/222"} />
      <Feed eventUrl={"/details/222"} />
      <Feed eventUrl={"/details/222"} />
      <Feed eventUrl={"/details/222"} />
      <Feed eventUrl={"/details/222"} />
    </div>
  );
};

export default FeedSection;
