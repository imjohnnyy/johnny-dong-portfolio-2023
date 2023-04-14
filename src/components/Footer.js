import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className={"bg-gray flex items-center justify-between max-md:py-0 py-5 "}>
      <div className={"flex items-center mx-auto max-lg:flex-col max-lg:w-2/3 max-lg:mt-auto"}>
        <p className={"text-white text-lg font-bold max-sm:mt-[3rem]"}>

          Copyright &copy; 2023 Johnny Dong
        </p>
        <div className={"lg:ml-[500px] max-lg:flex max-lg:items-center max-lg:justify-center max-lg:h-8 max-lg:mt-8 max-lg:mb-10"}>
          <LinkedInIcon
            onClick={() =>
              window.open("https://nz.linkedin.com/in/johnny-dong-", "_blank")
            }
            style={{
              fontSize: 40,
              color: "white",
              margin: 15,
              marginLeft: -5,
              marginTop: 26,
              cursor: "pointer",
            }}
            className={"scale-75 hover:scale-100 ease-in duration-500"}
          />
          <GitHubIcon
            onClick={() =>
              window.open("https://github.com/imjohnnyy", "_blank")
            }
            style={{
              fontSize: 36,
              color: "white",
              margin: 15,
              marginLeft: -10,
              marginTop: 26,
              cursor: "pointer",
            }}
            className={"scale-75 hover:scale-100 ease-in duration-500"}
          />
          <EmailIcon
            onClick={() => (window.location = "mailto:imjohnnydong@gmail.com")}
            style={{
              fontSize: 43,
              color: "white",
              margin: 15,
              marginLeft: -10,
              marginTop: 27,
              cursor: "pointer",
            }}
            className={"scale-75 hover:scale-100 ease-in duration-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
