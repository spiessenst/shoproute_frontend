import { setShoppinglist } from "../store/list";
import { useGetAllListsQuery } from "../store/shopListApi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Lists = () => {
  const { data, isError, isLoading } = useGetAllListsQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const dispatch = useDispatch();
  return (
    <>
      {isLoading && (
        <div className="Loading">
          <ReactLoading
            type={"bubbles"}
            color={"#335a9f"}
            height={"20%"}
            width={"20%"}
          />
        </div>
      )}
      {isError && <p>error...</p>}
      {data && (
        <ul className="lists">
          {data.map(({ shoppinglist_id, shoppinglist_name }) => (
            <Link key={shoppinglist_id} to="/AddProduct">
              <li
                className="lists__item"
                key={shoppinglist_id}
                onClick={() =>
                  dispatch(
                    setShoppinglist({ shoppinglist_id, shoppinglist_name })
                  )
                }
              >
                <span> {shoppinglist_name}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default Lists;
