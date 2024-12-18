

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SendEmail = () => {

   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     pincode: "",
     description: "",
   });
   const [formError, setFormError] = useState("");
   const [formSuccess, setFormSuccess] = useState("");
  
 
   const handleDialogToggle = () => {
     setIsDialogOpen(!isDialogOpen);
     setFormError("");
     setFormSuccess("");
     setFormData({
       name: "",
       email: "",
       phone: "",
       pincode: "",
       description: "",
     });
   };
 
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     setFormError("");
     setFormSuccess("");
 
     try {
       const response = await fetch("/api/email/sendEmail", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });
 
       if (!response.ok) {
         const errorData = await response.json();
         setFormError(errorData.error || "An error occurred. Please try again.");
         return;
       }
 
       setFormSuccess("Email sent successfully!");
       setTimeout(() => {
         handleDialogToggle();
       }, 2000); // Auto close dialog after success
     } catch (error) {
       setFormError("An error occurred while sending the email.");
       console.error("Error sending email:", error);
     }
   };

  return (

    <div>
        <div className="flex items-center space-x-4 rounded-xl p-2 bg-green-500">
           
           
           <button onClick={handleDialogToggle}>
            Get Quote
           </button>
          </div>

        {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500"
          onClick={handleDialogToggle}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Free Estimate Form
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008489]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008489]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008489]"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode & Location"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008489]"
              />
              <textarea
                name="description"
                placeholder="Property Description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#008489]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#008489] text-white py-2 px-4 rounded-md hover:bg-[#006970] transition duration-300"
              >
                Submit
              </button>
            </form>
            {formError && (
              <p className="text-red-500 text-sm mt-4">{formError}</p>
            )}
            {formSuccess && (
              <p className="text-green-500 text-sm mt-4">{formSuccess}</p>
            )}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={handleDialogToggle}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SendEmail