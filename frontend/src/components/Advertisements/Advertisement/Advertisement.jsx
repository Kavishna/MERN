import "./Advertisement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchAds } from "../../../features/ads/adsSlice";

const Advertisement = ({ id, title, price, phone, image }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/ads/${id}`)
      .then((response) => {
        dispatch(fetchAds());
        console.log("Deleted successfully");
      })
      .catch((error) => {
        console.error("Delete error:", error);
      });
  };

  return (
    <div className="ad">
      <div className="image">
        <img src={`data:image/jpeg;base64, ${image}`} alt={title} />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <div className="price">
          <p>Rs : {price}</p>
        </div>
        <div className="phone">
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            {phone}
          </p>
        </div>
        <div className="delete">
          <p className="time">2 days ago</p>
          <button onClick={() => handleDelete()} title="Delete Advertisement">
            <span>Delete AD</span>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
