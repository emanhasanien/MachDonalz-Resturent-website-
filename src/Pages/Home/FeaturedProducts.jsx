import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";
import { Loader } from "lucide-react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { featuredMeals, isLoading, error } = useContext(ProductsContext);

  if (isLoading) return <Loader className="h-6 w-6 text-mcdonaliz-red" />
  if(error) return <p className="text-red-700 text-2xl"> Error has occered when fetchin data</p>
  return (
    <>
    {isLoading} 
     <div className="text-center mt-20 mb-20">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">
         أشهر منتجاتنا
        </h2>
        <p className="text-[20px] text-gray-500 mb-5">
         اكتشف أطباقنا المفضلة لدى العملاء
        </p>
      </div>
   
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
      {featuredMeals.length > 0 ? featuredMeals.map((product) => {
      return <ProductCard key={product.id} name={product.name} image={product.image} description={product.description} price={product.price} rating={product.rating}/>
    }
    )  : <p>No Meals Found yet</p>}
   </div>
    
    </>
  );
};

export default FeaturedProducts;
