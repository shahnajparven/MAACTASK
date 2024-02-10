
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/user/UserList";
import Navbar from "./component/Navbar";
import UserDetails from "./pages/user/UserDetails";
import AddUser from "./pages/user/AddUser";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"userlist"} element={<UserList />} />
          <Route path={"userlist/:id"} element={<UserDetails />} />
          <Route path={"adduser"} element={<AddUser />} />
        </Routes>
    </>
  );
}

export default App;
