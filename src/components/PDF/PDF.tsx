import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import Paginator from "../Paginator/Paginator";
import "./PDF.scss";

interface IPDF {
  pdf: string;
}

const PDF: React.FC<IPDF> = ({ pdf }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf?.numPages);
  };

  return (
    <div className="si-pdf-container">
      {/* pdf */}
      <Document
        file={pdf}
        renderMode="canvas"
        className={"si-pdf-document"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className={"si-pdf-page"}
        />
      </Document>

      {/* paginator */}
      {numPages !== 1 && numPages !== 0 && (
        <Paginator
          currentPage={pageNumber}
          totalPages={numPages}
          setPage={setPageNumber}
        />
      )}
    </div>
  );
};

export default PDF;
