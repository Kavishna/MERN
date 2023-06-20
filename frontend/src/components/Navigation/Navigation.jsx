import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAdd } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ setShowForm, showForm }) => {
  return (
    <div className="navigation">
      <div className="search">
        <input type="text" placeholder="search your ad" />
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
