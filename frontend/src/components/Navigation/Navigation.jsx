import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="search">
        <input type="text" placeholder="search your ad" />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </button>
      </div>
      <div className="create">
        <button>Post Your Ad</button>
      </div>
    </div>
  );
};

export default Navigation;
