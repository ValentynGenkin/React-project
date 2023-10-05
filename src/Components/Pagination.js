import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

function PaginationComponent({ pages, setOffset }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = pages;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setOffset(pageNumber * 20);
    }
  };

  const generatePaginationItems = () => {
    const items = [];
    for (
      let pageNumber = Math.max(currentPage - 2, 1);
      pageNumber <= Math.min(currentPage + 3, totalPages);
      pageNumber++
    ) {
      items.push(
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>,
      );
    }
    return items;
  };

  return (
    <div>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
        {generatePaginationItems()}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
