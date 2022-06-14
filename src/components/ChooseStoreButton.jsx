import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ChooseStoreButton = () => {
  const storeName = useSelector((s) => s.storeState.store_name);
  return (
    <Link to="/ChooseStore">
      <div className="choosebutton">
        {!storeName ? "Kies winkel" : `Geselecteerde winkel is: ${storeName}`}
      </div>
    </Link>
  );
};

export default ChooseStoreButton;
