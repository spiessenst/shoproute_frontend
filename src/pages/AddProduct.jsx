import Stores from "../components/Stores";
import List from "../components/List";
import Addproducts from "../components/Addproducts";
import DeleteList from "../components/DeleteList";
import ListName from "../components/ListName";

const AddProduct = () => {
  return (
    <>
      <Stores />
      <ListName />
      <Addproducts />
      <List />
      <DeleteList />
    </>
  );
};

export default AddProduct;
