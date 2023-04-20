import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from "@mui/icons-material/Email";

const Contacts = () => {
    return (
        <div className="bg-lightergray w-auto flex items-center justify-center mx-auto" id="contact">
          <div className="flex flex-col items-start text-left w-2/8 mx-8 my-[6rem] max-md:w-[90%]">
            <h2 className="font-black text-lg text-blue-500 w-1/2 max-lg:text-center max-lg:mx-auto">CONTACT</h2>
            <h3 className="font-bold text-gray text-2xl mt-2 max-md:text-center max-md:justify-center">
              Get in touch with me! 👇
            </h3>

            {/* Circle with Icon */}
            <div className="flex flex-row mt-8">
                <div className="flex w-1/2">
                    <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                        <MapIcon style={{fontSize: 42, color: "#3b82f6", }}/>
                    </div>
                    <div className="mx-6 my-4 ">
                        <h2 className="text-gray font-bold text-lg">Location</h2>
                        <p className="text-lightgray font-medium text-medium whitespace-nowrap">Auckland, New Zealand</p>
                    </div>
                </div>

                <div className="flex w-1/2">
                    <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                        <EmailIcon style={{fontSize: 40, color: "#3b82f6", }}/>
                    </div>
                    <div className="mx-6 my-4">
                        <h2 className="text-gray font-bold text-lg">Email</h2>
                        <p className="text-lightgray font-medium text-medium whitespace-nowrap">imjohnnydong@gmail.com</p>
                    </div>
                </div>

                <div className="flex w-1/2">
                    <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                        <CallIcon style={{fontSize: 40, color: "#3b82f6", }}/>
                    </div>
                    <div className="mx-6 my-4">
                        <h2 className="text-gray font-bold text-lg">Phone</h2>
                        <p className="text-lightgray font-medium text-medium whitespace-nowrap">(+64) 022 650 2893</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      );
      
}

export default Contacts