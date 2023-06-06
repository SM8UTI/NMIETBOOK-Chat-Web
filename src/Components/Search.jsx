import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="Search mt-4">
      <form className="bg-[#ffffff17] px-2 rounded-md">
        <div className="flex flex-row gap-2 text-sm items-center w-full">
          <label htmlFor="searchInput">
            <FiSearch />
          </label>
          <input
            type="text"
            placeholder="Search any User...."
            id="searchInput"
            className="bg-transparent text-white w-full placeholder:text-[#ffffffad] border-none outline-none py-3"
          />
        </div>
      </form>

      {false && (
        <div className="userChat bg-[#ffffff17] p-2 rounded-b-md">
          <div className="flex flex-row items-center gap-2 hover:bg-[#ffffff17] cursor-pointer transition ease-in-out delay-150 p-2 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
              alt="profile img"
              className="w-[50px] aspect-square rounded-full object-cover shadow-sm"
            />
            <h3>Priya</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
