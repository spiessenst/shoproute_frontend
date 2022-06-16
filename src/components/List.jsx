import { useGetListforStoreQuery } from "../store/shoplistApi";
import { useSelector } from "react-redux";
import {
  usePatchQtyMutation,
  usePatchCheckedMutation,
  usePatchDeleteMutation,
} from "../store/shopListApi";
import SingleProduct from "./SingleProduct";
import ReactLoading from "react-loading";

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
    await patchQty({
      product_id: e.target.dataset.id,
      shoppinglist_id,
      qty: parseInt(e.target.dataset.qty) + 1,
    });
  };

  const handleDecrement = async (e) => {
    e.preventDefault();
    e.target.dataset.qty > 1 &&
      (await patchQty({
        product_id: e.target.dataset.id,
        shoppinglist_id,
        qty: parseInt(e.target.dataset.qty) - 1,
      }));
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

    await patchChecked({
      product_id: e.target.dataset.id,
      shoppinglist_id,
      checked,
    });
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteProduct({
      product_id: e.target.dataset.id,
      shoppinglist_id,
    });
  };
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
        <ul className="products__list">
          {data.map((item) => (
            <SingleProduct
              key={item.product_id}
              item={item}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
