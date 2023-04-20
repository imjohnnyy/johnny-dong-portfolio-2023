import MapIcon from '@mui/icons-material/Map';


const Contacts = () => {
    return (
        <div className="bg-lightergray w-auto flex items-center justify-center mx-auto" id="contact">
          <div className="flex flex-col items-start text-left w-2/6  my-[6rem] max-md:w-[90%]">
            <h2 className="font-black text-lg text-blue-500 w-1/2 max-lg:text-center max-lg:mx-auto">CONTACT</h2>
            <h3 className="font-bold text-gray text-2xl mt-2 max-md:text-center max-md:justify-center">
              Get in touch with me! 👇
            </h3>
            {/* Circle with Icon */}
            <div className="flex w-1/2 mt-5">
                <div class="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                    <MapIcon style={{fontSize: 40, color: "#3b82f6", }}/>
                </div>
                <div>
                    <h2 className="text-gray font-bold text-lg">Location</h2>
                    <h2 className="text-gray font-bold text-lg">Auckland, New Zealand</h2>
                </div>
            </div>
          </div>
        </div>
      );
      
}

export default Contacts