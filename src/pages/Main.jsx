import { Link } from "react-router-dom";
import { setShoppinglist } from "../store/list";
import { usePostnewnListMutation } from "../store/shopListApi";
import { useDispatch } from "react-redux";
import { formatDate } from "../js/functions";

const Main = () => {
  const [postnewnList] = usePostnewnListMutation();
  const dispatch = useDispatch();
  const handleClick = async () => {
    const { data, error } = await postnewnList({
      shoppinglist_name: "Mijn nieuwe lijst " + formatDate(new Date()),
    });
    !error && dispatch(setShoppinglist(data.shoppinglist_id));
  };
  return (
    <>
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
    </>
  );
};

export default Main;
