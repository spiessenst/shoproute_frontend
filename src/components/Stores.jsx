import { setStore } from "../store/store";
import { useGetAllStoresQuery } from "../store/storesApi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Stores = () => {
  const { data, isError, isLoading } = useGetAllStoresQuery(undefined, {
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
          {data.map(({ store_id, store_name }) => (
            <Link key={store_id} to="/AddProduct">
              <li
                className="lists__item"
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
