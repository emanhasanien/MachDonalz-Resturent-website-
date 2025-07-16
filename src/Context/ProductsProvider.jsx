import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";
export const ProductsContext = createContext();

export const ProductsProvider = ({ children  }) => {
  const [categories, setCategories] = useState([]);
  const [featuredMeals, setFeaturedMeals] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 const fetchCategories = useCallback(async () => {
  try {
    setIsLoading(true);
    const response = await axios.get("http://localhost:3001/categories");
    setCategories(response.data); 
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
}, []);

  const fetchFeaturedMeals = useCallback(async () => {
     try {
    setIsLoading(true);
    const response = await axios.get("http://localhost:3001/featuredMeals");
    setFeaturedMeals(response.data); 
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
  
  }, []);

  const fetchMenuItems = useCallback(async () => {

     try {
    setIsLoading(true);
    const response = await axios.get("http://localhost:3001/menuItems");
    setMenuItems(response.data); 
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
  
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchFeaturedMeals();
    fetchMenuItems();
  }, [fetchCategories, fetchFeaturedMeals, fetchMenuItems]);

  return (
    <ProductsContext.Provider
      value={{ categories, featuredMeals, menuItems, isLoading, error }}
    >
      {children }
    </ProductsContext.Provider>
  );
};


