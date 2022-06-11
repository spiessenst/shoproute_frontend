import Lists from "./components/Lists";
import Stores from "./components/Stores";
import List from "./components/List";
import "./styles/styles.scss";

const App = () => {
  return (
    <div>
      <Lists />
      <Stores />
      <List />
    </div>
  );
};

export default App;
