export default function SearchBar(props: {
  handleLiveSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchItem: string;
}) {
  return (
    <>
      <div className="m-10 flex justify-between items-center bg-[#b9b8b8] rounded-4xl p-2 md:w-1/2 sm:w-full  focus-within:ring-2 ring-slate-400 ">
        <input
          className=" text-gray-950 w-full focus:outline-none"
          onChange={(event) => {
            props.handleLiveSearch(event);
          }}
          value={props.searchItem}
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="bg-[#fffefe] py-2 rounded-4xl px-6 text-black font-bold text-center">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
}
