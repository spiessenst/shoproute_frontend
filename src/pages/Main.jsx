import { Link } from "react-router-dom";
import { setShoppinglist } from "../store/list";
import { usePostnewListMutation } from "../store/shopListApi";
import { useDispatch } from "react-redux";
import { formatDate } from "../js/functions";

const Main = () => {
  const [postnewList] = usePostnewListMutation();
  const dispatch = useDispatch();
  const handleClick = async () => {
    const { data, error } = await postnewList({
      shoppinglist_name: "Mijn nieuwe lijst " + formatDate(new Date()),
    });
    !error &&
      dispatch(
        setShoppinglist({
          shoppinglist_id: data.shoppinglist_id,
          shoppinglist_name: data.shoppinglist_name,
        })
      );
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
