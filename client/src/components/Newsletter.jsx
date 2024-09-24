import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
            I have uploaded my detailed resume, please notify me latest jobs related to my skills.
        </p>
            <div className="w-full space-y-4">
                <input type="email" name="email" id="email" placeholder="name@pnygroup.com" className="bg-slate-300 w-full block py-2 pl-3 border focus:outline-none" />
                <input type="submit" value="Subscribe Jobs" className="bg-blue text-white w-full block py-2 pl-3 border " />
            </div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get notify Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
            I have uploaded my detailed resume, please notify me latest jobs related to my skills.
        </p>
            <div className="w-full space-y-4">
                {/* <input type="email" name="email" id="email" placeholder="name@pnygroup.com" className="bg-slate-300 w-full block py-2 pl-3 border focus:outline-none" /> */}
                <input type="submit" value="Upload your Resume" className="bg-blue text-white w-full block py-2 pl-3 border " />
            </div>
      </div>
    </div>
  );
};

export default Newsletter;
