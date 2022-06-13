import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import AddProduct from "./pages/AddProduct";
import PreviousLists from "./pages/PreviousLists";
import Main from "./pages/Main";

import "./styles/style.scss";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Logo />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
          <Route path="/PreviousLists" element={<PreviousLists />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
