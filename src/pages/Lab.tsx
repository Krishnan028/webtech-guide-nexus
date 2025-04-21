
import PdfViewer  from '../components/PdfViewer';

const Lab = ( url= "https://mrcet.com/pdf/Lab%20Manuals/WT%20LAB%20MANUAL.pdf") => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Web Technology Lab Manual</h1>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <p className="text-gray-600">
            Welcome to the Web Technology Lab Manual! This guide covers practical exercises and lab assignments 
            designed to help you master web development technologies.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Lab Manual </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            </ul>
          </div>

          <p className="text-gray-600">
            The PDF below contains all instructions, coding challenges, and guidelines for each unit. 
            You can view it online or download it for offline access.
          </p>

          <PdfViewer />

          <div>
            <a
              href="https://mrcet.com/pdf/Lab%20Manuals/WT%20LAB%20MANUAL.pdf"
              download="https://mrcet.com/pdf/Lab%20Manuals/WT%20LAB%20MANUAL.pdf"
              className="inline-flex items-center gap-2 text-blue-700 hover:underline font-medium mt-2"
            >
              Click here to download the Lab Manual PDF directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;







