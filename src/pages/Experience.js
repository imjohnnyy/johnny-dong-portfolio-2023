import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-auto h-[400px] mx-auto bg-lightergray"
      id="experience"
    >
      <div className="flex flex-col items-start text-left w-2/6  max-md:w-[90%]">
        <h2 className="w-1/2 text-lg font-black text-blue-500 max-lg:text-center max-lg:mx-auto">
          EXPERIENCE
        </h2>
        <h3 className="mt-2 text-2xl font-bold text-gray max-lg:justify-center max-lg:text-center max-lg:mx-auto">
          My Work Experience 💼
        </h3>
       <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
