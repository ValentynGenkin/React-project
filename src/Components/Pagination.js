import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';

function PaginationComponent({ pages, setOffset, meal_type }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = pages;

  useEffect(() => {
    setCurrentPage(1);
  }, [meal_type]);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      pageNumber === 1 ? setOffset(0) : setOffset(pageNumber * 20);
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
