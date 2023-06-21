import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAdd } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { filterAds } from "../../features/ads/adsSlice";

const Navigation = ({ setShowForm, showForm }) => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    dispatch(filterAds(searchQuery));
  };

  return (
    <div className="navigation">
      <div className="search">
        <input
          type="text"
          onChange={(e) => handleSearch(e)}
          placeholder="search your ad"
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </button>
      </div>
      <div className="create">
        <button onClick={() => setShowForm(!showForm)}>
          <span>Post Your Ad </span>
          <FontAwesomeIcon icon={faAdd} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
