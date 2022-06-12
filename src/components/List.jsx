import { useGetListforStoreQuery } from "../store/shoplistApi";
import { useSelector } from "react-redux";
import { usePatchQtyMutation } from "../store/shopListApi";

const List = () => {
  const qty = "20";
  const [product_id, setProduct_id] = useState();
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
  const [patchQty] = usePatchQtyMutation();

  const HandleOnclick = (e) => {
    e.preventDefault();
    patchQty({ product_id, shoppinglist_id, qty });
  };
  return (
    <>
      {isLoading && <p>loading...</p>}
      {isError && <p>error...</p>}
      {data && (
        <ul>
          {data.map(({ product_id, product_name, qty }) => (
            <li key={product_id}>
              {product_name} {qty}
              <button onClick={HandleOnclick}>+</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
