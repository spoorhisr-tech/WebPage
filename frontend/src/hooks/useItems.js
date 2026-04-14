import { useEffect, useState } from "react";
import { itemService } from "../services/itemService";

export const useItems = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      setError("");
      const data = await itemService.getItems();
      setItems(data);
    } catch (fetchError) {
      setError(
        fetchError.response?.data?.message ||
          "Unable to load dashboard data right now."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const addItem = async (payload) => {
    const createdItem = await itemService.createItem(payload);
    setItems((currentItems) => [createdItem, ...currentItems]);
  };

  const removeItem = async (id) => {
    await itemService.deleteItem(id);
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    items,
    isLoading,
    error,
    fetchItems,
    addItem,
    removeItem,
  };
};
