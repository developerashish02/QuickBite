import { useEffect, useState } from "react";
import { RESTAURANT } from "../utils/constants";

const useGetRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurant();
    }, [])

    const getRestaurant = async () => {
        try {
            const response = await fetch(RESTAURANT + id);
            const data = await response.json();
            setRestaurant(data?.data?.cards[0]?.card?.card?.info);
        } catch (error) {
            console.log("error while fetching data" + error);
        }
    };

    return restaurant;

}

export default useGetRestaurant; 