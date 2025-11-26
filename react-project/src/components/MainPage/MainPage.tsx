import Card from "../Card/Cards";
import "./MainPage.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchItems } from "../../services/GetItems";
import { useEffect, useState } from "react";
import Item from "../../utils/Item";
import searchItems from "../../services/search";
import { Outlet } from "react-router";

export default function MainPage() {
  const [products, setProducts] = useState<Item[]>([]);
  const [filtredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const items = await fetchItems();
      setProducts(items);
      setFilteredItems(items);
    };
    fetchData();
  }, []);

  const handleLiveSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);

    const filteredItems = searchItems(products, searchTerm);
    setFilteredItems(filteredItems);
  };

  const handleClick = (itemId: string) => {
    window.location.href = `/${itemId}`;
  };

  return (
    <>
      <div className="relative min-h-screen pb-10">
        <Outlet></Outlet>
        <SearchBar
          handleLiveSearch={handleLiveSearch}
          searchItem={searchItem}
        />

        <div className="grid grid-cols-4 gap-2 mx-4">
          {filtredItems.map((item: Item) => (
            <button onClick={() => handleClick(item.id)}>
              <Card key={item.id} {...item} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
