import CreatableSelect from "react-select/creatable";
import { DatalistInput, useComboboxControls } from "react-datalist-input";
import { useState, useCallback, useEffect } from "react";
import { useGetAllProductsQuery } from "../store/productsApi";
import { useSelector } from "react-redux";

const Addproducts2 = () => {
  let items;
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
  const handleInputChange = (inputValue) => {
    console.log(inputValue);
  };

  const handleChange = (product) => {
    console.log(product);
  };
  return (
    isSuccess && (
      <CreatableSelect
        className="react-select-container"
        options={items}
        isClearable
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    )
  );
};

export default Addproducts2;
