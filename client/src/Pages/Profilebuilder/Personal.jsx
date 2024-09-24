import React   from 'react'


const Personal = ({ setCanProceed , onSubmit , handleSubmit , handleChange , formData }) => {
  
 
  
  const validateForm = () => {
    const allFilled = Object.values(formData).every((x) => {
      const value = String(x).trim(); // Convert all values to strings before calling .trim()
      return value !== '';
    });
    setCanProceed(allFilled);
  };
  
  
  React.useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <>
    <div>
  {/* Personal Information Section */}
  <form className="bg-white p-6 rounded shadow-lg"   onSubmit={handleSubmit(onSubmit)}>
    <h2 className="text-xl font-semibold mb-6">Personal Information:</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      {/* First name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          id="firstName"
        />
      </div>
      {/* _____________________________________________________________________________________________ */}
      {/* Last name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          id="lastName"
        />
      </div>
      {/* _________________________________________________________________________________________________ */}
      {/* DOB */}
      <div>
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="date"
          placeholder="yyyy-MM-dd"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          id="dob"
        />
      </div>
      {/* ________________________________________________________________________________________________ */}
      {/* Age */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Age
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          id="age"
          disabled
        />
      </div>
      {/* ________________________________________________________________________________________________ */}
      {/* Gender */}

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          id="gender"
        >
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Transgender</option>
        </select>
      </div>
      {/* _______________________________________________________________________________________________ */}

      {/* Martial Status */}
      <div>
        <label htmlFor="Marital Status" className="block text-sm font-medium text-gray-700">
        Marital Status
        </label>
        <select
          className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
          name="martialstatus"
          value={formData.martialstatus}
          onChange={handleChange}
          id="Marital Status"
        >
          <option>---Select---</option>
          <option>Single</option>
          <option>Married</option>
        </select>
      </div>
      {/* _____________________________________________________________________________________________ */}
      {/* Father's Name */}
      <div>
        <label htmlFor="Fathername" className="block text-sm font-medium text-gray-700">
          Father's Name
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="Father's name"
          name="fathername"
          value={formData.fathername}
          onChange={handleChange}
          id="Fathername"
        />
      </div>
      {/* ____________________________________________________________________________________________ */}
      {/* Religion */}
      <div>
        <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
          Religion
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="Religion"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
          id="religion"
        />
      </div>
      {/* ______________________________________________________________________________________ */}
      {/* Mobile */}
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
        Mobile Number
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="number"
          placeholder="+__-___-_______"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          id="mobile"
        />
        <p className='text-xs'>For example +92-311-1234567</p>
      </div>
      {/* _____________________________________________________________________________________ */}
      {/* Landline number */}
      <div>
        <label htmlFor="Land Line" className="block text-sm font-medium text-gray-700">
        Land Line
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="number"
          placeholder="+92-1111111111"
          name="landline"
          value={formData.landline}
          onChange={handleChange}
          id="Land Line"
        />
        <p className='text-xs'>For example +92-1111111111</p>
      </div>
      {/* ___________________________________________________________________________________ */}
      {/* Postal Adress */}
      <div>
        <label htmlFor="postaladdress" className="block text-sm font-medium text-gray-700">
        Postal Address
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="House#9, B block , Bahria town , Lahore"
          name="postaladdress"
          value={formData.postaladdress}
          onChange={handleChange}
          id="postaladdress"
        />
      </div>
      {/* ______________________________________________________________________________________ */}
      {/* Domicile */}
      <div>
        <label htmlFor="Domicile" className="block text-sm font-medium text-gray-700">
        Domicile
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="Domicile"
          name="domicile"
          value={formData.domicile}
          onChange={handleChange}
          id="Domicile"
        />
      </div>
      {/* _____________________________________________________________________________________________ */}
      {/* Residential Country */}
      <div>
        <label htmlFor="Residential Country" className="block text-sm font-medium text-gray-700">
        Residential Country
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="Pakistan"
          name="ResCountry"
          value={formData.ResCountry}
          onChange={handleChange}
          id="Residential Country"
        />
      </div>
      {/* ______________________________________________________________________________________________ */}
      {/*  Residential City */}
      <div>
        <label htmlFor="Residential City" className="block text-sm font-medium text-gray-700">
        Residential City
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="Lahore"
          name="ResCity"
          value={formData.ResCity}
          onChange={handleChange}
          id="Residential City"
        />
      </div>
      {/* ______________________________________________________________________________________________ */}
      {/* Nationality */}
      <div>
        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
        Nationality
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="Pakistani"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          id="nationality"
        />
      </div>
      {/* ______________________________________________________________________________________________ */}
      {/* CNIC */}
      <div>
        <label htmlFor="CNIC" className="block text-sm font-medium text-gray-700">
        CNIC
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="text"
          placeholder="35202-0000000-0"
          name="CNIC"
          value={formData.CNIC}
          onChange={handleChange}
          id="CNIC"
        />
      </div>
      {/* ______________________________________________________________________________________________ */}
      {/* CNIC Expiry */}
      <div>
        <label htmlFor="CNIC Expiry" className="block text-sm font-medium text-gray-700">
        CNIC Expiry
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="date"
          placeholder="35202-0000000-0"
          name="CNICexpiry"
          value={formData.CNICexpiry}
          onChange={handleChange}
          id="CNIC Expiry"
        />
      </div>
      {/* ____________________________________________________________________________________________ */}
      {/* Hafiz e Quran */}
      <div>
        <label htmlFor="Hafiz-e-Quran" className="block text-sm font-medium text-gray-700">
        Hafiz-e-Quran
        </label>
        <select
          className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
          name="hafizquran"
          value={formData.hafizquran}
          onChange={handleChange}
          id="Hafiz-e-Quran"
        >
          <option>---Select---</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      {/* ______________________________________________________________________________________________ */}
      {/* ExServiceOfficial */}
      <div>
        <label htmlFor="ExServiceOfficial" className="block text-sm font-medium text-gray-700">
        Ex-Service Official
        </label>
        <select
          className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
          name="ExServiceOfficial"
          value={formData.ExServiceOfficial}
          onChange={handleChange}
          id="ExServiceOfficial"
        >
          <option>---Select---</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      {/* ______________________________________________________________________________________________ */}
      {/* Government official */}
      <div>
        <label htmlFor="Government official" className="block text-sm font-medium text-gray-700">
        Government official
        </label>
        <select
          className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
          name="Governmentofficial"
          value={formData.Governmentofficial}
          onChange={handleChange}
          id="Government official"
        >
          <option>---Select---</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      {/* _________________________________________________________________________________________________ */}
      {/* Disabled */}
      <div>
        <label htmlFor="Are you Disabled " className="block text-sm font-medium text-gray-700">
        Are you Disabled 
        </label>
        <select
          className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
          name="Disabled"
          value={formData.Disabled}
          onChange={handleChange}
          id="Are you Disabled "
        >
          <option>---Select---</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      {/* _______________ */}
      
    </div>
    <div>
        <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
        Profil picture
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="file"
          name="profilePicture"
          onChange={handleChange}
          id="profilePicture"
          accept="image/png, image/jpeg"
        />
      </div>
  </form>
</div>


    </>
  )
}

export default Personal