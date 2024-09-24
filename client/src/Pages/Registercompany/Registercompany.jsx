import React from "react";
import { useForm } from "react-hook-form";
import { URL_API } from "../../components/API";

const Registercompany = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/company/companies-register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        if (res.ok) { // Check if status code is in the 200-299 range
            return res.json().then(result => {
                alert(result.message); // Assuming message contains success information
                reset(); // Reset form fields
            });
        } else {
            // If the response is not ok, we assume it's a failure
            return res.json().then(result => {
                throw new Error("Failed to register company: " + result.message);
            });
        }
    })
    .catch(error => {
        console.error("Error registering company:", error);
        alert(error.message); // Now alerts the actual error message thrown above
    });
};


  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-4 mb-5 ">
      <h3 className="text-3xl font-bold my-8 text-center text-blue">
      Register Your Company
      </h3>
      {/* form */}
      {/* <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">         */}
      <div className="createJobBg py-10 px-4 lg:px-16 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft, Google, etc"
                {...register("name")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">NTN</label>
              <input
                type="text"
                placeholder="000000-0"
                {...register("ntnnumber")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* second row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Email</label>
              <input
                type="text"
                placeholder="Ex: youremail@google.com"
                {...register("email")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Person in contact</label>
              <input
                type="text"
                placeholder="0333-0000000"
                {...register("personincontact")}
                className="create-job-input"
              />
            </div>
          </div>
            {/* third row */}
            <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">CNIC</label>
              <input
                type="text"
                placeholder="35202-0000000-1"
                {...register("cnic")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Password</label>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* four row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">City</label>
              <input
                type="text"
                placeholder="Ex: Lahore, Multan, etc"
                {...register("city")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Website</label>
              <input
                type="text"
                placeholder="EX: https://www.google.com/"
                {...register("website")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Fifth row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Facebook</label>
              <input
                type="text"
                placeholder="Facebook Page Link"
                {...register("facebook")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Linkedin</label>
              <input
                type="text"
                placeholder="Linkedin Page Link"
                {...register("linkedin")}
                className="create-job-input"
              />
            </div>
          </div>
        
          <div className="flex justify-center">
          <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-md cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registercompany;
