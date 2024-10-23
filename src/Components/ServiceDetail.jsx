const serviceDetails = {
    training: {
      title: "Training Programs",
      description: "Comprehensive training programs in Data Science, Machine Learning, and Full Stack Development.",
      features: [
        "Hands-on practical sessions",
        "Real-world projects",
        "Industry expert mentoring",
        "Flexible batch timings"
      ]
    },
    internship: {
      title: "Internship Programs",
      description: "Get real-world experience through our industry-partnered internship programs.",
      features: [
        "Live project experience",
        "Industry mentorship",
        "Certificate of completion",
        "Potential job opportunities"
      ]
    },
    placement: {
      title: "Placement Support",
      description: "End-to-end placement assistance for our students.",
      features: [
        "Resume building",
        "Interview preparation",
        "Mock interviews",
        "Job referrals"
      ]
    }
  };
  
  const ServiceDetail = ({ service }) => {
    const details = serviceDetails[service] || serviceDetails.training;
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{details.title}</h2>
        <p className="text-gray-700 mb-4">{details.description}</p>
        <h3 className="font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ServiceDetail;
  