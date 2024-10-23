import React from 'react';

const Courses = () => {
  return (
    <div className="courses-container mx-auto px-4 py-8 pt-20 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="course-card rounded-lg shadow-md p-4">
          <img src="/data science.jpg" alt="Data Science" className="h-48 w-full object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">NASSCOM Futureskills Prime Certified Data Science</h2>
          <p className="text-gray-700 mb-4">This is a great choice for tech geeks, students, working professionals and aspiring data scientists who want to upskill and build a better foundation in the stream of Data Science.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Read More</button>
        </div>
        <div className="course-card rounded-lg shadow-md p-4">
          <img src="/full stack.jpg" alt="Full Stack Development" className="h-48 w-full object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Full Stack Development</h2>
          <p className="text-gray-700 mb-4">Learn the right skills to break into a development career & advance yourself as a full-stack Developer. It includes Frontend, Backend, databases, debugging & testing.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Read More</button>
        </div>
        <div className="course-card rounded-lg shadow-md p-4">
          <img src="/digital.jpg" alt="Digital Marketing" className="h-48 w-full object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Digital Marketing</h2>
          <p className="text-gray-700 mb-4">Digital Marketing Course at Innomatics is perfect for Entrepreneurs, Freelancers, Job seekers, Wanna be Entrepreneurs, working professionals who want to enhance their skill.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;