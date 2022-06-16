import { Link } from "react-router-dom";
import { setShoppinglist } from "../store/list";
import { usePostnewListMutation } from "../store/shopListApi";
import { useDispatch } from "react-redux";
import { formatDate } from "../js/functions";
import { useSelector } from "react-redux";

const Main = () => {
  const [postnewList] = usePostnewListMutation();
  const user_id = useSelector((s) => s.userState.user_id);
  const dispatch = useDispatch();
  const handleClick = async () => {
    const { data, error } = await postnewList({
      shoppinglist_name: "Mijn nieuwe lijst " + formatDate(new Date()),
      user_id,
    });
    !error &&
      dispatch(
        setShoppinglist({
          shoppinglist_id: data.shoppinglist_id,
          shoppinglist_name: data.shoppinglist_name,
          user_id: data.user_id,
        })
      );
  };
  return (
    <div className="mainselect">
      <div className="select">
        <Link to="/AddProduct" onClick={handleClick}>
          <div className="select__new">
            <p>Nieuwe lijst</p>
          </div>
        </Link>
        <Link to="/PreviousLists">
          <div className="select__old">
            <p>Vorige lijsten</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
