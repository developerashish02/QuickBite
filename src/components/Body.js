import { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "../components/Shimmer";
import { ALL_RESTAURANT } from "../utils/constants";

const Body = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [search, setSearch] = useState("");

    // Load => Reader UI => API => Render
    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        try {
            const response = await fetch(ALL_RESTAURANT);
            const data = await response.json();
            const restaurants =
                data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;

            setRestaurant(restaurants);
            setFilterRestaurant(restaurants);
        } catch (error) {
            console.log("Error while fetching data", +error);
        }
    };

    const handleTopRated = () => {
        const topRated = restaurant.filter(
            (restaurant) => restaurant?.info?.avgRating > 4
        );
        setRestaurant(topRated);
    };

    if (restaurant?.length === 0) {
        return <Shimmer />;
    }

    const handleSearchSubmit = () => {
        const filterRes = restaurant.filter((restaurant) =>
            restaurant?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
        );

        setFilterRestaurant(filterRes);
    };

    return (
        <div className="body">
            <div className="Body_search">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="body_search_btn" onClick={handleSearchSubmit}>
                    Submit
                </button>

                <button className="top-reated" onClick={handleTopRated}>
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {filterRestaurant?.map((restaurant) => (
                    <Restaurant resObj={restaurant} key={restaurant?.info?.id} />
                ))}
            </div>
        </div>
    );
};

export default Body;
