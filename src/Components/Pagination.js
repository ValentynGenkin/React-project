import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent({ pages, currentPage, setCurrentPage }) {
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
      pageNumber <= Math.min(currentPage.page + 3, totalPages);
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
    <div>
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
    </div>
  );
}

export default PaginationComponent;
