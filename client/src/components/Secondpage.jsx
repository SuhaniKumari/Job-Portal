import React from 'react'

export default function Secondpage() {
  return (
    <div className="w-full">

      {/* FULL WIDTH GREEN BAR */}
      <div className="bg-teal-500 hover:bg-emerald-600 w-full rounded-lg">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-center">
          <span className="text-white text-2xl sm:text-3xl font-bold">
            Our Top Companies
          </span>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 py-2">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/ibm.png" alt="IBM" />
          </div>

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/intel.png" alt="Intel" />
          </div>

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/kik.png" alt="Kik" />
          </div>

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/google.png" alt="Google" />
          </div>

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/microsoft.png" alt="Microsoft" />
          </div>

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/mcdonalds.png" alt="McDonalds" />
          </div>

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/samsung.png" alt="Samsung" />
          </div>

          <div className="group flex justify-center hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img className="w-24 sm:w-28 animate-bounce" src="./images/shopping.png" alt="Shopping" />
          </div>

        </div>
      </div>
    </div>
  )
}
