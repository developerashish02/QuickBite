import Restaurant from "./Restaurant";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const { handleSearchSubmit, filterRestaurant, setSearch, restaurant } =
    useRestaurantData();

  const isOnline = useOnline();

  console.log(restaurant, "All res");

  if (!isOnline) {
    return "oh check your internet connection ☹️";
  }

  if (restaurant?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="my-4">
      <div className="my-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for restaurant and food"
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 outline-none border border-black text-base w-80 rounded-l-md"
        />

        <button
          className="p-2 bg-yellow-300 border border-black rounded-r-md hover:bg-yellow-400 active:bg-yellow-500 transition ease-in-out duration-75 "
          onClick={handleSearchSubmit}
        >
          Submit
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8 ">
        {filterRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <Restaurant resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
