import Lists from "./components/Lists";
import Stores from "./components/Stores";
import List from "./components/List";
import Addproducts from "./components/Addproducts";
import "./styles/style.scss";

const App = () => {
  return (
    <div>
      <Lists />
      <Stores />
      <Addproducts />
      <List />
    </div>
  );
};

export default App;
