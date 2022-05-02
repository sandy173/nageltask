import React from 'react';

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const pageRange = (start, end, step = 1) => {
    let i = start;
    const range = [];
  
    while (i <= end) {
      range.push(i);
      i += step;
    }  
    return range;
  };
  

const Pagination = (props) => {
    const {
        totalPages,
        currPage,
        onPageChange,
      } = props;

    const getPageNumbers = () => {
        let pageNeighbours = 2;
        const displayNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = displayNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currPage + pageNeighbours);
            let pages = pageRange(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = totalPages - endPage > 1;
            const spillOffset = displayNumbers - (pages.length + 1);
            switch (true) {
                case hasLeftSpill && !hasRightSpill: {
                  const extraPages = pageRange(startPage - spillOffset, startPage - 1);
                  pages = [LEFT_PAGE, ...extraPages, ...pages];
                  break;
                }
                case hasLeftSpill && hasRightSpill:
                default: {
                  pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                  break;
                }
              }
            return [1, ...pages, totalPages];  
        }
        return pageRange(currPage, totalPages);
    }
    const pageNumbers = getPageNumbers() || [];
    return(
        <div className = "pagination-wrapper">
            <nav aria-label="Pagination">
                <ul className="pagination">
                    {pageNumbers.map((page, index) => {
                        if (page === LEFT_PAGE)
                            return (
                              <li key={index} className="page-item">
                                <a
                                  href="/"
                                  className="page-link"
                                  aria-label="Previous"
                                  
                                >
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                            );
                            
                            if (page === RIGHT_PAGE)
                                return (
                                <li key={index} className="page-item">
                                    <a
                                    href="/"
                                    className="page-link"
                                    aria-label="Next"
                                    >
                                    <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                                );
                            
                            return (
                                <li
                                  key={index}
                                  className={`page-item${currPage === page ? " active" : ""}`}
                                >
                                  <a
                                    className="page-link"
                                    href="/"
                                    onClick = {(e) => onPageChange(e,page)}
                                  >
                                    {page}
                                  </a>
                                </li>
                              );

                        }                    
                    )}
                        
                </ul>   
            </nav>
        </div>
    );
}

export default Pagination;