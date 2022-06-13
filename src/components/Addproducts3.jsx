import { DatalistInput, useComboboxControls } from "react-datalist-input";
import { useState, useCallback, useEffect } from "react";
import { useGetAllProductsQuery } from "../store/productsApi";
import { useSelector } from "react-redux";

const Addproducts = () => {
  let items;

  const [item, setItem] = useState({});
  const [value, setValue] = useState("");
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
      id: product_id,
      value: product_name,
      department_id,
    }));
  }

  const onSelect = useCallback((selectedItem) => {
    setItem(selectedItem);
  }, []);

  function HandleOnClick(e) {
    e.preventDefault();
    console.log(items.find((item) => item.value == value));
    if (item.value == undefined) {
      // console.log(value);
    }

    // if (item) console.log(item);
  }

  return (
    <div className="add-product">
      {isSuccess && (
        <DatalistInput
          placeholder="Zoek een product"
          onChange={(e) => setValue(item.value)}
          onSelect={(selectedItem) => console.log(selectedItem)}
          items={items}
          value={item.value}
          inputProps={{
            required: true,
          }}
        />
      )}
      <button onClick={HandleOnClick}> +</button>
    </div>
  );
};

export default Addproducts;
