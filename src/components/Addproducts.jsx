import CreatableSelect from "react-select/creatable";
import { useGetAllProductsQuery } from "../store/productsApi";
import {
  usePostproductOnListMutation,
  useGetListforNoStoreQuery,
} from "../store/shoplistApi";

import Departments from "./Departments";
import { useState } from "react";
import { useSelector } from "react-redux";

const Addproducts = () => {
  const shoppinglist_id = useSelector(
    (s) => s.shoppinglistState.shoppinglist_id
  );

  let items;
  const [showDepartments, setShowDepartments] = useState(false);
  const [newProduct, setNewProduct] = useState("");

  const {
    data: productData,
    isError: isError1,
    isLoading: isLoading1,
    isSuccess,
  } = useGetAllProductsQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  if (isSuccess) {
    items = productData.map(({ product_id, product_name, department_id }) => ({
      value: product_id,
      label: product_name,
      department_id,
    }));
  }

  const { data: listData } = useGetListforNoStoreQuery(
    {
      shoppinglist_id,
    },
    {
      pollingInterval: 0,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const [postproductOnList] = usePostproductOnListMutation();
  const handleChange = async (product) => {
    if (product) {
      if (!listData.find((item) => item.product_id == product.value)) {
        if (product.__isNew__) {
          setShowDepartments(true);
          setNewProduct(product.value);
        } else {
          shoppinglist_id &&
            (await postproductOnList({
              product_id: product.value,
              shoppinglist_id,
            }));
        }
      }
    }
  };

  return (
    <>
      {isLoading1 && <p>loading...</p>}
      {isError1 && <p>error...</p>}
      {isSuccess && (
        <CreatableSelect
          className="productSelect"
          classNamePrefix="inner"
          placeholder="Geef een product op"
          options={items}
          isClearable
          onChange={handleChange}
        />
      )}
      {showDepartments && (
        <Departments
          setShowDepartments={setShowDepartments}
          newProduct={newProduct}
        />
      )}
    </>
  );
};

export default Addproducts;
