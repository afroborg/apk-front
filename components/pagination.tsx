import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IResponseMeta } from '../models/IResponse';
import PaginationBtn from './pagination-btn';

type Props = IResponseMeta & {
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({
  onThisPage,
  total,
  page,
  nextPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const handlePageChange = (p: number) => () => {
    if (p < 1 || p > totalPages) {
      return;
    }
    onPageChange(p);
  };

  return (
    <div className="flex flex-col-reverse gap-4 items-center mt-2">
      <div className="text-sm">
        <p>
          Visar <span>{onThisPage}</span> av <span>{total}</span> drycker.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <PaginationBtn
          onClick={handlePageChange(page - 1)}
          disabled={isFirstPage}
        >
          <FiChevronLeft />
        </PaginationBtn>

        <PaginationBtn isActive>
          <span>{page}</span>
        </PaginationBtn>

        <PaginationBtn onClick={handlePageChange(nextPage)}>
          <span>{nextPage}</span>
        </PaginationBtn>

        <div className="mb-3">...</div>

        <PaginationBtn onClick={handlePageChange(totalPages)}>
          <span>{totalPages}</span>
        </PaginationBtn>

        <PaginationBtn
          onClick={handlePageChange(page + 1)}
          disabled={isLastPage}
        >
          <FiChevronRight />
        </PaginationBtn>
      </div>
    </div>
  );
};

export default Pagination;
