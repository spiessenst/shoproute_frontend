import { setStore } from "../store/store";
import { useGetAllStoresQuery } from "../store/storesApi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Stores = () => {
  const { data, isError, isLoading } = useGetAllStoresQuery(undefined, {
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
          {data.map(({ store_id, store_name }) => (
            <Link key={store_id} to="/AddProduct">
              <li
                key={store_id}
                onClick={() => dispatch(setStore({ store_id, store_name }))}
              >
                {store_name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default Stores;
