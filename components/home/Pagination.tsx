interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center my-6 space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? "bg-red-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;