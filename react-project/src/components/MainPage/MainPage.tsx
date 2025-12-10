import Card from "../Card/Cards";
import "./MainPage.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchItems } from "../../services/GetItems";
import { useEffect, useState } from "react";
import type { Item } from "../../utils/Item";
import searchItems from "../../services/Search";
import { Outlet } from "react-router";

export default function MainPage() {
  const [products, setProducts] = useState<Item[]>([]);
  const [filtredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const items = await fetchItems();
      setProducts(items);
      setFilteredItems(items);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setIsLoading(false);
      throw new Error("Could not fetch items");
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
        {isLoading ? (
          <div className="">
            <div className="grid md:grid-cols-4 mb-2 gap-2 mx-4 sm:grid-cols-1 mt-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} {...({} as Item)} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 mb-2 gap-2 mx-4 sm:grid-cols-1 mt-4">
            {filtredItems.map((item: Item) => (
              <button key={item.id} onClick={() => handleClick(item.id)}>
                <Card {...item} />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
