
import { useState } from 'react';
import { Button } from './ui/button';
import { toast } from './ui/sonner';
import { FileDown } from 'lucide-react';

const PdfViewer = () => {
  const pdfUrl = '/lab-manual.pdf';

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'web-technology-lab-manual.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Download started');
    } catch (error) {
      toast.error('Error downloading the file');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-white rounded-lg shadow-md">
        <iframe
          src={pdfUrl}
          className="w-full h-[600px] rounded-lg"
          title="Lab Manual PDF"
        />
      </div>
      <Button onClick={handleDownload} className="w-fit">
        <FileDown className="mr-2" />
        Download Lab Manual
      </Button>
    </div>
  );
};

export default PdfViewer;
