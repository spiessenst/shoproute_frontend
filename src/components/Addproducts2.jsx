import CreatableSelect from "react-select/creatable";
import {
  useGetAllProductsQuery,
  usePostNewproductMutation,
} from "../store/productsApi";
import { useSelector } from "react-redux";
import Departments from "./Departments";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/products";
import { useState } from "react";

const Addproducts2 = () => {
  let items;
  const [showDepartments, setShowDepartments] = useState(false);


  const { data, isError, isLoading, isSuccess } = useGetAllProductsQuery(
    undefined,
    {
      pollingInterval: 0,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );
  if (isSuccess) {
    items = data.map(({ product_id, product_name, department_id }) => ({
      value: product_id,
      label: product_name,
      department_id,
    }));
  }
  const dispatch = useDispatch();
  const [PostNewProduct] = usePostNewproductMutation();

  const handleChange = (product) => {
    if (product.__isNew__) {
      setShowDepartments(true);
      dispatch(setProducts(product.value));
    }
  };

  return (
    <>
      {isSuccess && (
        <CreatableSelect options={items} isClearable onChange={handleChange} />
      )}
      {showDepartments && <Departments setShowDepartments={setShowDepartments} />}
    </>
  );
};

export default Addproducts2;
