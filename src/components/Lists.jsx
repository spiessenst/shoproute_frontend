import { setShoppinglist } from "../store/list";
import { useGetAllListsQuery } from "../store/shopListApi";
import { useDispatch } from "react-redux";

const Lists = () => {
  const { data, isError, isLoading } = useGetAllListsQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const dispatch = useDispatch();
  return (
    <>
      {isLoading && <p>loading...</p>}
      {isError && <p>error...</p>}
      {data && (
        <ul>
          {data.map(({ shoppinglist_id, shoppinglist_name }) => (
            <li
              key={shoppinglist_id}
              onClick={() => dispatch(setShoppinglist(shoppinglist_id))}
            >
              {shoppinglist_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Lists;
