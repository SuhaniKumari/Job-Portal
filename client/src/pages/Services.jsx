import React from 'react'
import { useAuth } from '../store/auth'
import Navbar from '../components/Navbar';
export default function Services() {
  const { services } = useAuth();
  if (!Array.isArray(services)) {
    return <div>No services available</div>;
  }

  return (
    
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-2 gap-4">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div className="bg-white rounded shadow-md p-4" key={index}>
              <div className="cardimg">
              <img className=" flex justify-between w-8 h-8 mr-2" src="./images/mern.jpeg" alt="logo" />
              </div>
              <div className="flex justify-between mb-4">
              <p className="text-gray-600">{provider}</p>
              <p className="text-gray-600">{price}</p>
            </div>
            <h2 className="text-xl font-bold mb-2">{service}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
           
         
      );
      })}
 </div>
    </div>
  );
};
