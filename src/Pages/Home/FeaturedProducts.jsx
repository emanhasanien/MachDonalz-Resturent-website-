import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Context/ProductsProvider";
import { Loader, Star } from "lucide-react";


const FeaturedProducts = () => {
  const { featuredMeals, isLoading, error } = useContext(ProductsContext);

  return (
    <>
      {isLoading ? <Loader className="h-6 w-6 text-mcdonaliz-red" /> : null}
      {error ? (
        <p className="text-red-700 text-2xl">
         
          Error has occered when fetchin data
        </p>
      ) : null}
      <div className="text-center mt-20 mb-20">
        <h2 className="text-2xl md:text-4xl font-medium mb-5">أشهر منتجاتنا</h2>
        <p className="text-[20px] text-gray-500 mb-5">
          اكتشف أطباقنا المفضلة لدى العملاء
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
        {featuredMeals.length > 0 ? (
          featuredMeals.map((product) => {
            return (
              <div key={product.id} className="flex flex-col items-center justify-center scale-100 hover:scale-110 transition-transform duration-300">
                <img src={product.image} alt={product.name} />
                <div className="flex items-center gap-10">
                  <span>{product.name}</span>
                  <div className="flex items-center gap-1">
                    <span>{product.rating}</span>
                    <Star className="fill-current" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Meals Found yet</p>
        )}
      </div>
    </>
  );
};

export default FeaturedProducts;
