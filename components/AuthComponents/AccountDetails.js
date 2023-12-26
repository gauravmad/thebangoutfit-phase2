import React, { use, useState } from "react";
import { toast } from "react-hot-toast";

export default function AccountDetails() {

  const [formData, setFormData] = useState({

    userprofilepic:"",
    firstname:"",
    lastname:"",
    mobilenumber:"",
    alternatemailid:"",
    streetaddress:"",
    zipcode:"",
    city:"",
    state:"",
    country:"",

  })
    
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const {name,value}= e.target;
    setFormData({
        ...formData,
        [name]:value
    })
  }

  const handleSaveDetails = async () => {

    const isFormEmpty= Object.values(formData).some(value=>value==="");
    if(isFormEmpty){
      console.log("Form is Empty. Please fill in all the details");
      toast.error("Please Fill all the details.");
      return;
    }

    try {
      console.log('Form Data:', formData); 
  
      const response = await fetch('./api/saveAccountDetails', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        console.log("User details saved successfully");
        toast.success('User details saved successfully');
        setFormData({ 
          userprofilepic:"",
          firstname:"",
          lastname:"",
          mobilenumber:"",
          alternatemailid:"",
          streetaddress:"",
          zipcode:"",
          city:"",
          state:"",
          country:"",
        });

        setSubmitted(true);
        
      } else {
        console.error("Failed to save user details");
        toast.error('Failed to save user details');
      }

    } catch (error) {
      console.error("Error saving user details:", error)
      toast.error('Failed to save user details');
    }

  }
  
  return (
    <div className="my-[5vh] font-sans w-[50vw] border-gray-100 shadow-xl border-[1px] flex ">

      <div className="w-full px-[8vh] py-[5vh] mx-auto">
      <h2 className="text-[3vh]  font-semibold">
        Account Details
      </h2>

        <div className="">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="Enter First Name"
          />
        </div>

        <div>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="Enter Last Name"
          />
        </div>

        <div>
          <input
            type="number"
            maxLength={10}
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="Enter Mobile Number"
          />
        </div>

        <div>
          <input
            type="email"
            name="alternatemailid"
            value={formData.alternatemailid}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="Alternate Email (Optional)"
          />
        </div>

        <h2 className="text-[3vh] font-medium my-[2vh]">Billing Address</h2>

        <div >
          <input
            type="text"
            name="streetaddress"
            value={formData.streetaddress}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="Flat No./Street Address"
          />
        </div>

        <div>
          <input
            type="number"
            maxLength={6}
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="Zip Code"
          />
        </div>

        <div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="City"
          />
        </div>

        <div>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="State"
          />
        </div>

        <div>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="bg-gray-100 w-full p-[1vh] border-2 border-gray-400 my-[1vh]"
            placeholder="Country"
          />
        </div>

        <button  
            onClick={handleSaveDetails}
            className="bg-purple-700 w-[20vw] rounded-lg  mx-auto my-[1vh] px-[2vh] py-[1vh] font-medium text-white text-[2.5vh]">
          Save
        </button>

      </div>

    </div>

  );
}