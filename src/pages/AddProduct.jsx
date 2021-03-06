import List from "../components/List";
import Addproducts from "../components/Addproducts";
import DeleteList from "../components/DeleteList";
import ListName from "../components/ListName";
import ChooseStoreButton from "../components/ChooseStoreButton";
import Main from "../pages/Main";

const AddProduct = () => {
  return (
    <>
      <ChooseStoreButton />
      <ListName />
      <Addproducts />
      <List />
      <DeleteList />
      <Main />

    </>
  );
};

export default AddProduct;
