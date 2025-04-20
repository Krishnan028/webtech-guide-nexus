
import PdfViewer from '../components/PdfViewer';

const Lab = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Lab Manual</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Access the complete lab manual for practical exercises and assignments. You can view it directly in the browser or download it for offline use.
          </p>
          <PdfViewer />
        </div>
      </div>
    </div>
  );
};

export default Lab;
