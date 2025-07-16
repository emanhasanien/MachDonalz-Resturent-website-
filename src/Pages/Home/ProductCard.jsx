import { Star } from "lucide-react";

const ProductCard = ({ name, image, description, price, rating }) => {
  console.log();

  return (
    <div className="flex flex-col items-center justify-center scale-100 hover:scale-110 transition-transform duration-300">
      <img src={image} alt={name} />
      <div className="flex items-center gap-10">
        <span>{name}</span>
        <div className="flex items-center gap-1">
          <span>{rating}</span>
          <Star className="fill-current"/>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
