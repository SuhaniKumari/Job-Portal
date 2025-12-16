import React from 'react';

const Jobs = () => {
  // Dummy data for featured jobs
  const featuredJobs = [
    {
      id: 1,
      title: 'Software Engineer',
    },
    {
      id: 2,
      title: 'Data Analyst',
    },
    {
      id: 3,
      title: 'Full-stack Developer',
    },
    {
      id: 4,
      title: 'App Developer',
    },
    {
      id: 5,
      title: 'Frontend Developer',
    },
    {
      id: 6,
      title: 'Cloud Engineer',
    },
    {
      id: 7,
      title: 'Data Scientist',
    },
    {
      id: 8,
      title: 'Project Manager',
    },
    // Add more featured job objects as needed
  ];

  return (
    <div>
      <h2 className="text-3xl text-white text-center bg-teal-500 rounded-lg font-bold mb-4 hover:bg-emerald-600">Featured Job Roles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featuredJobs.map(job => (
          <div key={job.id} className="bg-white animate-bounce shadow-md p-4 rounded-lg hover:shadow-lg shadow-slate-400">
            <h3 className="text-xl font-semibold">{job.title}</h3>
          </div>
        ))}
      </div>
      <button className="bg-emerald-400 rounded-lg m-2 text-white p-3 font-bold block hover:bg-emerald-600  transition-shadow">Read more</button>
      <img src="./images/one.jpeg" alt="" className="w-full mt-4 sm:hidden" />
    </div>
  );
};

export default Jobs;
