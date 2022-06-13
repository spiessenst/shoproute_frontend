import { setStore } from "../store/store";
import { useGetAllStoresQuery } from "../store/storesApi";
import { useDispatch } from "react-redux";

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
            <li key={store_id} onClick={() => dispatch(setStore(store_id))}>
              {store_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Stores;
