import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import Paginator from "../Paginator/Paginator";
import "./PDF.scss";

interface IPDF {
  pdf: string;
  defaultSize?: boolean;
}

const PDF: React.FC<IPDF> = ({ pdf, defaultSize = true }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf?.numPages);
  };

  const deviceWidth = window.innerWidth;

  const pdfWidth = deviceWidth < 800 ? deviceWidth - 32 : 768;

  return (
    <div className={defaultSize ? "si-pdf-container-wide" : "si-pdf-container"}>
      {/* pdf */}
      <Document
        file={pdf}
        renderMode="canvas"
        className={defaultSize ? "si-pdf-document-wide" : "si-pdf-document"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {defaultSize ? (
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className={"si-pdf-page-wide"}
            // width={pdfWidth}
            scale={1}
          />
        ) : (
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className={"si-pdf-page"}
            width={pdfWidth}
            scale={1}
          />
        )}
      </Document>

      {/* paginator */}
      {numPages !== 1 && numPages !== 0 && (
        <Paginator
          currentPage={pageNumber}
          totalPages={numPages}
          setPage={setPageNumber}
          top={window.innerHeight - 100}
        />
      )}
    </div>
  );
};

export default PDF;
