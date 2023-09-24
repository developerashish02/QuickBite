import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useGetRestaurant from "../hooks/useGetRestaurant";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantsDetail = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useGetRestaurant(id);

  if (!restaurant) {
    return <Shimmer />;
  }
  const {
    name,
    city,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    locality,
    // sla: { lastMileTravel },
  } = restaurant?.cards[0]?.card?.card?.info;

  const restaurantMenus =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log(restaurantMenus, "restaurantMenus");

  const itemCategory = restaurantMenus.filter(
    (data) =>
      data?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(itemCategory, "itemCategory");
  // console.log(restaurantMenu);

  // console.log(
  //   restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]
  // );

  // const restaurantInfo = restaurantMenu?.cards[0]?.card?.card?.info;
  // const restaurantMenus =
  //   restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1];

  // if (restaurant) {
  //   return <Shimmer />;
  // }

  // console.log(restaurant, "...............");

  return (
    <div className="w-2/3  mx-auto  p-4 my-2">
      <div>
        <div className="flex justify-between  ">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="px-4 py-1 bg-white text-green-900 border border-gray-300 rounded-md  ">
            ⭐{avgRating}
          </p>
        </div>

        {/* <p> {city} </p> */}
        {/* <p>Rs {costForTwo / 100}</p> */}

        <h2 className="font-light"> {cuisines?.join(" ,")} </h2>
        <p className="mb-2 font-light"> {locality} </p>

        {/* <div>span</div> */}
        <hr />

        <div className="font-bold py-4 px-2 flex space-x-4">
          {/* <span> {lastMileTravel} MINS </span> */}
          <span>{costForTwo / 100} for two</span>{" "}
        </div>
        <hr />
      </div>

      {itemCategory?.map((data, index) => (
        <RestaurantMenu data={data?.card?.card} key={index} />
      ))}
    </div>
  );
};

export default RestaurantsDetail;
