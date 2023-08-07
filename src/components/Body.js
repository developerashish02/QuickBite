import RESTAURANT_DATA from "../utils/mockData";
import Restaurant from "./Restaurant";

const Body = () => {
    return (
        <div className="body">
            <div className="Body_search">
                <input type="text" placeholder="Search..." />
                <button className="body_search_btn">
                    Submit
                </button>
            </div>

            <div className="res-container">
                {RESTAURANT_DATA?.map(restaurant => <Restaurant resObj={restaurant} key={restaurant?.info?.id} />)}
            </div>
        </div>
    )
}

export default Body; 