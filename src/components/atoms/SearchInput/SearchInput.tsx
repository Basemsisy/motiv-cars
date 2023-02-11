import searchIcon from "src/assets/icons/search.svg";

const SearchInput = () => {
  return (
    <div className="bg-gray-9 w-[385px] py-3 px-3.5 rounded-lg flex">
      <img src={searchIcon} alt="search icon" />
      <input
        className="bg-gray-9 focus:outline-none text-base font-medium text-gray-3 w-[100%] ml-4 caret-secondary-6"
        type="text"
        placeholder="Search or type"
      />
    </div>
  );
};

export default SearchInput;
