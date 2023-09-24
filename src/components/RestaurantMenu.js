import { useState } from "react";
import RestaurantMenuDetails from "./RestaurantMenuDetails";

const RestaurantMenu = ({ data }) => {
  const [toggleRestaurantMenu, setToggleRestaurantMenu] = useState(false);

  const { title, itemCards } = data;

  const handleToggle = () => {
    setToggleRestaurantMenu(!toggleRestaurantMenu);
  };
  return (
    <div className="p-4 shadow-lg my-4 cursor-pointer" onClick={handleToggle}>
      <div className="flex justify-between">
        <h2 className="font-bold">
          {title} <span>({itemCards?.length})</span>
        </h2>
        <div>⬇️</div>
      </div>

      {toggleRestaurantMenu && (
        <>
          {itemCards.map((restaurantMenus) => (
            <RestaurantMenuDetails itemCards={restaurantMenus?.card?.info} />
          ))}
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
