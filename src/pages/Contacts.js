import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from "@mui/icons-material/Email";

const Contacts = () => {
    return (
        <div className="flex items-center justify-center w-auto mx-auto bg-lightergray" id="contact">
          <div className="flex flex-col items-start text-left w-2/8 mx-8 my-[6rem] max-lg:w-[90%]">
            <h2 className="w-1/2 text-lg font-black text-blue-500 max-lg:text-center max-lg:mx-auto">CONTACT</h2>
            <h3 className="mt-2 text-2xl font-bold text-gray max-lg:justify-center max-lg:text-center max-lg:mx-auto">
              Get in touch with me! 👇
            </h3>

            {/* Circle with Icon */}
            <div className="flex flex-row mt-12 max-md:flex-col max-lg:items-center max-lg:justify-center max-lg:mx-auto">
                <div className="flex w-1/2 max-lg:flex-col max-lg:items-center">
                    <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_0px_10px_rgba(0,0,0,0.12)]">
                        <MapIcon style={{fontSize: 42, color: "#3b82f6", }}/>
                    </div>
                    <div className="mx-6 my-4 ">
                        <h2 className="text-lg font-bold text-gray max-lg:text-center max-lg:mx-auto">Location</h2>
                        <p className="font-medium text-lightgray text-medium whitespace-nowrap max-lg:text-center max-lg:mx-auto max-lg:mb-10">Auckland, New Zealand</p>
                    </div>
                </div>

                <div className="flex w-1/2 max-lg:flex-col max-lg:items-center">
                    <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_0px_10px_rgba(0,0,0,0.12)]">
                        <EmailIcon style={{fontSize: 40, color: "#3b82f6", }}/>
                    </div>
                    <div className="mx-6 my-4">
                        <h2 className="text-lg font-bold text-gray max-lg:text-center max-lg:mx-auto">Email</h2>
                        <p onClick={() => (window.location = "mailto:imjohnnydong@gmail.com")}
                           className="font-medium cursor-pointer text-lightgray text-medium whitespace-nowrap max-lg:text-center max-lg:mx-auto max-lg:mb-10 hover:text-sky-500">imjohnnydong@gmail.com</p>
                    </div>
                </div>

                <div className="flex w-1/2 max-lg:flex-col max-lg:items-center">
                    <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_0px_10px_rgba(0,0,0,0.12)]">
                        <CallIcon style={{fontSize: 40, color: "#3b82f6", }}/>
                    </div>
                    <div className="mx-6 my-4">
                        <h2 className="text-lg font-bold text-gray max-lg:text-center max-lg:mx-auto">Phone</h2>
                        <p className="font-medium text-lightgray text-medium whitespace-nowrap max-lg:content-center max-lg:mx-auto max-lg:mb-10">(+64) 022 650 2893</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      );
      
}

export default Contacts