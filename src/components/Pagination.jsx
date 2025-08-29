import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePaginationInfo } from '../utils/helpers';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { t } = useTranslation();
  
  if (totalPages <= 1) return null;
  
  const paginationInfo = generatePaginationInfo(currentPage, totalPages, 5);
  
  return (
    <div className="pagination">
      {/* First Page Button */}
      {paginationInfo.showFirst && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="pagination-btn"
            aria-label="First page"
          >
            1
          </button>
          <span className="px-2">...</span>
        </>
      )}
      
      {/* Previous Button */}
      {paginationInfo.showPrevious && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="pagination-btn"
          aria-label="Previous page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {/* Page Numbers */}
      {paginationInfo.pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? 'pagination-btn-active' : 'pagination-btn'}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      
      {/* Next Button */}
      {paginationInfo.showNext && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="pagination-btn"
          aria-label="Next page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      
      {/* Last Page Button */}
      {paginationInfo.showLast && (
        <>
          <span className="px-2">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="pagination-btn"
            aria-label="Last page"
          >
            {totalPages}
          </button>
        </>
      )}
      
      {/* Page Info */}
      <div className="ml-4 text-sm text-gray-600">
        {t('common.page')} {currentPage} {t('common.of')} {totalPages}
      </div>
    </div>
  );
};

export default Pagination;