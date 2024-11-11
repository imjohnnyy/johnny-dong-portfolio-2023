const About = () => {

  return (
    <div className="bg-white w-auto flex items-center justify-center mx-auto my-[6rem]" id="about">
      <div className="flex flex-col items-start text-left w-2/6  max-md:w-[90%]">
        <h2 className="w-1/2 text-lg font-black text-blue-500 max-lg:text-center max-lg:mx-auto">ABOUT ME</h2>
        <h3 className="mt-2 text-2xl font-bold text-gray max-md:text-center max-md:justify-center">
        Passionate about coding and fitness 👨‍💻🏋️‍♂️
        </h3>
        <p className="mt-5 text-lg font-semibold text-lightgray max-md:text-center">
        I’m a proficient developer with expertise in Azure integrations and full-stack development. Committed to continuous learning, I focus on delivering efficient, high-quality solutions while embracing new challenges and technologies.
        <br /><br />
        Outside of work, I’m passionate about fitness and weightlifting, constantly pushing myself to stay active. 
        </p>
      </div>
    </div>
  );
  
};

export default About;
