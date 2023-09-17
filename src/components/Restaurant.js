import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
  const { resObj } = props;
  const { name, avgRating, cuisines, cloudinaryImageId, areaName } =
    resObj.info;

  const truncateCusines = (cuisines, limit) => {
    console.log(cuisines.length);
    if (cuisines.length > limit) {
      return cuisines.substring(0, limit) + "...";
    }

    return cuisines;
  };

  return (
    <div className="w-64  shadow-md transition-transform transform hover:shadow-lg hover:scale-105 ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant"
        className="h-40 object-cover w-full rounded-2xl"
      />
      <div className="py-4 px-2">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="font-medium">⭐ {avgRating} </p>
        <p className="font-thin">
          {" "}
          {truncateCusines(cuisines.join(", "), 50)}{" "}
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
