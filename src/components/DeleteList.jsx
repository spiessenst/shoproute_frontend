import { Link } from "react-router-dom";
import { useListDeleteMutation } from "../store/shopListApi";
import { useSelector } from "react-redux";

const DeleteList = () => {
  const [listDelete] = useListDeleteMutation();
  const shoppinglist_id = useSelector(
    (s) => s.shoppinglistState.shoppinglist_id
  );
  const handleClick = async () => {
    listDelete({ shoppinglist_id });
  };
  return (
    <Link to="/Main">
      <button className="btn_delete" onClick={handleClick}>
        Verwijder lijst
      </button>
    </Link>
  );
};

export default DeleteList;
