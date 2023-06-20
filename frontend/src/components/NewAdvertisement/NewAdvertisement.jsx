import "./NewAdvertisement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const NewAdvertisement = ({ setShowForm }) => {
  return (
    <div className="form">
      <button className="close" onClick={() => setShowForm(false)}>
        <FontAwesomeIcon icon={faClose} size="2xl" />
      </button>

      <h1>Post your Advertisement</h1>

      <form>
        <div className="file">
          <label htmlFor="image">Select Your Image</label>
          <input type="file" name="image" id="image" />
        </div>

        <div className="title">
          <label htmlFor="title">Make And Model</label>
          <input type="text" name="title" />
        </div>

        <div className="price">
          <label htmlFor="price">Price</label>
          <input type="text" name="price" />
        </div>

        <div className="phone">
          <label htmlFor="phone">Contact No</label>
          <input type="text" name="phone" />
        </div>

        <button type="submit">Publish Your Ad</button>
      </form>
    </div>
  );
};

export default NewAdvertisement;
