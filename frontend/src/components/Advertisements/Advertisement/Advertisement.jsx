import "./Advertisement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPhone } from "@fortawesome/free-solid-svg-icons";

const Advertisement = ({ title, price, phone, image }) => {
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
          <button title="Delete Advertisement">
            <span>Delete AD</span>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
