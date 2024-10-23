import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-md">
          <nav className="space-y-2">
            <Link to="/services/training" 
              className="block p-2 hover:bg-blue-50 rounded transition-colors">
              Training Programs
            </Link>
            <Link to="/services/internship" 
              className="block p-2 hover:bg-blue-50 rounded transition-colors">
              Internships
            </Link>
            <Link to="/services/placement" 
              className="block p-2 hover:bg-blue-50 rounded transition-colors">
              Placement Support
            </Link>
          </nav>
        </div>
        <div className="md:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Services;