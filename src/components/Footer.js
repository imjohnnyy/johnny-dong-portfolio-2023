import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";


const Footer = () => {
    return (
        <div className={"bg-gray"}>
        <div className="flex items-center justify-center  mx-auto w-3/6">
          <div>
            <GitHubIcon
              onClick={() => window.open('https://github.com/imjohnnyy', '_blank')}
              style={{
                fontSize: 58,
                color: "white",
                margin: 20,
                cursor: "pointer",
              }}
            />
            <LinkedInIcon
              onClick={() => window.open('https://nz.linkedin.com/in/johnny-dong-', '_blank')}
              style={{
                fontSize: 60,
                color: "white",
                margin: 20,
                cursor: "pointer",
              }}
            />
            <EmailIcon
              onClick={() => window.location = 'mailto:imjohnnydong@gmail.com'}
              style={{
                fontSize: 60,
                color: "white",
                margin: 20,
                cursor: "pointer",
              }}
            />
          </div>
          <p className={"text-white text-lg font-bold"}> Copyright &copy; 2022 Johnny Dong</p>
        </div>
        </div>
      );
}
export default Footer