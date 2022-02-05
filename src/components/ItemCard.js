import { LocationMarkerIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";

const ItemCard = (props) => {
  const { imageUrl, title, date, location } = props;
  return (
    <div className="flex w-full h-full bg-gray-100 p-2">
      <div className="w-2/5 h-auto">
        <img className="w-full h-28" src={imageUrl} alt="test" />
      </div>
      <div className="w-3/5 p-3 ">
        <p className="text-gray-900 text-lg leading-none">{title}</p>
        <p className="text-gray-900 text-sm py-3">{date}</p>
        <div className="flex float-right">
          <LocationMarkerIcon className="h-5 w-5 text-gray-900" />
          <p className="text-gray-900 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};

ItemCard.defaultProps = {
  imageUrl: "",
  title: "",
  date: "",
  location: "",
};

export default ItemCard;
