import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}/> 
          <Route path="/courses" element={<Courses />}>
            <Route path="training" element={<ServiceDetail service="training" />} />
            <Route path="internship" element={<ServiceDetail service="internship" />} />
            <Route path="placement" element={<ServiceDetail service="placement" />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
