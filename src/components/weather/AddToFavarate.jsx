import { useContext, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, useWeatherContext } from "../../context";
const AddToFavarate = () => {
  const { favourites, setFavourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const [isFavouriteToggle, setIsFavouriteToggle] = useState(false);
  const { weatherData } = useWeatherContext();
  const { latiude, longitude, location } = weatherData;

  function handleAddToFavourites() {
    const found = favourites.find((fa) => fa.location === location);

    if (!found) {
      addToFavourites(latiude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFavouriteToggle(!isFavouriteToggle);
  }

  return (
    <div className="flex items-center justify-end space-x-6">
      <button
        className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        onClick={handleAddToFavourites}
      >
        <span>Add to Favourite</span>
        <img src={isFavouriteToggle ? RedHeartIcon : HeartIcon} alt="" />
      </button>
    </div>
  );
};

export default AddToFavarate;
