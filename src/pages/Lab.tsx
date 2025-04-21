
<PdfViewer url="https://mrcet.com/pdf/Lab%20Manuals/WT%20LAB%20MANUAL.pdf" />


import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ url }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="overflow-auto border rounded shadow-md">
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;


<iframe
  src="https://mrcet.com/pdf/Lab%20Manuals/WT%20LAB%20MANUAL.pdf"
  width="100%"
  height="800px"
  className="rounded border shadow"
/>






