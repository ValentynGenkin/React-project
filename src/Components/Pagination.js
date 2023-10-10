import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import '../CSS/Pagination.css';

function PaginationComponent({ pages, currentPage, setCurrentPage, data }) {
  const totalPages = pages;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage({ page: pageNumber, offset: currentPage.offset });
      pageNumber === 1
        ? setCurrentPage({ page: pageNumber, offset: 0 })
        : setCurrentPage({
            page: pageNumber,
            offset: (pageNumber - 1) * 20,
          });
    }
  };

  const generatePaginationItems = () => {
    const items = [];

    for (
      let pageNumber = Math.max(currentPage.page - 2, 1);
      pageNumber <= Math.min(currentPage.page + 2, totalPages);
      pageNumber++
    ) {
      items.push(
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage.page}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>,
      );
    }
    return items;
  };

  return (
    <Container className="pagination-container">
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage.page - 1)}
        />
        {generatePaginationItems()}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage.page + 1)}
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </Container>
  );
}

export default PaginationComponent;
