import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Logo from "./components/Logo";
import AddProduct from "./pages/AddProduct";
import PreviousLists from "./pages/PreviousLists";
import Main from "./pages/Main";
import ChooseStore from "./pages/ChooseStore";
import Login from "./pages/Login";
import "./styles/style.scss";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const ProtectedRoute = ({ isLoggedIn, redirectPath = "/", children }) => {
    if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };
  return (
    <Router>
      <div className="container">
        <Logo />
        <Routes>
          <Route
            path="/"
            element={<Login setisLoggedIn={setisLoggedIn} />}
          ></Route>

          <Route
            path="/Main"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Main />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/AddProduct"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <AddProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/PreviousLists"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <PreviousLists />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/ChooseStore"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ChooseStore />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
