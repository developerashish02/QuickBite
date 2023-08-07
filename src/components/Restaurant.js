import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const { resObj } = props;
    const { name, avgRating, cuisines, cloudinaryImageId, areaName } = resObj.info;
    return (
        <div className="restaurant">
            <img src={CDN_URL + cloudinaryImageId} alt="restaurant" className="restaurant-img" />
            <div>
                <h3>{name}</h3>
                <p>⭐ {avgRating} </p>
                <p> {cuisines.join(", ")} </p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default Restaurant; 