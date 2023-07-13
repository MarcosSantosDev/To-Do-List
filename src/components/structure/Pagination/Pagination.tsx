import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Button from '@/components/structure/Button/Button';

import * as S from './Pagination.styles';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  goToPagination: (newPage: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  goToPagination,
}: PaginationProps) {
  const hasNextPage = currentPage < totalPages;

  const handleChangePagination = (newPage: number) => {
    return async () => {
      goToPagination(newPage + currentPage);
    };
  };

  return (
    <S.Pagination>
      <Button
        type="button"
        onClick={handleChangePagination(-1)}
        disabled={currentPage === 1}
      >
        <FiChevronLeft />
        Página anterior
      </Button>
      <Button
        type="button"
        onClick={handleChangePagination(1)}
        disabled={!hasNextPage}
      >
        Proxima página
        <FiChevronRight />
      </Button>
    </S.Pagination>
  );
}

export default Pagination;
