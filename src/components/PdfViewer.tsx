
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from './ui/button';
import { toast } from './ui/sonner';
import { FileDown } from 'lucide-react';

// Configure pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ url = '/lab-manual.pdf' }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'web-technology-lab-manual.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Download started');
    } catch (error) {
      toast.error('Error downloading the file');
    }
  };

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => Math.min(Math.max(prevPageNumber + offset, 1), numPages || 1));
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-white rounded-lg shadow-md">
        <iframe
          src={url}
          className="w-full h-[600px] rounded-lg"
          title="Lab Manual PDF"
        />
      </div>
      <div className="flex justify-between">
        <Button onClick={handleDownload} className="w-fit">
          <FileDown className="mr-2" />
          Download Lab Manual
        </Button>
      </div>
    </div>
  );
};

export default PdfViewer;
