
const Benefits = () => {
  const benefits = [
    {
      title: "Global Accessibility",
      description: "Access information and services from anywhere in the world, breaking geographical barriers."
    },
    {
      title: "Cost-Effective Solutions",
      description: "Reduce operational costs through digital transformation and automation."
    },
    {
      title: "Enhanced Communication",
      description: "Enable real-time collaboration and information sharing across platforms."
    },
    {
      title: "Scalability",
      description: "Easily scale applications and services to meet growing demands."
    },
    {
      title: "Innovation Enablement",
      description: "Foster creativity and innovation through modern web technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Benefits of Web Technology</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
