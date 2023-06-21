import "./NewAdvertisement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  setTitle,
  setPrice,
  setPhone,
  setImagePath,
} from "../../features/form/formSlice";
import { useState } from "react";

const NewAdvertisement = ({ setShowForm }) => {
  const title = useSelector((state) => state.form.title);
  const price = useSelector((state) => state.form.price);
  const phone = useSelector((state) => state.form.phone);
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (image) {
      try {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("price", price);
        formData.append("phone", phone);

        const response = await axios.post(
          "http://localhost:3000/api/ads/upload",
          formData
        );

        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div className="form">
      <button className="close" onClick={() => setShowForm(false)}>
        <FontAwesomeIcon icon={faClose} size="2xl" />
      </button>

      <h1>Post your Advertisement</h1>

      <form onSubmit={handleSubmit}>
        <div className="file">
          <label htmlFor="image">Select Your Image</label>
          <input
            type="file"
            onChange={(e) => handleFileSelect(e)}
            name="image"
            id="image"
          />
        </div>

        <div className="title">
          <label htmlFor="title">Make And Model</label>
          <input
            type="text"
            name="title"
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>

        <div className="price">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            onChange={(e) => dispatch(setPrice(e.target.value))}
            name="price"
          />
        </div>

        <div className="phone">
          <label htmlFor="phone">Contact No</label>
          <input
            type="text"
            onChange={(e) => dispatch(setPhone(e.target.value))}
            name="phone"
          />
        </div>

        <button type="submit">Publish Your Ad</button>
      </form>
    </div>
  );
};

export default NewAdvertisement;
