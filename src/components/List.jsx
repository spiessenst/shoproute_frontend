import { useGetListforStoreQuery } from "../store/shoplistApi";
import { useSelector } from "react-redux";
import {
  usePatchQtyMutation,
  usePatchCheckedMutation,
  usePatchDeleteMutation,
} from "../store/shopListApi";



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
  const [patchQty] = usePatchQtyMutation();
  const [patchChecked] = usePatchCheckedMutation();
  const [deleteProduct] = usePatchDeleteMutation();

  const handleIncrement = async (e) => {
    e.preventDefault();
    patchQty({
      product_id: e.target.dataset.id,
      shoppinglist_id,
      qty: parseInt(e.target.dataset.qty) + 1,
    });
  };

  const handleDecrement = async (e) => {
    e.preventDefault();
    e.target.dataset.qty > 1 &&
      patchQty({
        product_id: e.target.dataset.id,
        shoppinglist_id,
        qty: parseInt(e.target.dataset.qty) - 1,
      });
  };

  const handleChecked = async (e) => {
    e.preventDefault();
    let checked;
    if (
      data.filter((item) => item.product_id == e.target.dataset.id)[0]
        .checked == 0
    ) {
      checked = 1;
    } else {
      checked = 0;
    }

    patchChecked({
      product_id: e.target.dataset.id,
      shoppinglist_id,
      checked,
    });
  };
  const handleDelete = async (e) => {
    e.preventDefault();

    deleteProduct({
      product_id: e.target.dataset.id,
      shoppinglist_id,
    });
  };
  return (
    <>
      {isLoading && <p>loading...</p>}
      {isError && <p>error...</p>}

      {data && (
        <ul>
          {data.map(({ product_id, product_name, qty, checked }) => (
            <li key={product_id}>
              {product_name} {qty}
              <button
                data-id={product_id}
                data-qty={qty}
                onClick={handleIncrement}
              >
                +
              </button>
              <button
                data-id={product_id}
                data-qty={qty}
                onClick={handleDecrement}
              >
                -
              </button>
              <button
                className={!parseInt(checked) ? "check" : "check check--on"}
                data-id={product_id}
                onClick={handleChecked}
              >
                {checked}
              </button>
              <button
                className="delete"
                data-id={product_id}
                onClick={handleDelete}
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
