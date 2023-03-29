import WavingEmoji from "../assets/images/WavingEmoji.png";

const Home = () => {
  const flexBetween = "flex items-center";

  return (
    <div className={`mx-auto w-3/6 items-center justify-center`}>
      <div className={"flex item-start mt-40 text-5xl font-bold"}>
        <h1 className={"text-gray"}>Aspiring Software Engineer</h1>
        <img className={"ml-5"} src={WavingEmoji} alt="Waving"></img>
      </div>
      <p className={"flex item-start mt-5 text-gray"}>
        Hi, I'm Johnny Dong. An aspiring Software Engineer based in Auckland,
        New Zealand.
      </p>
    </div>
  );
};

export default Home;
