import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const RestaurantsDetail = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState({});
    const { id } = params;

    const { name, city, cuisines, cloudinaryImageId, costForTwo, avgRating } =
        restaurant;

    useEffect(() => {
        getRestaurant();
    }, []);

    const getRestaurant = async () => {
        try {
            const response = await fetch(RESTAURANT + id);
            const data = await response.json();

            console.log(data?.data?.cards[0]?.card?.card?.info);
            setRestaurant(data?.data?.cards[0]?.card?.card?.info);
        } catch (error) {
            console.log("error while fetching data" + error);
        }
    };

    console.log(params);
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
