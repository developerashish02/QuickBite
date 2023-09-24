import { useEffect, useState } from "react";
import { RESTAURANT } from "../utils/constants";

const useGetRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    try {
      const response = await fetch(RESTAURANT + id);
      const data = await response.json();
      setRestaurant(data?.data);
      // setRestaurantMenu(
      //   data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      // );

      // console.log(
      //   data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
      //   "useGetRestaurant.js"
      // );
    } catch (error) {
      console.log("error while fetching data" + error);
    }
  };

  return restaurant;
};

export default useGetRestaurant;
