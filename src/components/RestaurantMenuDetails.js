import { CDN_URL } from "../utils/constants";

const RestaurantMenuDetails = ({ itemCards }) => {
  console.log(itemCards, "RestaurantMenuDetails");
  const { name, description, price, imageId } = itemCards;
  return (
    <div className="py-4 flex justify-between items-center">
      <div className="w-9/12">
        <h2 className="font-medium"> {name} </h2>
        <p className="font-semibold">₹ {price / 100}</p>
        <p className="font-light my-2 mb-8">{description}</p>
      </div>

      <div className="3/12">
        <img src={CDN_URL + imageId} alt="" className="w-36" />
        <button className="absolute py-2 px-4 top-2">ADD</button>
      </div>
      <hr />
    </div>
  );
};

export default RestaurantMenuDetails;
