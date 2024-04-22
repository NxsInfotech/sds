import React, { useState } from "react";
import "../Css/Home.css";
import { FaCheckCircle } from "react-icons/fa";
const Home = () => {
  const [formData, setFormData] = useState({
    "your-name": "",
    "your-email": "",
    "your-subject": "",
    "number-783": "",
    "your-message": "",
    showNotification: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      body: new FormData(e.target),
    };

    try {
      const response = await fetch(
        "https://server.icloth.io/wp-json/contact-form-7/v1/contact-forms/18/feedback",
        reqOptions
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({
          "your-name": "",
          "your-email": "",
          "your-subject": "",
          "number-783": "",
          "your-message": "",
          showNotification: true,
        });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log("An error occurred. Please try again later.");
    }
  };
  return (
    <main className="bg-[#059ad4] h-auto w-full ">
      <section className="w-[70%] max-w-[1605px] mx-auto ">
        <div className="text-white text-center pt-28  ">
          <h1 className="text-4xl font-semibold ">Get an iCloth SDS</h1>
          <p className="pt-4">
            Please fill the form below and download the SDS for our iCloth
            products.
          </p>
        </div>

        <form className="pb-28 " onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-white text-sm font-bold mb-2 "
              htmlFor="fullname"
            >
              * Full Name
            </label>
            <input
              className="shadow  appearance-none bg-transparent border text-white  w-full py-2  px-3   leading-7 focus:outline-none focus:shadow-outline "
              id="your-name"
              name="your-name"
              value={formData["your-name"]}
              type="text"
              placeholder=""
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="pt-4">
            <label
              className="block text-white text-sm font-bold mb-2 "
              htmlFor="phone"
            >
              * Phone No.
            </label>
            <input
              className="shadow appearance-none bg-transparent border text-white  w-full py-2  px-3   leading-7 focus:outline-none focus:shadow-outline "
              id="number-783"
              name="number-783"
              value={formData["number-783"]}
              type="number"
              placeholder=""
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="pt-4">
            <label
              className="block text-white text-sm font-bold mb-2 "
              htmlFor="email"
            >
              * Email
            </label>
            <input
              className="shadow appearance-none bg-transparent border text-white  w-full py-2  px-3   leading-7 focus:outline-none focus:shadow-outline "
              id="your-email"
              name="your-email"
              value={formData["your-email"]}
              type="email"
              placeholder=""
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="pt-4">
            <label
              className="block text-white text-sm font-bold mb-2 "
              htmlFor="companyname"
            >
              * Company Name
            </label>
            <input
              className="shadow appearance-none bg-transparent border text-white  w-full py-2  px-3   leading-7 focus:outline-none focus:shadow-outline "
              id="your-subject"
              name="your-subject"
              value={formData["your-subject"]}
              type="text"
              placeholder=""
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="pt-4">
            <label
              className="block text-white text-sm font-bold mb-2 "
              htmlFor="product"
            >
              * Product Usage / Intended Use
            </label>
            <textarea
              className="shadow appearance-none bg-transparent border text-white  w-full py-2  px-3   leading-7 focus:outline-none focus:shadow-outline "
              rows="4"
              name="your-message"
              value={formData["your-message"]}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center  mt-4">
            <button
              className="py-2 px-8 text-xl text-[#059ad4] font-semibold  bg-white"
              type="submit"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </section>
      {formData.showNotification && (
        <div className="notification fixed w-max left-0 right-0 bottom-6 mx-auto border rounded-md bg-gray-800 text-green-400 shadow-lg transform transition duration-300 opacity-0 invisible animate-fade-in">
          <div className="notification__body flex items-center py-4 px-2">
            <FaCheckCircle />
            Your account has been created! &#128640;
          </div>
          <div className="notification__progress absolute left-1/2 bottom-1 w-full h-1 bg-gradient-to-r from-gray-800 to-green-400 transform -translate-x-1/2 animate-progress"></div>
        </div>
      )}
    </main>
  );
};

export default Home;
