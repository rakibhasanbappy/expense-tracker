export default function Filter({ filterOptions }) {
  return (
    <>
      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="filter-button-2"
        tabIndex="-1"
        id="filter-dropdown2"
      >
        <div className="py-1" role="none">
          {filterOptions.map((option) => (
            <label
              key={option}
              className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
            >
              <input
                onClick={(e) => e.stopPropagation()}
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
