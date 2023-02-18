import "./Paginator.scss";

interface IPaginator {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  top?: number;
}

const Paginator: React.FC<IPaginator> = ({
  currentPage,
  totalPages,
  setPage,
  top = 0,
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    scrollToTop();
    setPage(currentPage + 1);
  };
  const prevPage = () => {
    scrollToTop();
    setPage(currentPage - 1);
  };
  const goToLastPage = () => {
    if (currentPage !== totalPages) {
      scrollToTop();
      setPage(totalPages);
    }
  };
  const goToFirstPage = () => {
    if (currentPage !== 1) {
      scrollToTop();
      setPage(1);
    }
  };
  const changePage = (to: number) => {
    scrollToTop();
    setPage(to);
  };

  return (
    <div className="si-paginator">
      {/* next button */}
      {currentPage < totalPages && (
        <div className="si-paginator-next" onClick={nextPage}>
          صفحه بعد
        </div>
      )}

      {/* last element */}
      <div
        className={
          currentPage === totalPages
            ? "si-paginator-page-selected"
            : "si-paginator-page"
        }
        onClick={goToLastPage}
      >
        {totalPages}
      </div>

      {/* middle numbers */}
      {/* next dots */}
      {currentPage + 3 < totalPages && (
        <div className="si-pagination-dots pc-support">...</div>
      )}
      {/* next pages */}
      {currentPage + 2 < totalPages && (
        <div
          className="si-paginator-page pc-support"
          onClick={() => changePage(currentPage + 2)}
        >
          {currentPage + 2}
        </div>
      )}
      {currentPage + 1 < totalPages && (
        <div
          className="si-paginator-page pc-support"
          onClick={() => changePage(currentPage + 1)}
        >
          {currentPage + 1}
        </div>
      )}
      {/* current page */}
      {currentPage < totalPages && currentPage > 1 && (
        <div className="si-paginator-page-selected">{currentPage}</div>
      )}
      {/* prev pages */}
      {currentPage - 1 > 1 && (
        <div
          className="si-paginator-page pc-support"
          onClick={() => changePage(currentPage - 1)}
        >
          {currentPage - 1}
        </div>
      )}
      {currentPage - 2 > 1 && (
        <div
          className="si-paginator-page pc-support"
          onClick={() => changePage(currentPage - 2)}
        >
          {currentPage - 2}
        </div>
      )}
      {/* prev dots */}
      {currentPage - 3 > 1 && (
        <div className="si-pagination-dots pc-support">...</div>
      )}

      {/* first element */}
      <div
        className={
          currentPage === 1 ? "si-paginator-page-selected" : "si-paginator-page"
        }
        onClick={goToFirstPage}
      >
        1
      </div>

      {/* prev button*/}
      {currentPage > 1 && (
        <div className="si-paginator-prev" onClick={prevPage}>
          صفحه قبل
        </div>
      )}
    </div>
  );
};

export default Paginator;
