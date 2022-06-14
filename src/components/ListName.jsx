import { useSelector } from "react-redux";
import { useListNameUpdateMutation } from "../store/shopListApi";

export const ListName = () => {
  const [listNameUpdate] = useListNameUpdateMutation();
  const shoppinglist = useSelector((s) => s.shoppinglistState);
  async function handleBlur(e) {
    await listNameUpdate({
      shoppinglist_id: shoppinglist.shoppinglist_id,
      shoppinglist_name: document.querySelector(".listName").innerHTML,
    });
  }
  return (
    <p
      className="listName"
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
    >
      {shoppinglist.shoppinglist_name}
    </p>
  );
};
export default ListName;
