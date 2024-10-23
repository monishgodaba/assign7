// import React from 'react';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Hero Section */}
//       <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//             Transform Your Career with Data Science
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Learn from industry experts and gain hands-on experience in Data Science, Machine Learning, and AI.
//           </p>
//           <div className="flex justify-center gap-4">
//             <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all">
//               Explore Courses
//             </button>
//             <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all">
//               Learn More
//             </button>
//           </div>
//         </motion.div>

//         {/* Features Section */}
//         <div className="mt-24 grid md:grid-cols-3 gap-8">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
//           >
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Live Online Classes</h3>
//             <p className="text-gray-600">Interactive sessions with industry experts and real-time doubt clearing.</p>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
//           >
//             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//               <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
//             <p className="text-gray-600">Build real-world projects and create a powerful portfolio.</p>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
//           >
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//               <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Career Support</h3>
//             <p className="text-gray-600">Get placed in top companies with our dedicated placement support.</p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-blue-600 text-white py-16 mt-24">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <h4 className="text-4xl font-bold mb-2">500+</h4>
//             <p className="text-blue-100">Students Placed</p>
//           </div>
//           <div>
//             <h4 className="text-4xl font-bold mb-2">50+</h4>
//             <p className="text-blue-100">Industry Partners</p>
//           </div>
//           <div>
//             <h4 className="text-4xl font-bold mb-2">20+</h4>
//             <p className="text-blue-100">Courses</p>
//           </div>
//           <div>
//             <h4 className="text-4xl font-bold mb-2">100%</h4>
//             <p className="text-blue-100">Placement Support</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">
            Your Logo
          </div>
          <div className="space-x-4">
            <button className="text-gray-600 hover:text-gray-800">Verify Certificate</button>
            <button className="text-gray-600 hover:text-gray-800">Contact Us</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">
              My Account ▼
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to
            <div className="text-red-600">
              Innomatics
              <br />
              Research Labs
            </div>
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Get access to all the learning material on this portal
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-gray-800">★</span>
              Course Curriculum
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800">★</span>
              LIVE Session Recording
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800">★</span>
              Class Material
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800">★</span>
              Assignments and Quizzes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800">★</span>
              Projects and Case Studies
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-gray-700 text-white px-8 py-3 rounded hover:text-blue-600 transition-colors">
              Placements
            </button>
            <button className="border-2 border-gray-700 text-gray-700 px-8 py-3 rounded hover:text-blue-600 transition-colors">
              Refer a Friend
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="/study.jpg" 
            alt="Student studying online" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">500+</h4>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">50+</h4>
              <p className="text-gray-600">Industry Partners</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">20+</h4>
              <p className="text-gray-600">Courses</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">100%</h4>
              <p className="text-gray-600">Placement Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;