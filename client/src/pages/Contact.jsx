import React from 'react'
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


export default function Contact() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
   




});








const handleInput = (e) => {
  console.log(e);
  let name = e.target.name;
  let value = e.target.value;
  setContact({
    ...contact,
    [name]: value,  //dynamic value of name

});
 
};

//handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();
  toast.success("Your Message Is Sent Successfully");

  try {
      const response = await fetch(`http://localhost:5000/api/data/contact`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
      });
      if(response.ok){
          const res_data = await response.json();
          console.log("res from server", res_data);
          // storeTokenInLs(res_data.token);
          // localStorage.setItem("token", res_data.token);
          setContact({ name: "", email: "", message: "" });
          <Navigate to = "/" />;
      }
      console.log(response);
  } catch (error) {
      console.log("contact", error);
  }
};













  return (
    <div>
     
  <Navbar></Navbar>

<div className="flex min-h-screen items-center justify-start bg-white">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl font-medium">Contact us</h1>
    <p className="mt-3">Email us at help@domain.com or message us here:</p>

    <form action="#" onSubmit={handleSubmit} className="mt-10">
    
   

      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" value={contact.name} onChange={handleInput} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" value={contact.email} onChange={handleInput} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" value={contact.message} onChange={handleInput} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
    </form>
  </div>
</div>
    </div>
  )
}
