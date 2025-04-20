
import PdfViewer from '../components/PdfViewer';

const Lab = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Web Technology Lab Manual</h1>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <p className="text-gray-600">
            Welcome to the Web Technology Lab Manual! This comprehensive guide covers practical exercises 
            and assignments designed to enhance your understanding of web development technologies.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Lab Manual Contents</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>HTML5 and CSS3 Fundamentals</li>
              <li>Responsive Web Design Techniques</li>
              <li>JavaScript Programming Exercises</li>
              <li>React Component Development</li>
              <li>State Management and Hooks</li>
              <li>Backend Integration Practices</li>
              <li>Web Performance Optimization</li>
            </ul>
          </div>

          <p className="text-gray-600">
            The PDF below contains detailed instructions, coding challenges, and project guidelines 
            for each lab session. You can view the manual online or download it for offline reference.
          </p>

          <PdfViewer />
        </div>
      </div>
    </div>
  );
};

export default Lab;
