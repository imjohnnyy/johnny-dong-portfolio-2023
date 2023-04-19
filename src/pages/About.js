const About = () => {
  return (
    <div className="bg-white w-auto flex items-center justify-center mx-auto my-[8rem]">
      <div className="flex flex-col items-start text-left w-2/6  max-md:w-[90%]">
        <h2 className="font-black text-lg text-blue-500 w-1/2 max-lg:text-center max-lg:mx-auto">ABOUT ME</h2>
        <h3 className="font-bold text-2xl mt-2 max-md:text-center max-md:justify-center">
          A recent Computer Science and Software Development Graduate 🎓
        </h3>
        <p className="font-semibold text-lg text-lightgray mt-5 max-md:text-center">
        As an aspiring Software Engineer, I'm passionate about developing software solutions that solve complex problems.
        I possess an impressive arsenal of skills in Full-Stack web and mobile application development. 
        Furthermore, I am familiar with Agile Scrum methodology and have experience working in Agile Scrum teams.
        </p>
      </div>
    </div>
  );
};

export default About;
