import { useGetListforStoreQuery } from "../store/shoplistApi";
import { useSelector } from "react-redux";

const List = () => {
  const store_id = useSelector((s) => s.storeState.store_id);
  const shoppinglist_id = useSelector(
    (s) => s.shoppinglistState.shoppinglist_id
  );
  const { data, isError, isLoading } = useGetListforStoreQuery(
    {
      shoppinglist_id,
      store_id,
    },
    {
      pollingInterval: 0,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );
  return (
    <>
      {isLoading && <p>loading...</p>}
      {isError && <p>error...</p>}
      {data && console.log(data)}
    </>
  );
};

export default List;
