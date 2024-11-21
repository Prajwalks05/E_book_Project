import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // Correct import
import { useLocation } from 'react-router-dom';

import './BookViewer.css';

// Set up the worker for PDF.js inside the component with useEffect
const BookViewer = () => {
  const location = useLocation();
  const [bookUrl, setBookUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Get the book URL from query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setBookUrl(urlParams.get('url'));
  }, [location]);

  useEffect(() => {
    // Use the worker from the updated pdfjs-dist
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@latest/build/pdf.worker.min.js`;
  }, []);
  

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  if (!bookUrl) {
    return <div className="error-message">No book URL provided. Please select a book to view.</div>;
  }

  return (
    <div className="book-viewer-container">
      <div className="book-viewer-header">
        <h1 className="book-title">Book Viewer</h1>
      </div>

      <div className="pdf-container">
        <Document
          file={`http://localhost:3000/public/${bookUrl}`} // Ensure the path matches your server's static route
          onLoadSuccess={onLoadSuccess}
          className="pdf-document"
          onLoadError={(error) => console.error('Error loading PDF', error)}
        >
          <Page pageNumber={pageNumber} className="pdf-page" />
        </Document>
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <span className="page-number">{`Page ${pageNumber} of ${numPages}`}</span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={pageNumber === numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookViewer;
