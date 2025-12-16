import React from 'react'        //rfc - shortcut
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Secondpage from '../components/Secondpage'
import Jobs from '../components/Jobs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Team from '../components/Team'

export default function Home() {
  return (
    <div className='w-full'>
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row md:flex-wrap p-4 md:p-8 border-solid border-teal-400">
        <div className="md:w-1/2 flex justify-center items-center p-16">
          <div className="text-center">
            <h1 className=" mx-5 text-black text-5xl md:text-6xl font-bold mb-4">Let's Search Jobs with Us</h1>
            <Search />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img className="sm:w-48 lg:w-80 xl:w-96 md:w-64 h-auto rounded-full border-slate-950" src="./images/faqs.png" alt="Background Image" />
        </div>
      </div>

      <section className="py-16">
        <Secondpage></Secondpage>
      </section>



      <section className="py-20 min-h-[70vh]">
       <Jobs></Jobs>
      </section>

      <section className="p-8 bg-gray-100">
   
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Our Job Portal</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        </div>
      </section>

      
<section className="">

<Testimonials></Testimonials>


</section>

<section>
  <Team></Team>
</section>


<footer>
  <Footer></Footer>
</footer>
      
    </div>
  )
}
//inset-x-0 top-1/2 transform -translate-y-1/2