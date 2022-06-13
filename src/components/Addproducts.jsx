import CreatableSelect from "react-select/creatable";
import { useGetAllProductsQuery } from "../store/productsApi";
import Departments from "./Departments";
import { useState } from "react";

const Addproducts = () => {
  let items;
  const [showDepartments, setShowDepartments] = useState(false);
  const [newProduct, setNewProduct] = useState("");

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

  const handleChange = (product) => {
    if (product.__isNew__) {
      setShowDepartments(true);
      setNewProduct(product.value);
    }
  };

  return (
    <>
      {isSuccess && (
        <CreatableSelect options={items} isClearable onChange={handleChange} />
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
