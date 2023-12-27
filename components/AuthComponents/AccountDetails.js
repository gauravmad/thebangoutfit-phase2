import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function AccountDetails() {
  const [formData, setFormData] = useState({
    userprofilepic: "",
    firstname: "",
    lastname: "",
    mobilenumber: "",
    emailid: "",
    streetaddress: "",
    zipcode: "",
    city: "",
    state: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveDetails = async () => {
    try {
      const response = await fetch("./api/saveAccountDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User details saved successfully");
        toast.success("User details saved successfully");
      } else {
        console.error("Failed to save user details");
        toast.error("Failed to save user details");
      }
    } catch (error) {
      console.error("Error saving user details:", error);
      toast.error("Failed to save user details");
    }
  };

  return (
    <div className="md:my-[8vh]  font-sans w-full md:w-[55vw] border-gray-100 shadow-xl border-[1px] flex ">
      <div className="w-full px-[8vh]  mx-auto h-[60vh] overflow-y-scroll ">
        <div className="my-[8vh]">
          <h2 className="text-[3vh] mb-[3vh] font-semibold">Account Details</h2>
          <div >
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
              placeholder="Enter First Name"
            />
          </div>

          <div>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
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
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
              placeholder="Enter Mobile Number"
            />
          </div>

          <div>
            <input
              type="email"
              name="emailid"
              value={formData.emailid}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
              placeholder="Alternate Email (Optional)"
            />
          </div>
        </div>

        <div className="my-[8vh]">
          <h2 className="text-[3vh] mb-[3vh]  font-medium ">Billing Address</h2>

          <div>
            <input
              type="text"
              name="streetaddress"
              value={formData.streetaddress}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
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
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
              placeholder="Zip Code"
            />
          </div>

          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
              placeholder="City"
            />
          </div>

          <div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
              placeholder="State"
            />
          </div>

          <div>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="bg-gray-100 w-full p-[1vh] rounded-lg border-2 border-gray-300 my-[1vh]"
              placeholder="Country"
            />
          </div>

          <button
            onClick={handleSaveDetails}
            className="bg-purple-700 w-[20vw] rounded-lg  mx-auto my-[1vh] px-[2vh] py-[1vh] font-medium text-white text-[2.5vh]"
          >
            Save
          </button>

        </div>
      </div>
    </div>
  );
}
