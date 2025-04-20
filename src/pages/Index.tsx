
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, FileText, Link as LinkIcon, Star } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Star,
      title: "Benefits",
      description: "Discover the advantages of web technology",
      link: "/benefits"
    },
    {
      icon: Book,
      title: "Theory Notes",
      description: "Comprehensive chapters on web technology concepts",
      link: "/theory"
    },
    {
      icon: FileText,
      title: "Lab Manual",
      description: "Practical exercises and assignments",
      link: "/lab"
    },
    {
      icon: LinkIcon,
      title: "References",
      description: "Curated list of helpful resources",
      link: "/references"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Web Technology Guide</h1>
          <p className="text-xl text-gray-600">Your comprehensive resource for learning web technologies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
