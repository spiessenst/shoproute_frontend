import { useGetAllDepartmentsQuery } from "../store/departmentsApi";
import { usePostNewproductMutation } from "../store/productsApi";
import { usePostproductOnListMutation } from "../store/shoplistApi";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

const Departments = ({ setShowDepartments, newProduct }) => {
  const shoppinglist_id = useSelector(
    (s) => s.shoppinglistState.shoppinglist_id
  );

  const { data, isError, isLoading } = useGetAllDepartmentsQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [PostNewProduct] = usePostNewproductMutation();
  const [postproductOnList] = usePostproductOnListMutation();

  const handleClick = async (e) => {
    e.preventDefault();
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
    setShowDepartments(false);
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
        <ul className="departments">
          {data.map(({ department_id, department_name }) => (
            <li
              className="departments__item"
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
