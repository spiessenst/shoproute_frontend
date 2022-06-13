export const ListName = () => {
  async function handleBlur(e) {}
  return (
    <p
      className="listName"
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
    >
      TEST
    </p>
  );
};
export default ListName;
