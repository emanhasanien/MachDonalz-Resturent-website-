import { Star } from "lucide-react";
import Button from "../../Components/Button";

const ProductCard = ({ name, image, description, price, rating, popular }) => {
  console.log();

  return (
    <div className="flex flex-col items-center justify-center shadow-lg  scale-100 hover:scale-110 transition-transform duration-300">
      <img src={image} alt={name} />
      <div className="flex items-center gap-10">
        <span>{name}</span>
        <div className="flex items-center gap-1">
          <span>{rating}</span>
          <Star className="fill-current" />
        </div>
      </div>
      <div>
        <p className="p-2.5 text-sm font-medium">{description}</p>
        <div className="flex items-center justify-between">
          <Button text={"اضف للسلة"} />
          <span className="textt-[20px] font-medium text-mcdonaliz-red">
            {" "}
            {price}
          </span>
        </div>
        {popular ? (
          <div className="w-fit mt-2 px-1 py-0.5 bg-[#FF2200] text-white rounded-sm mx-auto">
            <p className="text-sm font-semibold">الأكثر طلبا</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
