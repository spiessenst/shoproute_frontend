import { useGetAllDepartmentsQuery } from "../store/departmentsApi";
import { useState } from "react";
import { usePostNewproductMutation } from "../store/productsApi";
import { usePostproductOnListMutation } from "../store/shoplistApi";
import { useSelector } from "react-redux";

const Departments = ({ setShowDepartments, newProduct }) => {
  const shoppinglist_id = useSelector(
    (s) => s.shoppinglistState.shoppinglist_id
  );
  const [department_id, setDeparment_id] = useState();
  const { data, isError, isLoading } = useGetAllDepartmentsQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [PostNewProduct] = usePostNewproductMutation();
  const [postproductOnList] = usePostproductOnListMutation();

  const handleClick = async (e) => {
    e.preventDefault();
    // setDeparment_id(department_id);
    const { data, error } = await PostNewProduct({
      product_name: newProduct,
      department_id: e.target.dataset.id,
    });
    !error &&
      shoppinglist_id &&
      postproductOnList({
        product_id: data.product_id,
        shoppinglist_id,
      });

    //   setDeparment_id();
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
