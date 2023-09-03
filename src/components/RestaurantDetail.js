
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useGetRestaurant from "../hooks/useGetRestaurant";
import Shimmer from "./Shimmer";

const RestaurantsDetail = () => {
    const params = useParams();
    const { id } = params;
    const restaurantMenu = useGetRestaurant(id);

    const { name, city, cuisines, cloudinaryImageId, costForTwo, avgRating } =
        restaurantMenu;

    return (
        <div>
            <img src={CDN_URL + cloudinaryImageId} alt="" />
            <h1>{name}</h1>
            <p> {city} </p>
            <p> {cuisines?.join(" ,")} </p>
            <p> {avgRating} </p>
            <p>Rs {costForTwo / 100}</p>
        </div>
    );
};

export default RestaurantsDetail;
