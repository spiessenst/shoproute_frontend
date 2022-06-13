import { setStore } from "../store/store";
import { useGetAllDepartmentsQuery } from "../store/departmentsApi";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  useGetAllProductsQuery,
  usePostNewproductMutation,
} from "../store/productsApi";

const Departments = ({ setShowDepartments }) => {
  const [department_id, setDeparment_id] = useState();

  const { data, isError, isLoading } = useGetAllDepartmentsQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const newproductName = useSelector((s) => s.productState.newproduct);
  const [PostNewProduct] = usePostNewproductMutation();
  const handleClick = (e) => {
    setDeparment_id(department_id);

    PostNewProduct({
      product_name: newproductName,
      department_id: e.target.dataset.id,
    });
    setDeparment_id();
    setShowDepartments(false);
  };
  return (
    <>
      {isLoading && <p>loading...</p>}
      {isError && <p>error...</p>}
      {data && (
        <ul>
          {data.map(({ department_id, department_name }) => (
            <li
              data-id={department_id}
              key={department_id}
              onClick={handleClick}
            >
              {department_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Departments;
