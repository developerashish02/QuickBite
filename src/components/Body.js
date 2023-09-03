
import Restaurant from "./Restaurant";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData";
import useOnline from "../hooks/useOnline";

const Body = () => {

    const { handleSearchSubmit, filterRestaurant, setSearch, restaurant } = useRestaurantData();

    const isOnline = useOnline();

    console.log(isOnline);


    if (!isOnline) {
        return "oh check your internet connection ☹️";
    }

    if (restaurant?.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="Body_search">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="body_search_btn" onClick={handleSearchSubmit}>
                    Submit
                </button>

            </div>

            <div className="res-container">
                {filterRestaurant?.map(restaurant => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                        <Restaurant resObj={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
