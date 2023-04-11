import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className={"bg-gray flex items-center justify-between h-[130px]"}>
      <div className={"flex items-center mx-auto w-1/2"}>
        <p className={"text-white text-lg font-bold"}>
          {" "}
          Copyright &copy; 2023 Johnny Dong
        </p>
        <div className={"ml-[500px] float-right"}>
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
