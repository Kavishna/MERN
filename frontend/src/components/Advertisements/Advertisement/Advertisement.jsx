import "./Advertisement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPhone } from "@fortawesome/free-solid-svg-icons";

const Advertisement = ({ title, price, phone }) => {
  return (
    <div className="ad">
      <div className="image"></div>
      <div className="details">
        <h3>{title}</h3>
        <div className="price">
          <p>Rs : {price}</p>
        </div>
        <div className="phone">
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} size="10px" />
            </span>{" "}
            {phone}
          </p>
        </div>
        <div className="delete">
          <p className="time">2 days ago</p>
          <button title="Delete Advertisement">
            <span>Delete AD</span>
            <FontAwesomeIcon icon={faTrash} size="l" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
